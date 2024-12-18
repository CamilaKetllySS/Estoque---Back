const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  const { name, description, quantity, price } = req.body;
  const image = req.file ? req.file.path : null;

  const product = new Product({ name, description, quantity, price, image });
  await product.save();
  res.status(201).json(product);
};

exports.updateProduct = async (req, res) => {
  const { name, description, quantity, price } = req.body;
  const image = req.file ? req.file.path : null;

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, quantity, price, image },
    { new: true }
  );
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Produto deletado com sucesso" });
};