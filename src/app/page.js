import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopRated from "./components/TopRatedMovies";
import { Suspense } from "react";
import Loading from "./loading";

const Home = async () => {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Header />
        <Suspense fallback={<Loading />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TopRated />
        </Suspense>
        <Footer />
      </Suspense>
    </section>
  );
};

export default Home;
