import { FaStar, FaRegStar } from "react-icons/fa";

function HomeReviews () {
    let arr5 = [1, 1, 1, 1, 1];
    let arr4 = [1, 1, 1, 1, 0]
    return(
        <section className="what-ts">
            <div className="wts-head">
                <p>CHAPTER 04 - TESTIMONIALS</p>
                <h2>WHAT THEY SAY</h2>
            </div>
            <div className="rev-examples">
                <div className="rev-box">
                    <div className="rev-stars">
                        {arr5.map((active, index) => {
                            return active === 1? <FaStar key={index} /> : <FaRegStar key={index} />
                        })}
                    </div>
                    <div className="rev-txt">
                        <p>"Incredible quality and fast shipping. The minimalist aesthetic of the store translates perfectly into their products."</p>
                        <p className="author-rev">- SARAH M.</p>
                    </div>
                </div>
                <div className="rev-box">
                    <div className="rev-stars">
                        {arr5.map((active, index) => {
                            return active === 1? <FaStar key={index} /> : <FaRegStar key={index} />
                        })}
                    </div>
                    <div className="rev-txt">
                        <p>"Found exactly what I was looking for. The curation here is impeccable - every product feels intentional."</p>
                        <p className="author-rev">- JAMES K.</p>
                    </div>
                </div>
                <div className="rev-box">
                    <div className="rev-stars">
                        {arr4.map((active, index) => {
                            return active === 1? <FaStar key={index} /> : <FaRegStar key={index} />
                        })}
                    </div>
                    <div className="rev-txt">
                        <p>"My go-to store for essentials. The jewelry collection is stunning and the prices are very reasonable."</p>
                        <p className="author-rev">- AISHA T.</p>
                    </div>
                </div>
                <div className="rev-box">
                    <div className="rev-stars">
                        {arr5.map((active, index) => {
                            return active === 1? <FaStar key={index} /> : <FaRegStar key={index} />
                        })}
                    </div>
                    <div className="rev-txt">
                        <p>"Sleek website, sleek products. The electronics selection is well-curated and delivery was seamless."</p>
                        <p className="author-rev">- MARCO R.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeReviews;