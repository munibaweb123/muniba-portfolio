"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent";

/**
 * No backend needed: the form opens the visitor's email app with the
 * message pre-filled. Swap for Formspree / Resend later if you want
 * messages delivered without leaving the page.
 */
export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(window.clearTimeout);
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "Hello from your portfolio");
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("from")})`;
    setStatus("sending");
    timers.current.push(
      window.setTimeout(() => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
      }, 700),
      window.setTimeout(() => setStatus("idle"), 4500),
    );
  }

  const field =
    "w-full rounded-lg border border-line bg-ink px-4 py-3 text-text placeholder:text-muted/60 transition duration-200 focus:border-amber focus:outline-none focus:ring-4 focus:ring-amber/15";

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-surface p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          Name
          <input name="name" required className={`${field} mt-1.5`} />
        </label>
        <label className="block text-sm text-muted">
          Email
          <input name="from" type="email" required className={`${field} mt-1.5`} />
        </label>
      </div>
      <label className="block text-sm text-muted">
        Subject
        <input name="subject" className={`${field} mt-1.5`} />
      </label>
      <label className="block text-sm text-muted">
        Message
        <textarea name="message" required rows={5} className={`${field} mt-1.5 resize-y`} />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium text-ink transition duration-300 active:scale-[0.98] ${
          status === "sent" ? "bg-teal text-text" : "bg-amber hover:bg-amber/90"
        }`}
      >
        {status === "sending" && (
          <>
            <svg className="spinner h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Opening your email app…
          </>
        )}
        {status === "sent" && (
          <>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                className="check-draw"
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Message ready to send
          </>
        )}
        {status === "idle" && "Send message"}
      </button>
      <p role="status" className="sr-only">
        {status === "sent" ? "Your email app should open with the message ready." : ""}
      </p>
    </form>
  );
}
