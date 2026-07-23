import express, { json } from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

// Llamar a rutas
import productsRoutes from "./routes/products-routes.js";

app.use("/products.js", productsRoutes);

app.get("/products.js", (_req, res) => {
    res.json([
        {id: 1, title: "balón", price: 20},
        {id: 2, title:"Equipación", price: 35}
    ]);
});


app.listen(3000, () => 
    console.log("API corriendo en Http://localhost:3000"));

