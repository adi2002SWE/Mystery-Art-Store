import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { About } from "./pages/About/about";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      
      <div className="footer">
        <p className="contact">Contact :</p>
        <div className="Email">
            <p className="gmail_head">E-mail :</p>
            <a className="gmail" href="mailto:avermaav2002@gmail.com"><p>avermaav2002@gmail.com</p></a>
        </div>
        <div className="icons">
          <p>&copy;Aditya verma-23</p>
          <a href="https://www.linkedin.com/in/aditya-verma-3741291b7"><p className="LinkedIn"> <BsLinkedin /></p></a>
          <a href="https://twitter.com/AdityaV51270627"><p className="Twitter"><BsTwitter /></p></a>
          <a href="https://www.instagram.com/verma_complicated_boy"><p className="Instagram"><BsInstagram /></p></a>
        </div>

      </div>
    </div>
  );
}

export default App;
