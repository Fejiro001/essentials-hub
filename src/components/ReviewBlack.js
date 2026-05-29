const INFO_STATS = [
  { value: "04", label: "COLLECTIONS" },
  { value: "10+", label: "CURATED PRODUCTS" },
  { value: "5★", label: "AVERAGE RATING" },
  { value: "Free", label: "SHIPPING OVER 100$" }
];

function ReviewBlack() {
  return (
    <section className="info-section">
      <ul className="info container">
        {INFO_STATS.map((item, index) => (
          <li className="info-box" key={index}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReviewBlack;
