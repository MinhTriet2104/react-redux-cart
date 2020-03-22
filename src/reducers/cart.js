import { ADD_TO_CART } from "../constants/ActionType";

const initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 11",
      image:
        "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037652457717299_11-den.png",
      description: "Sản phẩm do Apple sản xuất",
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 2,
      name: "Samsung Galaxy S9",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/147939/samsung-galaxy-s9-plus-black-600x600.jpg",
      description: "Sản phẩm do Samsung sản xuất",
      price: 300,
      inventory: 5,
      rating: 5
    },
    quantity: 2
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
    default:
      return state;
  }
};

export default cart;
