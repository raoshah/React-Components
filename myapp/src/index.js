import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import Products from './components/productDisplay/Index.js';
import Slider from './components/slider/Slider.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  {/* <h1 className="title" >React Components</h1> */}
  <Navbar/>
  <div style={{"min-height":"90vh"}}>
    {/* <Products/> */}
    <Slider/>
  </div>
  <Footer/>
</>
);

