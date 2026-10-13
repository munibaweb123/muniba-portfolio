import { about, hackathons, links, projects, stack, teaching, ventures, youtube, profile } from "@/content/site";
import { ButtonLink, Section, Tag } from "./ui";
import ContactForm from "./ContactForm";
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
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <div className="pt-4">
            <p className="font-mono text-sm text-amber">education</p>
            <ul className="mt-3 space-y-2 text-base">
              {about.education.map((e) => (
                <li key={e.degree} className="flex flex-wrap justify-between gap-x-4 border-b border-line pb-2">
                  <span className="text-text">
                    {e.degree} · {e.school}
                  </span>
                  <span className="font-mono text-sm">{e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {about.pillars.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-line bg-surface p-5">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((g) => (
          <div key={g.group} className="rounded-2xl border border-line p-5">
            <h3 className="font-mono text-sm text-teal">{g.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
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
              <li key={t} className="flex gap-4 border-b border-amber/15 pb-3 last:border-0">
                <span className="font-mono text-sm text-amber">{String(i + 1).padStart(2, "0")}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {teaching.builds.map((b) => (
            <div key={b.title} className="rounded-2xl border border-line bg-surface p-5">
              <h3 className="font-display text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
            </div>
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
        {featured.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-amber/50"
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
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((p) => (
          <article key={p.title} className="flex flex-col rounded-2xl border border-line p-5 transition hover:border-amber/50">
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
        ))}
      </div>

      <div className="mt-10">
        <ButtonLink href={links.github} external>
          All repositories on GitHub →
        </ButtonLink>
      </div>
    </Section>
  );
}

function ProjectLinks({ repo, live }: { repo?: string; live?: string }) {
  if (!repo && !live) return null;
  return (
    <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
          Live ↗
        </a>
      )}
      {repo && (
        <a href={repo} target="_blank" rel="noopener noreferrer" className="text-text hover:text-amber">
          Code ↗
        </a>
      )}
    </div>
  );
}

export function Hackathons() {
  return (
    <Section id="hackathons" label="hackathons" title="Built under deadline.">
      <ol className="relative space-y-4 border-l border-line pl-6 sm:pl-8">
        {hackathons.map((h) => (
          <li key={h.event} className="relative">
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-amber bg-ink sm:-left-[39px]" />
            <div className="rounded-2xl border border-line bg-surface p-5 sm:flex sm:items-start sm:justify-between sm:gap-6">
              <div>
                {h.when && <p className="font-mono text-xs text-muted">{h.when}</p>}
                <h3 className="mt-1 font-display text-lg font-semibold">{h.event}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.what}</p>
              </div>
              <span className="mt-3 inline-block shrink-0 rounded-full border border-teal/40 px-3 py-1 font-mono text-xs text-teal sm:mt-0">
                {h.status}
              </span>
            </div>
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
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-rose text-2xl font-bold text-ink">▶</div>
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
            {youtube.topics.map((t) => (
              <span key={t} className="rounded-full border border-line bg-raised px-4 py-2 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {youtube.featured.length > 0 && (
          <div className="grid gap-4 border-t border-line p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-3">
            {youtube.featured.map((v) => (
              <div key={v.id}>
                <div className="aspect-video overflow-hidden rounded-xl border border-line">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="mt-2 text-sm">{v.title}</p>
              </div>
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
        {ventures.map((v) => (
          <div key={v.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
            <p className="font-mono text-xs text-teal">{v.role}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{v.title}</h3>
            <p className="mt-3 flex-1 leading-relaxed text-muted">{v.body}</p>
            {v.link && (
              <a
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm text-amber hover:underline"
              >
                View profile ↗
              </a>
            )}
          </div>
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
          {channels.map((c) => {
            const Icon = channelIcons[c.label];
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  title={`${c.label} — ${c.value}`}
                  aria-label={`${c.label} — ${c.value}`}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface transition hover:border-amber/60"
                >
                  {Icon ? <Icon aria-hidden className="h-5 w-5 text-amber" /> : <span className="text-text">{c.label[0]}</span>}
                </a>
              </li>
            );
          })}
        </ul>
        {/* The form appears once links.email is set in site.ts */}
        {links.email && <ContactForm email={links.email} />}
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © 2026 {profile.name} · {profile.location}
        </p>
        <p className="font-mono">built with next.js · deployed on vercel</p>
      </div>
    </footer>
  );
}
