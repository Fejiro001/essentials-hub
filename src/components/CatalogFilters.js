import { LuSearch } from "react-icons/lu";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "women's clothing", label: "Women's Clothing" },
  { key: "men's clothing", label: "Men's Clothing" },
  { key: "jewelery", label: "Jewelry" },
  { key: "electronics", label: "Electronics" }
];

const SORT_OPTIONS = [
  { key: "default", label: "Default" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "rating", label: "Highest Rated" }
];

function CatalogFilters(props) {
  const { search, setSearch, filter, setFilter, sortBy, setSortBy } = props;
  return (
    <div className="catalog-filter">
      <div>
        <form className="searchbar">
          <LuSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <select
          className="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          {SORT_OPTIONS.map((sort) => (
            <option key={sort.key} value={sort.key}>
              {sort.label}
            </option>
          ))}
        </select>
      </div>
      <ul className="filters">
        {CATEGORIES.map((cat) => (
          <li key={cat.key}>
            <button
              className={`${filter === cat.key ? "active" : ""}`}
              onClick={() => setFilter(cat.key)}>
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CatalogFilters;
