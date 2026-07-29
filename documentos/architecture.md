# Mini e-commerce (Architecture)

Este proyecto está dividido en dos partes independientes:
- **Frontend:** mini-ecommerce
- **Backend:** mini-ecommerce-api

El objetivo es simular una arquitectura de e-commerce completa, incluyendo un sistema de pagos real con Stripe, separando la interfaz, la lógica de datos y el procesamiento de pagos.

## Arquitectura general

Frontend y backend se comunican mediante **HTTP requests (fetch)**. El backend, a su vez, se comunica con la API de **Stripe** para procesar pagos de forma segura.

## Frontend Architecture

El frontend está construido con:
- HTML
- CSS
- JavaScript (ES Modules)
- Stripe.js (para el formulario de pago)

Organización de carpetas:
mini-ecommerce/
│
├── index.html
├── product.html
├── cart.html
├── checkout.html
├── pedido-confirmado.html
│
├── css/
│ └── style.css
│
├── eslint.config.js
│
└── js/
├── main.js
├── productMain.js
├── cartMain.js
├── checkoutMain.js
├── pedidoConfirmadoMain.js
│
├── api/
│ └── products.api.js
│
├── situacion/
│ └── establecimiento.js
│
├── servicios/
│ └── servicio-carrito.js
│
├── ui/
│ ├── renderProducts.js
│ └── notificaciones.js
│
└── utiles/
└── ayudantes.js

## Backend Architecture

El backend está construido con:
- Node.js
- Express
- CORS
- Stripe (SDK oficial para pagos)
- dotenv (variables de entorno)

Estructura de carpetas:
mini-ecommerce-api/
│
├── server.js
├── .env
│
├── routes/
│ ├── products-routes.js
│ └── checkout-routes.js
│
├── controllers/
│ ├── products-controller.js
│ └── checkout-controller.js
│
├── data/
│ └── products.js
│
└── package.json


## Responsabilidades

### Frontend
- Renderizar productos y sus detalles
- Gestión del carrito (añadir, eliminar, calcular total) usando `localStorage`
- Consumir la API de productos
- Gestionar el flujo de pago con Stripe.js (`checkout.html`)
- Mostrar confirmación del pedido tras el pago

### Backend
- Proveer datos de productos (CRUD completo: crear, leer, actualizar, eliminar)
- Validar los datos de entrada (campos obligatorios, tipos correctos)
- Calcular el total del pedido de forma segura en el servidor (nunca confiar en el total enviado por el frontend)
- Crear "Payment Intents" en Stripe para procesar cobros
- Servir endpoints REST bajo el prefijo `/api`