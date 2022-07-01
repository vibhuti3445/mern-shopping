require('./config/config')
require('./models/db')
const express = require("express");
const products = require("./assets/product.json");
const app = express();
const routes=require('./routes/index.router')
app.use(express.json())
app.use('/api', routes)
// app.get("/i", (req, res) => {
// res.send("Hello World");
// });

app.get("/products", (req, res) => {
	res.send(products);
});

app.listen(3000);
