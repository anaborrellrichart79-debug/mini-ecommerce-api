// rutas para productos
import { Router } from "express";
const router = Router();
import {
    getProductsByCategory,
    getProductsById,
    getAllProducts,
    createProduct,
    upDateProduct,
    deleteProduct
} from "../controllers/products-controller.js";

router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProductsById);
router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", upDateProduct);
router.delete("/:id", deleteProduct);

export default router;

