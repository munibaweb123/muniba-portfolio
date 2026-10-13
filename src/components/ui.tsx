import type { ReactNode } from "react";

export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="font-mono text-sm text-amber">
        <span className="text-muted">{"// "}</span>
        {label}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-raised px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "ghost",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";
  const style =
    variant === "solid"
      ? "bg-amber text-ink hover:bg-amber/90"
      : "border border-line text-text hover:border-amber/60 hover:text-amber";
  return (
    <a
      href={href}
      className={`${base} ${style}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
