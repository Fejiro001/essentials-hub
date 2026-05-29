import "../css/Home.css";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Collections from "../components/Collections";
import Reviewblack from "../components/Reviewsblack";
import Ethos from "../components/Ethos";
import HomeReviews from "../components/HomeReviews";

function Home() {
  return(
    <main>
      <Hero />
      <Marquee />
      <Collections />
      <Reviewblack />
      <Ethos />
      <HomeReviews />
    </main>
  )
}

export default Home;
