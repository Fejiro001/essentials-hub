const MARQUEE_ITEMS = [
  "NEW ARRIVALS",
  "ELECTRONICS",
  "MEN'S CLOTHING",
  "WOMEN'S CLOTHING",
  "JEWELRY",
  "ESSENTIALS"
];

function Marquee() {
  return (
    <div className="line">
      <div className="marquee-track">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
          (item, i) => (
            <div key={i}>
              <span className="marquee-item">{item}</span>
              <span>/</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Marquee;
