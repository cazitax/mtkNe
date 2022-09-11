import express from "express";
const seedRouter = express.Router();
import data from "../data.js";
import Product from "../models/productModel.js";
seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.product);
  res.send({ createdProducts });
});

export default seedRouter;
