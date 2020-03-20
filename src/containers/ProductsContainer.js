import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/ProductItem";
import Message from "../components/Message";

const ProductsContainer = () => {
  const products = useSelector(state => state.products);

  return (
    <main id="mainContainer">
      <div className="container">
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </section>
        <Message />
      </div>
    </main>
  );
};

export default ProductsContainer;
