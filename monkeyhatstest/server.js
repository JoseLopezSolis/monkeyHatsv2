const express = require("express");
const app = express();
const products = require("./API/products");
const brands = require("./API/brandInformation");

// Creating the route for the API
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/brands", (req, res) => {
  res.json(brands);
});

app.listen(5000, () => {
  console.log("Servidor iniciado en el puerto 5000");
});
