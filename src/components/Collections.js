import menCollect from "../media/men.png";
import womenCollect from "../media/women.png";
import jewelryCollect from "../media/jewelry.png";
import electronicsCollect from "../media/electronics.png";
import { Link } from "react-router-dom";

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

function Collections() {
  return (
    <div className="container">
      <section className="collection">
        <div className="collection-head">
          <p>CHAPTER 01 - COLLECTIONS</p>
          <h2 className="header-collect">OUR COLLECTIONS</h2>
        </div>
        <ul className="collection-imgs">
          {COLLECTIONS.map((collection) => (
            <Link to={`/catalog?category=${encodeURIComponent(collection.key)}`} key={collection.key} className="box-img">
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
  );
}

export default Collections;
