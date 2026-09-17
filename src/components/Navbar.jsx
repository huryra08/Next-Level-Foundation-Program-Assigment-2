import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Clapperboard, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft/60 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6 text-marquee" strokeWidth={1.75} />
          <span className="font-display text-xl tracking-tight text-paper">
            MovieExplorer
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors ${
                  isActive ? "text-marquee" : "text-paper-dim hover:text-paper"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/movies"
            className="rounded-full bg-marquee px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-marquee-dim"
          >
            Browse Movies
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border-soft/60 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm ${
                  isActive ? "bg-surface text-marquee" : "text-paper-dim"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
