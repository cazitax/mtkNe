import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Jonathan",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Basir",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  product: [
    {
      // _id: "1",
      name: "nike slim shirt",
      slug: "nike-slim-shirt",
      category: "shirts",
      image: "/image/pj1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight wualitity shirt",
    },

    {
      // _id: "2",
      name: "puma slim shirt",
      slug: "puma-slim-shirt",
      category: "shirts",
      image: "/image/pj2.jpg",
      price: 120,
      countInStock: 0,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "hight wualitity shirt",
    },
    //   tamaño para imagen 679px x 829px
    {
      // _id: "3",
      name: "adidas slim shirt",
      slug: "adidas-slim-shirt",
      category: "shirts",
      image: "/image/pj3.jpg",
      price: 120,
      countInStock: 10,
      brand: "adidas",
      rating: 4.5,
      numReviews: 10,
      description: "hight wualitity shirt",
    },
    {
      // _id: "4",
      name: "rebook slim shirt",
      slug: "rebook-slim-shirt",
      category: "shirts",
      image: "/image/pj4.jpg",
      price: 120,
      countInStock: 10,
      brand: "Rebook",
      rating: 3.5,
      numReviews: 10,
      description: "hight wualitity shirt",
    },
  ],
};

export default data;
