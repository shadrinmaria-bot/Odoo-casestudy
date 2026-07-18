import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 sm:flex-row">
        <a
          href="#top"
          className="text-sm font-medium text-muted transition-colors hover:text-accent"
        >
          {footer.homeLabel}
        </a>
        {footer.credit ? (
          <p className="text-xs text-faint">{footer.credit}</p>
        ) : null}
      </div>
    </footer>
  );
}
