import "../css/CatalogDetails.css";
import { Link, redirect, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
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
import { useCartStore } from "../stores/cartStore";
import { useProducts } from "../hooks/useProducts";
import CatalogProduct from "../components/CatalogProduct";
import menCollect from "../media/men.png";
import womenCollect from "../media/women.png";
import jewelryCollect from "../media/jewelry.png";
import electronicsCollect from "../media/electronics.png";
import CatalogDetailsSkeleton from "../components/CatalogDetailsSkeleton";

const fakestoreURL = "https://fakestoreapi.com/products";

const COLLECTIONS = [
  {
    key: "men's",
    title: "Men's",
    image: menCollect,
    alt: "Mens Section"
  },
  {
    key: "women's",
    title: "Women's",
    image: womenCollect,
    alt: "Womens Section"
  },
  {
    key: "jewelery",
    title: "Jewelry",
    image: jewelryCollect,
    alt: "Jewelry Section"
  },
  {
    key: "electronics",
    title: "Electronics",
    image: electronicsCollect,
    alt: "Electronics Section"
  }
];

function CatalogDetails() {
  let { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantityCount, setQuantityCount] = useState(1);
  const { products } = useProducts();
  const addItem = useCartStore((state) => state.addItem);
  const addItemToCart = (product) => {
    addItem(productDetail, quantityCount);
    toast.success("Item added to cart");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

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

  // Memoizing to prevent recalculations
  const relatedProducts = useMemo(() => {
    if (!productDetail || !products.length) return [];

    return products
      .filter(
        (p) =>
          p.category === productDetail.category && p.id !== productDetail.id
      )
      .slice(0, 3);
  }, [productDetail, products]);

  const collections = COLLECTIONS.filter(
    (c) => !productDetail?.category.toLowerCase().includes(c.key.toLowerCase())
  );

  return (
    <>
      {!loading && productDetail ? (
        <main>
          <section className="catalog-banner">
            <div className="container banner-container">
              <h2>Catalog details</h2>
              <p>{productDetail.category}</p>
            </div>
          </section>
          <div className="container detail-container">
            <section className="product-data">
              <Link className="back-to-catalog" to="/catalog">
                <LuArrowLeft />
                <span>Back to Catalog</span>
              </Link>
              <article>
                <div className="img-container">
                  <img src={productDetail.image} alt={productDetail.title} />
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
                  <p className="detail-description">
                    {productDetail.description}
                  </p>
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
                      <p>On orders $75+</p>
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
            <section className="related">
              <p className="subtitle">Pairs well with</p>
              <h2 className="title">You might also like</h2>
              <ul className="related-products">
                {relatedProducts.map((related) => (
                  <li key={related.id} className="related-item">
                    <CatalogProduct product={related} />
                  </li>
                ))}
              </ul>
            </section>
            <section className="explore">
              <p className="subtitle">Keep browsing</p>
              <h2 className="title">Explore other collections</h2>
              <ul className="collection-imgs">
                {collections.map((collection) => (
                  <li className="box-img" key={collection.key}>
                    <img
                      src={collection.image}
                      className="collection-sing"
                      alt={collection.alt}
                    />
                    <div className="box-img-text">
                      <h3>{collection.title}</h3>
                      <p>SHOP COLLECTION</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <CatalogDetailsSkeleton />
      )}
    </>
  );
}

export default CatalogDetails;
