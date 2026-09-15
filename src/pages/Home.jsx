import Hero from "../components/Home/Hero"
import Intro from "../components/Home/Intro"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <>
    <SEO/>
    <div>
    <Hero/>
    <Intro/>
    </div>
    </>
  )
}

export default Home