
import express from "express";

const app = express();
const PORT = 3000;

const products = [
  { id: 1, name: "Perfume", price: 2500 },
  { id: 2, name: "Tiles", price: 1800 },
  { id: 3, name: "Mobile", price: 45000 }
];

app.get("/", (req, res) => {
  res.send("Products API is running inside Docker!");
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
