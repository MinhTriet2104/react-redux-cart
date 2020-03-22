import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProductItem from "../components/ProductItem";
import Message from "../components/Message";

const ProductsContainer = ({ products }) => {
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

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps, null)(ProductsContainer);
