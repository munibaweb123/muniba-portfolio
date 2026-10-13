import { about, hackathons, links, projects, stack, teaching, ventures, youtube, profile } from "@/content/site";
import { ButtonLink, Section, Tag } from "./ui";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import TimelineLine from "./TimelineLine";
import { SiGithub, SiYoutube, SiFiverr, SiDiscord } from "react-icons/si";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";

const channelIcons: Record<string, IconType> = {
  Email: FaEnvelope,
  LinkedIn: FaLinkedinIn,
  GitHub: SiGithub,
  YouTube: SiYoutube,
  Fiverr: SiFiverr,
  Discord: SiDiscord,
};

export function About() {
  return (
    <Section id="about" label="about-me" title="Builder first, teacher always.">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <Reveal key={p.slice(0, 20)} delay={i * 100}>
              <p>{p}</p>
            </Reveal>
          ))}
          <div className="pt-4">
            <p className="font-mono text-sm text-amber">education</p>
            <ul className="mt-3 space-y-2 text-base">
              {about.education.map((e, i) => (
                <li key={e.degree}>
                  <Reveal delay={i * 100}>
                    <div className="flex flex-wrap justify-between gap-x-4 border-b border-line pb-2 transition-colors duration-300 hover:border-amber/60">
                      <span className="text-text">
                        {e.degree} · {e.school}
                      </span>
                      <span className="font-mono text-sm">{e.years}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_14px_32px_-18px_var(--color-amber)]">
                <p className="font-mono text-xs text-amber">0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((g, n) => (
          <Reveal key={g.group} delay={n * 100} className="h-full">
            <div className="h-full rounded-2xl border border-line p-5 transition duration-300 hover:border-teal/60">
              <h3 className="font-mono text-sm text-teal">{g.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Teaching() {
  return (
    <Section id="teaching" label="teaching" title="Teaching AI, hands-on." intro={teaching.intro}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="rounded-2xl border border-amber/30 bg-amber-soft p-6">
          <p className="font-mono text-sm text-amber">topics I teach</p>
          <ol className="mt-4 space-y-3">
            {teaching.topics.map((t, i) => (
              <li key={t} className="group border-b border-amber/15 pb-3 last:border-0 last:pb-0">
                <Reveal delay={i * 90}>
                  <div className="flex gap-4 transition-transform duration-300 hover:translate-x-1.5">
                    <span className="font-mono text-sm text-amber transition-transform duration-300 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-amber">{t}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {teaching.builds.map((b, i) => (
            <Reveal key={b.title} delay={i * 110} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_14px_32px_-18px_var(--color-amber)]">
                <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      label="projects"
      title="Things I've built."
      intro="Agent systems, client-ready products and the tools I teach with."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 120} className="h-full">
          <article
            className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-amber/50 hover:shadow-[0_18px_40px_-18px_var(--color-amber)]"
          >
            <p className="font-mono text-xs text-amber">{p.kind}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">{p.title}</h3>
            {p.role && <p className="mt-1 text-sm text-teal">{p.role}</p>}
            <p className="mt-3 flex-1 leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <ProjectLinks repo={p.repo} live={p.live} />
          </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={(i % 4) * 90} className="h-full">
          <article
            className="flex h-full flex-col rounded-2xl border border-line p-5 transition duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[0_14px_32px_-18px_var(--color-amber)]"
          >
            <p className="font-mono text-xs text-muted">{p.kind}</p>
            <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.slice(0, 3).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <ProjectLinks repo={p.repo} live={p.live} />
          </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <ButtonLink href={links.github} external>
          All repositories on GitHub →
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

function ProjectLinks({ repo, live }: { repo?: string; live?: string }) {
  if (!repo && !live) return null;
  return (
    <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="group text-amber hover:underline">
          Live <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      )}
      {repo && (
        <a href={repo} target="_blank" rel="noopener noreferrer" className="group text-text transition-colors hover:text-amber">
          Code <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      )}
    </div>
  );
}

export function Hackathons() {
  return (
    <Section id="hackathons" label="hackathons" title="Built under deadline.">
      <ol className="relative space-y-4 pl-6 sm:pl-8">
        <TimelineLine />
        {hackathons.map((h, i) => (
          <li key={h.event} className="group relative">
            <Reveal delay={i * 100}>
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-amber bg-ink transition duration-300 group-hover:scale-150 group-hover:bg-amber group-hover:shadow-[0_0_14px_var(--color-amber)] sm:-left-[39px]" />
            <div className="rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:translate-x-1.5 hover:border-amber/50 hover:shadow-[0_14px_32px_-18px_var(--color-amber)] sm:flex sm:items-start sm:justify-between sm:gap-6">
              <div>
                {h.when && <p className="font-mono text-xs text-muted">{h.when}</p>}
                <h3 className="mt-1 font-display text-lg font-semibold">{h.event}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.what}</p>
              </div>
              <span className="mt-3 inline-block shrink-0 rounded-full border border-teal/40 px-3 py-1 font-mono text-xs text-teal transition duration-300 group-hover:border-teal group-hover:bg-teal/10 sm:mt-0">
                {h.status}
              </span>
            </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function YouTube() {
  return (
    <Section id="youtube" label="youtube / techworld" title="I explain it on camera, too.">
      <div className="overflow-hidden rounded-3xl border border-line bg-surface">
        <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="group flex items-center gap-4">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute inset-0 animate-ping rounded-2xl bg-rose/40 [animation-duration:2.4s] motion-reduce:animate-none"
                />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-rose text-2xl font-bold text-ink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  ▶
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">{youtube.channel}</h3>
                <p className="font-mono text-sm text-muted">{youtube.handle}</p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted">{youtube.pitch}</p>
            <div className="mt-6">
              <ButtonLink href={links.youtube} variant="solid" external>
                Visit the channel
              </ButtonLink>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {youtube.topics.map((t, i) => (
              <Reveal key={t} delay={i * 70}>
                <span className="inline-block rounded-full border border-line bg-raised px-4 py-2 text-sm transition duration-200 hover:-translate-y-0.5 hover:border-rose/60 hover:text-rose">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        {youtube.featured.length > 0 && (
          <div className="grid gap-4 border-t border-line p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
            {youtube.featured.map((v, i) => (
              <Reveal key={v.id} delay={i * 120}>
              <div className="group">
                <div className="aspect-video overflow-hidden rounded-xl border border-line transition duration-300 group-hover:-translate-y-1 group-hover:border-rose/60 group-hover:shadow-[0_14px_32px_-18px_var(--color-rose)]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="mt-2 text-sm transition-colors duration-300 group-hover:text-rose">{v.title}</p>
              </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export function Ventures() {
  return (
    <Section id="ventures" label="ventures & freelance" title="Beyond the day job.">
      <div className="grid gap-5 md:grid-cols-3">
        {ventures.map((v, i) => (
          <Reveal key={v.title} delay={i * 120} className="h-full">
          <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-teal/60 hover:shadow-[0_18px_40px_-18px_var(--color-teal)]">
            <p className="font-mono text-xs text-teal">{v.role}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-amber">{v.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{v.body}</p>
            {v.link && (
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm text-amber hover:underline"
              >
                View profile{" "}
                <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            )}
          </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const channels = [
    links.email && { label: "Email", value: links.email, href: `mailto:${links.email}` },
    links.linkedin && { label: "LinkedIn", value: "Connect on LinkedIn", href: links.linkedin },
    { label: "GitHub", value: "@munibaweb123", href: links.github },
    { label: "YouTube", value: "@newtechworld1", href: links.youtube },
    links.discord && { label: "Discord", value: "1211021231197786174", href: links.discord },
    links.fiverr && { label: "Fiverr", value: "Hire me on Fiverr", href: links.fiverr },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <Section
      id="contact"
      label="get-in-touch"
      title="Let's build something."
      intro="Hiring for an agentic AI role, need an agent wired into your product, or want me to teach your team? Reach out."
    >
      <div className={links.email ? "grid gap-10 lg:grid-cols-[1fr_1.2fr]" : ""}>
        <ul className="flex flex-wrap gap-3">
          {channels.map((c, i) => {
            const Icon = channelIcons[c.label];
            return (
              <li key={c.label}>
                <Reveal delay={i * 80}>
                <a
                  href={c.href}
                  title={`${c.label} — ${c.value}`}
                  aria-label={`${c.label} — ${c.value}`}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_10px_24px_-12px_var(--color-amber)]"
                >
                  {Icon ? (
                    <Icon aria-hidden className="h-5 w-5 text-amber transition-transform duration-300 group-hover:scale-125" />
                  ) : (
                    <span className="text-text">{c.label[0]}</span>
                  )}
                </a>
                </Reveal>
              </li>
            );
          })}
        </ul>
        {/* The form appears once links.email is set in site.ts */}
        {links.email && (
          <Reveal delay={200}>
            <ContactForm email={links.email} />
          </Reveal>
        )}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Reveal>
          <p>
            © 2026 {profile.name} · {profile.location}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono">built with next.js · deployed on vercel</p>
        </Reveal>
      </div>
    </footer>
  );
}
