function CatalogProductSkeleton() {
  return (
    <div className="product skeleton-product">
      <div className="product-image skeleton-block"></div>
      <div className="product-info">
        <div className="product-category skeleton-line short"></div>
        <div className="product-title skeleton-line"></div>
        <div className="product-extra">
          <div className="product-price skeleton-line short"></div>
          <div className="product-stats">
            <div className="skeleton-line tiny"></div>
          </div>
        </div>
        <div className="product-actions">
          <div className="product-quantity skeleton-button"></div>
          <div className="primary-btn skeleton-button"></div>
        </div>
      </div>
    </div>
  );
}

export default CatalogProductSkeleton;
