const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Conexão com MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rotas
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));