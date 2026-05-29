function CatalogDetailsSkeleton() {
  return (
    <main>
      <section className="catalog-banner skeleton-banner">
        <div className="container banner-container">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </section>
      <div className="container detail-container">
        <section className="product-data">
          <article>
            <div className="img-container skeleton skeleton-image"></div>
            <div className="detail-info">
              <div className="skeleton skeleton-category"></div>
              <div className="skeleton skeleton-product-title"></div>
              <div className="skeleton skeleton-price"></div>
              <div className="skeleton skeleton-description"></div>
              <div className="skeleton skeleton-description"></div>
              <div className="skeleton skeleton-description short"></div>
              <div className="product-actions">
                <div className="skeleton skeleton-button"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default CatalogDetailsSkeleton;
