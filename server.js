const express = require("express");
const app = express();
const products = require("./API/products");
const brands = require("./API/brandInformation");

// Creating the route for the API
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/brands", (req, res) => {
  res.json(brands);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
