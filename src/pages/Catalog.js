import "../css/Catalog.css";
import { useState } from "react";
import CatalogProduct from "../components/CatalogProduct";
import CatalogProductSkeleton from "../components/CatalogProductSkeleton";
import { useDebounce } from "../hooks/useDebounce";
import { useProducts } from "../hooks/useProducts";
import CatalogFilters from "../components/CatalogFilters";

function Catalog() {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const { products, loading } = useProducts();
  const debouncedSearch = useDebounce(search);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating.rate - a.rating.rate;
      default:
        return 0;
    }
  });

  const searchedProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <main>
      <section className="secondary-banner">
        <div className="container">
          <h2>The Catalog</h2>
          <p>Explore our curated collection of essentials</p>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <CatalogFilters
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <ul className="catalog-products">
            {loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <CatalogProductSkeleton key={index} />
                ))
              : searchedProducts.map((product) => (
                  <li className="product" key={product.id}>
                    <CatalogProduct product={product} />
                  </li>
                ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
