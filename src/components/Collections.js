import menCollect from "../media/men.png";
import womenCollect from "../media/women.png";
import jewelryCollect from "../media/jewelry.png";
import electronicsCollect from "../media/electronics.png";

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

function Collections() {
  return (
    <section className="collection">
      <div className="collection-head">
        <p>CHAPTER 01 - COLLECTIONS</p>
        <h2 className="header-collect">OUR COLLECTIONS</h2>
      </div>
      <ul className="collection-imgs">
        {COLLECTIONS.map((collection) => (
          <li className="box-img" key={collection.title}>
            <img
              src={collection.image}
              className="collection-sing"
              alt={collection.alt}
            />
            <div className="box-img-text">
              <h3>{collection.title}</h3>
              <p className="gray">SHOP COLLECTION</p>
            </div>
            <div className="overlay"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Collections;
