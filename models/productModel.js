const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  price: { type: Number },
  image: { type: String }, // URL ou caminho da imagem
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);