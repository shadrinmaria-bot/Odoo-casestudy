import { nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {nav.logoText}
        </a>
        <a
          href="#top"
          className="rounded-badge px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-accent-soft hover:text-accent"
        >
          {nav.homeLabel}
        </a>
      </div>
    </header>
  );
}
