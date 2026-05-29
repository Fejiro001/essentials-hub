import {
  LuArrowLeft,
  LuHeart,
  LuMinus,
  LuPlus,
  LuShoppingBag,
  LuStar,
  LuTruck,
  LuRotateCcw,
  LuShield
} from "react-icons/lu";
import { Link } from "react-router-dom";

function ProductDetailsInfo(props) {
  const { productDetail, quantity, setQuantity, addItemToCart } = props;

  if (!productDetail) return null;
  return (
    <section className="product-data">
      <Link className="back-to-catalog" to="/catalog">
        <LuArrowLeft />
        <span>Back to Catalog</span>
      </Link>
      <article>
        <div className="img-container">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            loading="lazy"
          />
        </div>
        <div className="detail-info">
          <p className="category">{productDetail.category}</p>
          <h2 className="title">{productDetail.title}</h2>
          <div className="detail-extra">
            <p className="detail-price">${productDetail.price}</p>
            <div className="detail-stats">
              <LuStar />
              <p className="detail-rate">{productDetail.rating.rate}</p>
              <p className="detail-count">
                ({productDetail.rating.count} reviews)
              </p>
            </div>
          </div>
          <p className="detail-description">{productDetail.description}</p>
          <div className="product-actions">
            <div className="product-quantity">
              <button
                className="decrement"
                type="button"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}>
                <LuMinus />
              </button>
              <input
                className="quantity"
                type="text"
                value={quantity}
                readOnly
              />
              <button
                className="increment"
                type="button"
                onClick={() => setQuantity(quantity + 1)}>
                <LuPlus />
              </button>
            </div>
            <button
              onClick={() => addItemToCart(productDetail)}
              className="primary-btn">
              <LuShoppingBag />
              <span>Add to cart</span>
            </button>
            <button className="favorite-btn">
              <LuHeart />
            </button>
          </div>
          <ul className="extra-benefits">
            <li>
              <LuTruck />
              <p>Free shipping</p>
              <p>On orders $100+</p>
            </li>
            <li>
              <LuRotateCcw />
              <p>30-day returns</p>
              <p>Easy & free</p>
            </li>
            <li>
              <LuShield />
              <p>2-year warranty</p>
              <p>Quality assured</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default ProductDetailsInfo;
