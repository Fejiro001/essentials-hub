import { Link } from "react-router-dom";

function ExploreCollections({ collections }) {
  return (
    <section className="explore">
      <p className="subtitle">Keep browsing</p>
      <h2 className="title">Explore other collections</h2>
      <ul className="collection-imgs">
        {collections.map((collection) => (
          <Link
            to={`/catalog?category=${encodeURIComponent(collection.key)}`}
            key={collection.key}
            className="box-img">
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
  );
}

export default ExploreCollections;
