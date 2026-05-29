import "../css/CatalogDetails.css";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { useCartStore } from "../stores/cartStore";
import { useProducts } from "../hooks/useProducts";
import menCollect from "../media/men.png";
import womenCollect from "../media/women.png";
import jewelryCollect from "../media/jewelry.png";
import electronicsCollect from "../media/electronics.png";
import CatalogDetailsSkeleton from "../components/CatalogDetailsSkeleton";
import { useProductDetails } from "../hooks/useProductDetails";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import RelatedProducts from "../components/RelatedProducts";
import ExploreCollections from "../components/ExploreCollections";
import PageWrapper from "../components/PageWrapper";

export const COLLECTIONS = [
  {
    key: "men's clothing",
    title: "Men's",
    image: menCollect,
    alt: "Mens Section"
  },
  {
    key: "women's clothing",
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
    (c) => !productDetail?.category.toLowerCase().startsWith(c.key.toLowerCase())
  );

  if (loading || !productDetail) {
    return <CatalogDetailsSkeleton />;
  }

  return (
    <PageWrapper>
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
            addItemToCart={addItemToCart}
          />
          <RelatedProducts relatedProducts={relatedProducts} />
          <ExploreCollections collections={collections} />
        </div>
      </main>
    </PageWrapper>
  );
}

export default CatalogDetails;
