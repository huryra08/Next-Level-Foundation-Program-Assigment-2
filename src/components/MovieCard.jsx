import { Star } from "lucide-react";

const MovieCard = ({ show, onSelect }) => {
  const year = show.premiered ? show.premiered.slice(0, 4) : "—";
  const rating = show.rating?.average ?? null;
  const poster = show.image?.medium;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border-soft bg-surface transition-colors hover:border-marquee/60">
      <div className="aspect-2/3 w-full bg-surface-raised">
        {poster ? (
          <img
            src={poster}
            alt={show.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-paper-dim">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-1 font-display text-base text-paper">
          {show.name}
        </h3>
        <div className="flex items-center gap-3 text-sm text-paper-dim">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-marquee" fill="currentColor" />
            {rating ? rating.toFixed(1) : "N/A"}
          </span>
          <span>{year}</span>
        </div>
        <button
          type="button"
          onClick={() => onSelect(show)}
          className="mt-auto rounded-full border border-border-soft px-4 py-1.5 text-sm text-paper transition-colors hover:border-marquee hover:text-marquee"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
