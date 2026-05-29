import { FaStar, FaRegStar } from "react-icons/fa";

const REVIEWS = [
  {
    rating: 5,
    text: "Incredible quality and fast shipping. The minimalist aesthetic of the store translates perfectly into their products.",
    author: "SARAH M."
  },
  {
    rating: 5,
    text: "Found exactly what I was looking for. The curation here is impeccable - every product feels intentional.",
    author: "JAMES K."
  },
  {
    rating: 4,
    text: "My go-to store for essentials. The jewelry collection is stunning and the prices are very reasonable.",
    author: "AISHA T."
  },
  {
    rating: 5,
    text: "Sleek website, sleek products. The electronics selection is well-curated and delivery was seamless.",
    author: "MARCO R."
  }
];

function HomeReviews() {
  return (
    <div className="container">
      <section className="what-ts">
        <div className="wts-head">
          <p>CHAPTER 04 - TESTIMONIALS</p>
          <h2>WHAT THEY SAY</h2>
        </div>

        <div className="rev-examples">
          {REVIEWS.map((review, index) => (
            <div className="rev-box" key={index}>
              <div className="rev-stars">
                {[...Array(5)].map((_, starIndex) =>
                  starIndex < review.rating ? (
                    <FaStar key={starIndex} />
                  ) : (
                    <FaRegStar key={starIndex} />
                  )
                )}
              </div>
              <div className="rev-txt">
                <p>"{review.text}"</p>
                <p className="author-rev">- {review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeReviews;
