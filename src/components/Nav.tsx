import { links, profile } from "@/content/site";
import NavLinks from "./NavLinks";
import ScrollProgress from "./ScrollProgress";

const items = [
  { href: "#about", label: "About" },
  { href: "#teaching", label: "Teaching" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#youtube", label: "YouTube" },
  { href: "#ventures", label: "Ventures" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav-in sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group font-mono text-sm font-medium">
          <span className="inline-block text-amber transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-rotate-6">
            ~/
          </span>
          {profile.name.toLowerCase()}
        </a>

        <NavLinks items={items} />

        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-line px-3 py-1.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber/60 hover:text-amber sm:inline-block"
          >
            GitHub
          </a>

          {/* Mobile menu: works without JavaScript */}
          <details className="group relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-line px-3 py-1.5 text-sm transition active:scale-95 group-open:border-amber/60 group-open:text-amber [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <ul className="menu-pop absolute right-0 mt-2 w-48 rounded-xl border border-line bg-surface p-2 shadow-2xl">
              {items.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="block rounded-lg px-3 py-2 text-sm transition duration-200 hover:translate-x-1 hover:bg-raised hover:text-amber">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
