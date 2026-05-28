import "../css/Catalog.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LuSearch } from "react-icons/lu";
import CatalogProduct from "../components/CatalogProduct";
import CatalogProductSkeleton from "../components/CatalogProductSkeleton";
import { a } from "framer-motion/client";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "women's clothing", label: "Women's Clothing" },
  { key: "men's clothing", label: "Men's Clothing" },
  { key: "jewelery", label: "Jewelry" },
  { key: "electronics", label: "Electronics" }
];

const fakestoreURL = "https://fakestoreapi.com/products";

function Catalog() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(fakestoreURL);
        setProducts(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <main>
      <section className="catalog-banner">
        <div className="container">
          <h2>The Catalog</h2>
          <p>Explore our curated collection of essentials</p>
        </div>
      </section>
      <section className="catalog">
        <div className="container">
          <div className="catalog-filter">
            <div>
              <form className="searchbar">
                <LuSearch />
                <input type="text" placeholder="Search products..." />
              </form>
              <select className="sort">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
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
          <ul className="catalog-products">
            {loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  <CatalogProductSkeleton key={index} />
                ))
              : filteredProducts.map((product) => (
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
