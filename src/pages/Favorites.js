import React from "react";
import {Link } from "react-router-dom";
import { LuHeart, LuArrowLeft } from "react-icons/lu";
import "../css/Favorites.css";

function Favorites () {
    const favoritesList = [];

    if (favoritesList.length === 0) {
        return (
            <main className="favorites-page-empty container">
                <div className="empty">
                    <LuHeart className="empty-icon"/>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Items you save while browsing will appear right here!</p>
                    <Link to='/catalog' className="explore-btn">
                        Explore Catalog
                    </Link>
                </div>
            </main>
        );
    }
    return (
        <main className="favorites-page container">
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
              <Link to={`/catalog/${item.id}`} className="view-product-btn">
                View Item
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
    );
}

export default Favorites;