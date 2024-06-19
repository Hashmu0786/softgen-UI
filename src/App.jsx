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

  const backgroundImageStyle = {
    backgroundImage: 'url(https://wp.dynamiclayers.net/softgen/wp-content/plugins/softgen-core/assets/img/bg/gradiant-bg-1.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
     <div className='overflow-hidden' style={backgroundImageStyle}>
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
