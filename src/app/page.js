import Header from "./components/Header"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import TopRated from "./components/TopRatedMovies"

const Home = async () => {
  return (
    <section>
      <Header />
      <HeroSection />
      <TopRated />
      <Footer />
    </section>
  )
}

export default Home
