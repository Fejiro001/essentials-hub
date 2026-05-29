import "../css/Home.css";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Collections from "../components/Collections";
import Ethos from "../components/Ethos";
import HomeReviews from "../components/HomeReviews";
import ReviewBlack from "../components/ReviewBlack";

function Home() {
  return(
    <main>
      <Hero />
      <Marquee />
      <Collections />
      <ReviewBlack />
      <Ethos />
      <HomeReviews />
    </main>
  )
}

export default Home;
