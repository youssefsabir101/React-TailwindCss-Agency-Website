import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import FooterSection from './components/FooterSection';


function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <FooterSection />
    </>
  )
}

export default App;
