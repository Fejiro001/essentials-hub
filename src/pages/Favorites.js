import React from "react";
import {Link } from "react-router-dom";
import { LuHeart, LuAArrowLeft } from "react-icons/lu";

function Favorites () {
    const favoritesList = [];

    if (favoritesList.Length === 0) {
        return (
            <main className="favorites-page conatiner">
                <div className="empty">
                    <LuHeart className="empty-icon"/>
                    <h2>Your Wishlist is Empty</h2>
                    <p>Items you ssave while browsing will appear right here!</p>
                    <Link to='/catalog' className="explore-btn">
                        Explore Catalog
                    </Link>
                </div>
            </main>
        );
    }
    return <></>
}

export default Favorites;