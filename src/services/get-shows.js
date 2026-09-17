const BASE_URL = "https://api.tvmaze.com";

export const getAllShows = async (page = 0) => {
  const response = await fetch(`${BASE_URL}/shows?page=${page}`);

  if (!response.ok) {
    throw new Error("Failed to load movies");
  }

  return response.json();
};

export const searchShows = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies");
  }

  const results = await response.json();
  return results.map((entry) => entry.show);
};
