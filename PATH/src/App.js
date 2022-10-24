import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* about path me jaane pe element k andar jo likha hai wo call ho jayega */}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="./cart" element={<Cart/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
