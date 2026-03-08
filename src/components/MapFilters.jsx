export default function MapFilters({
  filters,
  activeFilters,
  setActiveFilters,
  counts = {},
}) {
  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "16px",
      }}
    >
      {filters.map((filter) => {
        const isActive = activeFilters.includes(filter);

        return (
          <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              border: isActive ? "1px solid #111827" : "1px solid #d1d5db",
              background: isActive ? "#111827" : "#ffffff",
              color: isActive ? "#ffffff" : "#111827",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {filter} {counts[filter] ? `(${counts[filter]})` : ""}
          </button>
        );
      })}
    </div>
  );
}