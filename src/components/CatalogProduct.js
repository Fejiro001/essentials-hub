import { LuStar, LuShoppingBag, LuHeart } from "react-icons/lu";

function CatalogProduct(props) {
  const { product } = props;
  return (
    <>
      <div className="product-image">
        <img src={product.image} alt={product.title} loading="lazy" />
        <button className="favorite active">
          <LuHeart />
        </button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
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
            <input className="decrement" type="button" value="-" />
            <input className="quantity" type="text" value={1} readOnly />
            <input className="increment" type="button" value="+" />
          </div>
          <button className="add-cart-btn">
            <LuShoppingBag />
            <span>Add</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CatalogProduct;
