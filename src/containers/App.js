import React from "react";

import Header from "../components/Header";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ProductsContainer />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
