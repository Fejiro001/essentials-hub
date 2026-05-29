import { Link } from "react-router-dom";
import { LuHeart, LuArrowLeft } from "react-icons/lu";
import "../css/Favorites.css";

function Favorites() {
  const favoritesList = [];

  return (
    <main className="favorites-page">
      <section className="secondary-banner">
        <div className="container">
          <h2>Favorites</h2>
          <p>Items you've saved</p>
        </div>
      </section>
      <div className="container">
        {favoritesList.length === 0 ? (
          <div className="favorites-page-empty">
            <section className="empty">
              <LuHeart className="empty-icon" />
              <h2>Your Wishlist is Empty</h2>
              <p>Items you save while browsing will appear right here!</p>
              <Link to="/catalog" className="explore-btn">
                Explore Catalog
              </Link>
            </section>
          </div>
        ) : (
          <>
            <section className="favorites-header">
              <Link className="back-to-catalog" to="/catalog">
                <LuArrowLeft /> Back To Catalog
              </Link>
              <h2>My Favorite Items</h2>
              <p>You have {favoritesList.length} saved essentials</p>
            </section>
            <section className="favorites-grid">
              {favoritesList.map((item) => (
                <div key={item.id} className="favorite-card">
                  <div className="img-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-details">
                    <h3>{item.title}</h3>
                    <span className="price">${item.price}</span>
                    <Link
                      to={`/catalog/${item.id}`}
                      className="view-product-btn">
                      View Item
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </>
        )}
      </div>
    </main>
  );
}

export default Favorites;
