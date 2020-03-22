import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { MSG_CART_EMPTY } from "../constants/Message";

const CartContainer = ({ cart }) => {
  function totalAmount() {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  return (
    <section className="section">
      <div className="table-responsive">
        <table className="table product-table">
          <thead>
            <tr>
              <th></th>
              <th>Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <th className="text-center">{MSG_CART_EMPTY}</th>
              </tr>
            ) : (
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  product={item.product}
                  quantity={item.quantity}
                />
              ))
            )}
            <CartResult total={totalAmount()} />
          </tbody>
        </table>
      </div>
    </section>
  );
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(CartContainer);
