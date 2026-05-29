import "../css/CatalogDetails.css";
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { useCartStore } from "../stores/cartStore";
import { useProducts } from "../hooks/useProducts";
import CatalogProduct from "../components/CatalogProduct";
import menCollect from "../media/men.png";
import womenCollect from "../media/women.png";
import jewelryCollect from "../media/jewelry.png";
import electronicsCollect from "../media/electronics.png";
import CatalogDetailsSkeleton from "../components/CatalogDetailsSkeleton";
import { useProductDetails } from "../hooks/useProductDetails";
import ProductDetailsInfo from "../components/ProductDetailsInfo";

export const COLLECTIONS = [
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
  const { loading, productDetail } = useProductDetails(productId);
  const [quantity, setQuantity] = useState(1);
  const { products } = useProducts();
  const addItem = useCartStore((state) => state.addItem);
  const addItemToCart = (product) => {
    addItem(productDetail, quantity);
    toast.success("Item added to cart");
  };

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

  if (loading || !productDetail) {
    return <CatalogDetailsSkeleton />;
  }

  return (
    <main>
      <section className="secondary-banner">
        <div className="container banner-container">
          <h2>Catalog details</h2>
          <p>{productDetail.category}</p>
        </div>
      </section>
      <div className="container detail-container">
        <ProductDetailsInfo
          productDetail={productDetail}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={addItemToCart}
        />
        <section className="related">
          <p className="subtitle">Pairs well with</p>
          <h2 className="title">You might also like</h2>
          <ul className="related-products">
            {relatedProducts.map((related) => (
              <CatalogProduct key={related.id} product={related} />
            ))}
          </ul>
        </section>
        <section className="explore">
          <p className="subtitle">Keep browsing</p>
          <h2 className="title">Explore other collections</h2>
          <ul className="collection-imgs">
            {collections.map((collection) => (
              <Link to="/catalog" key={collection.key} className="box-img">
                <li>
                  <div className="collection-sing">
                    <img src={collection.image} alt={collection.alt} />
                  </div>
                  <div className="box-img-text">
                    <h3>{collection.title}</h3>
                    <p>SHOP COLLECTION</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default CatalogDetails;
