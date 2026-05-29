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
            <>
              <span key={i} className="marquee-item">
                {item}
              </span>
              <span>/</span>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Marquee;
