import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import TopRated from "./components/TopRatedMovies"

const Home = async () => {
  return (
    <section>
      <HeroSection />
      <TopRated />
      <Footer />
    </section>
  )
}

export default Home
