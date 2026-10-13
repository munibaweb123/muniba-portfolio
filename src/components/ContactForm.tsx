"use client";

import { useState, type FormEvent } from "react";

/**
 * No backend needed: the form opens the visitor's email app with the
 * message pre-filled. Swap for Formspree / Resend later if you want
 * messages delivered without leaving the page.
 */
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "Hello from your portfolio");
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("from")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-line bg-ink px-4 py-3 text-text placeholder:text-muted/60 focus:border-amber focus:outline-none";

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
        className="w-full rounded-lg bg-amber px-4 py-3 font-medium text-ink transition hover:bg-amber/90"
      >
        Send message
      </button>
      {sent && <p className="text-center text-sm text-teal">Your email app should open with the message ready.</p>}
    </form>
  );
}
