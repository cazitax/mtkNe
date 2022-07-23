import express from "express";
import data from "./data.js";
const app = express();
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data.product);
});
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.product.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const product = data.product.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
