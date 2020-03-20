const initialState = [
  {
    id: 1,
    name: "Iphone 11",
    image:
      "https://cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037652457717299_11-den.png",
    description: "Sản phẩm do Apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Samsung Galaxy S9",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/147939/samsung-galaxy-s9-plus-black-600x600.jpg",
    description: "Sản phẩm do Samsung sản xuất",
    price: 300,
    inventory: 5,
    rating: 5
  },
  {
    id: 3,
    name: "Oppo F1s",
    image: "https://cf.shopee.vn/file/6abe287d386204d19485d51d1a8a5244",
    description: "Sản phẩm do Tàu sản xuất",
    price: 700,
    inventory: 28,
    rating: 2
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
