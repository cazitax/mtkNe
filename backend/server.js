import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("ERROR: " + err.message);
  });
// MONGOSE RETURN A PROMISE
const app = express();
app.use("/api/seed", seedRouter);

const port = process.env.PORT || 5000;

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
