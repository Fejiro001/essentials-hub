import about from "../media/about.jpg";

function Ethos() {
  return (
    <section className="ethos-section">
      <div className="ethos-div container">
        <div className="about-img">
          <img src={about} alt="Essentials Hub ethos section" />
        </div>
        <article className="ethos-txt">
          <p>CHAPTER 03 - OUR ETHOS</p>
          <h2 className="ethos-title">LESS, BUT BETTER.</h2>
          <p className="ethos-p">
            At Essentials Hub, we believe in the power of less. Every product in
            our collection has been carefully selected to meet the highest
            standards of quality, design, and functionality. We partner with
            artisans and innovators who share our vision of creating products
            that stand the test of time.
          </p>
          <p className="ethos-p">
            From wardrobe staples to cutting-edge electronics, our curation
            process ensures that every item earns its place. No clutter. No
            compromise. Just the essentials, elevated.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Ethos;
