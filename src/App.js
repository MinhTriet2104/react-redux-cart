import React from "react";

import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import CartList from "./components/CartList";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <ProductsList />
      <CartList />
      <Footer />
    </div>
  );
}

export default App;
