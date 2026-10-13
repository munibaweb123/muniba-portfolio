import { links, profile, stats, stack } from "@/content/site";
import { ButtonLink } from "./ui";
import { techIcons } from "./techIcons";
import AnimatedStat from "./AnimatedStat";

const terminal: { prompt?: boolean; text: string; tone?: string }[] = [
  { prompt: true, text: "whoami" },
  { text: "muniba — agentic ai dev · full-stack · educator", tone: "text-text" },
  { prompt: true, text: "cat stack.txt" },
  { text: "next.js · fastapi · openai-agents-sdk · postgres", tone: "text-teal" },
  { prompt: true, text: "ls ~/now" },
  { text: "agent-factory-cohort/   techworld/", tone: "text-amber" },
  { prompt: true, text: "echo $MOTTO" },
  { text: "spec it · ship it · teach it", tone: "text-text" },
];

export default function Hero() {
  const ticker = stack.flatMap((g) => g.items);

  return (
    <div id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[28rem] w-[28rem] rounded-full bg-amber/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_10px] shadow-teal" />
            {profile.availability} · {profile.location}
          </p>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Hi, I&apos;m <span className="text-amber">{profile.name}</span>.
          </h1>
          <p className="mt-4 font-mono text-sm text-teal sm:text-base">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="solid">
              See my work
            </ButtonLink>
            <ButtonLink href={links.youtube} external>
              Watch TechWorld
            </ButtonLink>
            {profile.resumeUrl && (
              <ButtonLink href={profile.resumeUrl} external>
                Download CV
              </ButtonLink>
            )}
          </div>
        </div>

        <div className="relative">
          {profile.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute -right-2 -top-10 z-10 h-24 w-24 rounded-2xl border-2 border-amber object-cover shadow-xl sm:h-28 sm:w-28"
            />
          )}
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-rose/80" />
              <span className="h-3 w-3 rounded-full bg-amber/80" />
              <span className="h-3 w-3 rounded-full bg-teal/80" />
              <span className="ml-3 font-mono text-xs text-muted">muniba@karachi: ~</span>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {terminal.map((l, i) => (
                <p key={i} className="term-line break-words" style={{ animationDelay: `${i * 0.25}s` }}>
                  {l.prompt ? (
                    <>
                      <span className="text-teal">➜</span> <span className="text-amber">~</span>{" "}
                      <span className="text-text">{l.text}</span>
                    </>
                  ) : (
                    <span className={l.tone ?? "text-muted"}>{l.text}</span>
                  )}
                </p>
              ))}
              <p className="term-line" style={{ animationDelay: `${terminal.length * 0.25}s` }}>
                <span className="text-teal">➜</span> <span className="text-amber">~</span>{" "}
                <span className="cursor inline-block h-4 w-2 translate-y-0.5 bg-amber" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats render the final value with no JS; AnimatedStat counts up on scroll-into-view when JS is available */}
      <dl className="relative mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-line py-4 pl-5">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold text-text sm:text-4xl">
              <AnimatedStat value={s.value} />
            </dd>
            <dd className="mt-1 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-16 overflow-hidden border-y border-line bg-surface/60 py-4">
        <div className="marquee flex w-max gap-10 font-mono text-sm text-muted">
          {[...ticker, ...ticker].map((t, i) => {
            const icon = techIcons[t];
            return (
              <span key={i} aria-hidden={i >= ticker.length} className="flex items-center gap-10 whitespace-nowrap">
                <span className="flex items-center gap-2">
                  {icon ? <icon.Icon aria-hidden className="h-4 w-4 shrink-0" style={{ color: icon.color }} /> : null}
                  {t}
                </span>
                <span className="text-amber">◆</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
