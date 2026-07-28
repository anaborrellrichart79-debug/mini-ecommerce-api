import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

// Llamar a rutas
import productsRoutes from "./routes/products-routes.js";
import checkoutRoutes from "./routes/checkout-routes.js";

app.use("/api/products", productsRoutes);
app.use("/api/checkout", checkoutRoutes);

app.listen(PORT, () =>
    console.log(`API corriendo en http://localhost:${PORT}`));