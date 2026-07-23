# Mini e-commerce (Architecture)

Este proyecto está dividido en dos partes independientes:

    - **Frontend:** mini-ecommerce
    - **Backend:** mini-ecommerce-api

El objetivo es simular una arquitectura básica de e-commerce separando la interfaz y la lógica de datos.

## Arquitectura general

Frontend y backend se comunican mediante **HTTP request (fetch)**.

## Frontend Architecture

El frontend esta construido con:
    - HTML
    - CSS
    - JavaScript (ES modules)
  
Organización de carpetas:

mini-ecommerce/
│
├── index.html
├── product.html
├── cart.html
│
├── css/
│ └── style.css
│
└── js/
├── main.js
├── productMain.js
├── cartMain.js
│
├── api/
│ └── products.api.js
│
├── state/
│ └── store.js
│
├── servicios/
│ └── servicio-carrito.js
│
├── ui/
│ ├── renderProducts.js
│ ├── renderCart.js
│ └── notificaciones.js
│
└── utils/
└── helpers.js

## Backend Architecture

El backend esta construido con:

    - Node.js
    - Express
    - CORS

Estructura de carpetas:

mini-ecommerce-api/
│
├── server.js
│
├── routes/
│ └── products.routes.js
│
├── controllers/
│ └── products.controller.js
│
├── data/
│ └── products.js
│
└── package.json

## Responsabilidades

    ### Frontend
        - Renderizar productos (div dentro de los htmls).
        - Gestión de carrito (cart.html)
        - Consumir API

    ### Backend

    - Proveer datos de productos
    - Servir enpoints REST
