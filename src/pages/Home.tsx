import Hero from '../components/Hero'
import NewCollection from '../components/NewCollection'
import NewsLetter from '../components/NewsLetter'
import Offers from '../components/Offers'
import PopularPro from '../components/PopularPro'
import SportsSection from '../components/SportsSection'





const Home = () => {
  return (
    <>
    <Hero />
    <PopularPro/>
   <Offers/>
    <NewCollection />
    <SportsSection/>
    <NewsLetter />
  
    </>
  )
}

export default Home