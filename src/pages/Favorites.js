import { Link } from "react-router-dom";
import { LuArrowLeft, LuHeart } from "react-icons/lu";
import { useFavoritesStore } from "../stores/favoritesStore";
import "../css/Favorites.css";
import CatalogProduct from "../components/CatalogProduct";

function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return (
    <main className="favorites-page">
      <section className="secondary-banner">
        <div className="container">
          <h2>Favorites</h2>
          <p>Items you've saved for later</p>
        </div>
      </section>

      <section className="favorites-body container">
        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <LuHeart className="empty-icon" />
            <p>
              Save products while browsing and they will appear here for quick
              access later.
            </p>
            <Link to="/catalog" className="primary-btn">
              Explore Catalog
            </Link>
          </div>
        ) : (
          <>
            <div className="favorites-header">
              <div>
                <Link className="back-to-catalog" to="/catalog">
                  <LuArrowLeft />
                  <span>Back To Catalog</span>
                </Link>
                <p className="favorites-amount">
                  You have {favorites.length} saved item(s)
                </p>
              </div>
            </div>
            <div className="favorites-grid">
              {favorites.map((item) => (
                <CatalogProduct key={item.id} product={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Favorites;
