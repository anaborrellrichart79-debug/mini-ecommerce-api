import Stripe from "stripe";
import products from "../data/products.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req, res) {
    try {
        const { cart } = req.body; // ej: [{ id: 1, quantity: 2 }, { id: 3, quantity: 1 }]

        if (!cart || !cart.length) {
            return res.status(400).json({ message: "El carrito está vacío" });
        }

        // Calculamos el total en el SERVIDOR usando los precios reales
        let total = 0;

        for (const item of cart) {
            const product = products.find(p => p.id === item.id);

            if (!product) {
                return res.status(400).json({ message: `Producto ${item.id} no existe` });
            }

            total += product.price * item.quantity;
        }

        // Stripe trabaja en céntimos, no en euros con decimales
        const totalEnCentimos = Math.round(total * 100);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalEnCentimos,
            currency: "eur",
            automatic_payment_methods: { enabled: true }
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
            total: total
        });

    } catch (error) {
        console.error("Error creando el pago:", error);
        res.status(500).json({ message: "Error al procesar el pago" });
    }
}