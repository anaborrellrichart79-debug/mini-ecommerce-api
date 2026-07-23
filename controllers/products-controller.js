// controlador de productos
import products from "../data/products.js";

// Endpoint para obtener todos los productos
export const getAllProducts = (_req, res) => {
    res.json(products);
}

//Endpoint para obtener producto con id
export function getProductsById(req, res) {
    const filteredProduct = products.filter(p =>p.id === parseInt( req.params.id));
    res.json(filteredProduct);
}

//Endpoint para obtener productos por categorías
export function getProductsByCategory(req, res) {
    const filteredProducts = products.filter(
        p => p.category.toLowerCase() === req.params.category.toLowerCase()
    );
    res.json(filteredProducts);
}

//Endpoint para agregar nuevo producto
export function createProduct(req, res) {
    const newProduct = {
        id: length + 1,
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
}

//Endpoint para actualizar producto
export function upDateProduct(req, res) {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));

    if (productIndex !== -1) {
        products[productIndex] = {
            id: products[productIndex].id,
            category: req.body.category || products[productIndex].category
        };
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
}

//Endpoint para eliminar producto
export function deleteProduct(req, res) {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex !== -1) {
        splice(productIndex, 1);
        res.json({ message: "Producto eliminado" });
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
}
