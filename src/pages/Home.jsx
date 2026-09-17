import { Link } from "react-router";
import { ArrowRight, Film, Search, Star } from "lucide-react";

const Home = () => {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border-soft/60">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-25 lg:block"
          style={{
            background:
              "repeating-linear-gradient(90deg, var(--color-border-soft) 0px, var(--color-border-soft) 2px, transparent 2px, transparent 28px)",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <p className="text-sm font-medium text-marquee">
              Thousands of titles, one search away
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-paper sm:text-6xl">
              Discover your next favorite movie
            </h1>
            <p className="mt-6 max-w-md text-lg text-paper-dim">
              Search, browse, and preview shows from around the world —
              ratings, release dates, and full synopses, all in one place.
            </p>
            <Link
              to="/movies"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-marquee px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-marquee-dim"
            >
              Explore Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center rounded-2xl border border-border-soft bg-surface sm:h-80">
            <Film className="h-16 w-16 text-marquee/70" strokeWidth={1.25} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Search className="h-5 w-5 text-marquee" />
            <h3 className="font-display text-lg text-paper">Search by title</h3>
            <p className="text-sm text-paper-dim">
              Find any show in seconds with live search results.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Star className="h-5 w-5 text-marquee" />
            <h3 className="font-display text-lg text-paper">
              See ratings at a glance
            </h3>
            <p className="text-sm text-paper-dim">
              Every card shows the score so you know what's worth your time.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Film className="h-5 w-5 text-marquee" />
            <h3 className="font-display text-lg text-paper">
              Full details on demand
            </h3>
            <p className="text-sm text-paper-dim">
              Open any title for a synopsis, genre, and network info.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
