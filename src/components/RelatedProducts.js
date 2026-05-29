import CatalogProduct from "./CatalogProduct";

function RelatedProducts({ relatedProducts }) {
  return (
    <section className="related">
      <p className="subtitle">Pairs well with</p>
      <h2 className="title">You might also like</h2>
      <ul className="related-products">
        {relatedProducts.map((related) => (
          <CatalogProduct key={related.id} product={related} />
        ))}
      </ul>
    </section>
  );
}

export default RelatedProducts;
