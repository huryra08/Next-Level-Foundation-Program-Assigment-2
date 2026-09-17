import { Clapperboard, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border-soft/60 bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Clapperboard className="h-5 w-5 text-marquee" strokeWidth={1.75} />
          <span className="font-display text-lg text-paper">MovieExplorer</span>
        </div>

        <p className="text-sm text-paper-dim">
          © 2026 MovieExplorer. Data courtesy of TVMaze.
        </p>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-paper-dim transition-colors hover:text-paper"
        >
          <ExternalLink className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
