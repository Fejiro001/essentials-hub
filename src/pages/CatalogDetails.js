import "../css/CatalogDetails.css";
import { Link, redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  LuArrowLeft,
  LuHeart,
  LuMinus,
  LuPlus,
  LuShoppingBag,
  LuStar
} from "react-icons/lu";
import { useCartStore } from "../stores/cartStore";
import { useProducts } from "../hooks/useProducts";
import CatalogProduct from "../components/CatalogProduct";

const fakestoreURL = "https://fakestoreapi.com/products";

function CatalogDetails() {
  let { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantityCount, setQuantityCount] = useState(1);
  const { products } = useProducts();
  const addItem = useCartStore((state) => state.addItem);
  const addItemToCart = (product) => {
    addItem(productDetail, quantityCount);
    toast.success("Item added to cart");
  };

  const relatedProducts = products
    .filter((p) => p.category === productDetail.category)
    .filter((p) => p.id !== productDetail.id)
    .slice(0, 3);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${fakestoreURL}/${productId}`);
        setProductDetail(response.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProducts();
    } else {
      redirect("/");
    }
  }, [productId]);

  return (
    <main>
      {productDetail && (
        <>
          <section className="catalog-banner">
            <div className="container">
              <h2>{productDetail.title}</h2>
              <p>{productDetail.category}</p>
            </div>
          </section>
          <section>
            <Link to="/catalog">
              <LuArrowLeft />
              <span>Back to Catalog</span>
            </Link>
            <article>
              <div className="img-container">
                <img src={productDetail.image} alt={productDetail.title} />
              </div>
              <div className="detail-info">
                <p>{productDetail.category}</p>
                <h3>{productDetail.title}</h3>
                <div className="detail-extra">
                  <p className="detail-price">${productDetail.price}</p>
                  <div className="detail-stats">
                    <LuStar />
                    <p className="detail-rate">{productDetail.rating.rate}</p>
                    <p className="detail-count">
                      ({productDetail.rating.count})
                    </p>
                  </div>
                </div>
                <p>{productDetail.description}</p>
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
                    onClick={() => addItemToCart(productDetail)}
                    className="add-cart-btn">
                    <LuShoppingBag />
                    <span>Add</span>
                  </button>
                  <button className="favorite-btn">
                    <LuHeart />
                  </button>
                </div>
              </div>
            </article>
          </section>
        </>
      )}
      <section className="related">
        <h2>You might also like</h2>
        <ul>
          {relatedProducts.map((related) => (
            <CatalogProduct product={related} />
          ))}
        </ul>
      </section>
      <section className="explore">
        <h2>You might also like</h2>
      </section>
    </main>
  );
}

export default CatalogDetails;
