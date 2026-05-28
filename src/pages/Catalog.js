import "../css/Catalog.css";
const CATEGORIES = [
  { key: "women's clothing", label: "Women's Clothing" },
  { key: "men's clothing", label: "Men's Clothing" },
  { key: "jewelry", label: "Jewelry" },
  { key: "electronics", label: "Electronics" }
];

function Catalog() {
  return (
    <main>
      <section className="catalog-banner">
        <div className="container">
          <h2>The Catalog</h2>
          <p>Explore our curated collection of essentials</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="catalog-filter">
            <div>
              <input type="text" placeholder="Search products..." />
              <select name="sort">
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="pricedesc">Price: High to Low</option>
              </select>
            </div>
            <ul>
              {CATEGORIES.map((cat) => (
                <li key={cat.key}>
                  <button>{cat.label}</button>
                </li>
              ))}
            </ul>
          </div>
          {/* PRODUCTS */}
          <ul></ul>
        </div>
      </section>
    </main>
  );
}

export default Catalog;
