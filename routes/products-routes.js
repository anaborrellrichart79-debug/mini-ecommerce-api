// rutas para productos
import { Router } from "express";
const router = Router();
import { getProductsByCategory, getProductsById, getAllProducts } from "../controllers/products-controller.js";

router.get("/category/:category", getProductsByCategory);
router.get("/id/:id", getProductsById);
router.get("/", getAllProducts);

export default router;

