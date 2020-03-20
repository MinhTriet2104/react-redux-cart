import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import Message from "./Message";

const ProductsList = () => {
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

export default ProductsList;
