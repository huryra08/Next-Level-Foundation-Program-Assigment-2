import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-3 rounded-full border border-border-soft bg-surface px-5 py-3">
      <Search className="h-4 w-4 shrink-0 text-paper-dim" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full bg-transparent text-sm text-paper placeholder:text-paper-dim focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
