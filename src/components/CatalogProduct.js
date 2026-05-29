import { useState } from "react";
import { useCartStore } from "../stores/cartStore";
import {
  LuStar,
  LuShoppingBag,
  LuHeart,
  LuMinus,
  LuPlus
} from "react-icons/lu";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useFavoritesStore } from "../stores/favoritesStore";

function CatalogProduct(props) {
  const { product } = props;
  const [quantityCount, setQuantityCount] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorited = useFavoritesStore((state) =>
    state.isFavorite(product.id)
  );

  const addItemToCart = (product) => {
    addItem(product, quantityCount);
    toast.success("Item added to cart");
  };

  return (
    <li className="product">
      <div className="product-image">
        <Link to={`/catalog/${product.id}`}>
          <img src={product.image} alt={product.title} loading="lazy" />
        </Link>
        <button
          onClick={() => toggleFavorite(product)}
          className={`favorite ${isFavorited ? "favorited" : ""}`}>
          <LuHeart />
        </button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">
          <Link to={`/catalog/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="product-extra">
          <p className="product-price">${product.price}</p>
          <div className="product-stats">
            <LuStar />
            <p className="product-rate">{product.rating.rate}</p>
            <p className="product-count">({product.rating.count})</p>
          </div>
        </div>
        <div className="product-actions">
          <div className="product-quantity">
            <button
              className="decrement"
              type="button"
              onClick={() => setQuantityCount(quantityCount - 1)}
              disabled={quantityCount === 1}>
              <LuMinus />
            </button>
            <input
              className="quantity"
              type="text"
              value={quantityCount}
              readOnly
            />
            <button
              className="increment"
              type="button"
              onClick={() => setQuantityCount(quantityCount + 1)}>
              <LuPlus />
            </button>
          </div>
          <button
            onClick={() => addItemToCart(product)}
            className="primary-btn">
            <LuShoppingBag />
            <span>Add</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default CatalogProduct;
