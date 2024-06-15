import './App.css'
import BrandName from './components/BrandName'
import BuildStrategy from './components/BuildStrategy'
import CardContainer from './components/CardContainer'
import Carousel from './components/Carousel'
import Trusted from './components/Trusted'
import Faq from './pages/Faq'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Ready from './pages/Ready'
import Strength from './pages/Strength'
import Success from './pages/Success'
import TrademarkSection from './pages/TrademarkSection'



function App() {

  return (
    <>
    <div className='bg-softgen overflow-hidden'>
      <Home/>
    </div>
    <div>
        <BrandName/>
        <BuildStrategy/>
        <CardContainer/>
        <TrademarkSection/>
        <BuildStrategy/>
        {/* <Carousel/> */}
        <Strength/>
        <Success/>
        <Trusted/>
        <Faq/>
        <Ready/>
        <Footer/>
        
    </div>
       </>
  ) 
}

export default App
