import React from "react";

const ProductItem = ({ product }) => {
  const { id, name, image, description, price, inventory, rating } = product;

  function showRating(rating) {
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratings.push(
          <li>
            <i className="fa fa-star"></i>
          </li>
        );
      } else {
        ratings.push(
          <li>
            <i className="fa fa-star-o"></i>
          </li>
        );
      }
    }
    return ratings;
  }

  return (
    <div className="col-lg-4 col-md-6 mb-r">
      <div className="card text-center card-cascade narrower">
        <div className="view overlay hm-white-slight z-depth-1">
          <img src={image} className="img-fluid" alt={name} />
          <a>
            <div className="mask waves-light waves-effect waves-light"></div>
          </a>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <strong>
              <a>{name}</a>
            </strong>
          </h4>
          <ul className="rating">{showRating(rating)}</ul>
          <p className="card-text">{description}</p>
          <div className="card-footer">
            <span className="left">{price}$</span>
            <span className="right">
              <a
                className="btn-floating blue-gradient"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Add to Cart"
              >
                <i className="fa fa-shopping-cart"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
