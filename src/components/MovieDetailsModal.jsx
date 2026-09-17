import { useEffect } from "react";
import { Star, X } from "lucide-react";

const stripHtml = (html) =>
  html ? html.replace(/<[^>]+>/g, "") : "No summary available.";

const MovieDetailsModal = ({ show, onClose }) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const backdrop = show.image?.original ?? show.image?.medium;
  const rating = show.rating?.average;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border-soft bg-surface"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-ink/70 p-1.5 text-paper transition-colors hover:text-marquee"
        >
          <X className="h-5 w-5" />
        </button>

        {backdrop && (
          <div className="h-56 w-full overflow-hidden sm:h-64">
            <img
              src={backdrop}
              alt={show.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-col gap-4 p-6">
          <h2 className="font-display text-2xl text-paper">{show.name}</h2>

          <div className="flex flex-wrap items-center gap-4 text-sm text-paper-dim">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-marquee" fill="currentColor" />
              {rating ? rating.toFixed(1) : "N/A"}
            </span>
            <span>{show.premiered ?? "Release date unknown"}</span>
            {show.network?.name && <span>{show.network.name}</span>}
            {show.genres?.length > 0 && <span>{show.genres.join(", ")}</span>}
          </div>

          <p className="text-sm leading-relaxed text-paper-dim">
            {stripHtml(show.summary)}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 self-start rounded-full border border-border-soft px-5 py-2 text-sm text-paper transition-colors hover:border-marquee hover:text-marquee"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
