import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";
import SearchBar from "../components/SearchBar";
import { getAllShows, searchShows } from "../services/get-shows";

const MovieListing = () => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const timeout = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const data = query.trim()
          ? await searchShows(query.trim())
          : await getAllShows();
        if (!cancelled) setShows(data);
      } catch (err) {
        if (!cancelled) setError(err.message ?? "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 350);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-3xl text-paper">Browse Movies</h1>
      <p className="mt-2 text-paper-dim">
        Search titles or scroll through what's popular right now.
      </p>

      <div className="mt-6 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-10">
        {loading && <p className="text-paper-dim">Loading movies…</p>}
        {error && <p className="text-velvet">{error}</p>}

        {!loading && !error && shows.length === 0 && (
          <p className="text-paper-dim">
            No movies found{query ? ` for "${query}"` : ""}.
          </p>
        )}

        {!loading && !error && shows.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shows.map((show) => (
              <MovieCard key={show.id} show={show} onSelect={setSelected} />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <MovieDetailsModal show={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default MovieListing;
