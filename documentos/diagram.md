# Diagrama de la arquitectura

Este diagrama muestra como interactúan el frontend y el backend del proyecto **Mini e-commerce**

El navegador carga el frontend estático, que se comunica con la API mediante peticiones HTTP.

Diagrama de flujo:

se usa el navegador

subgraph Frontend
    Index[index.html]
    Product[product.html]
    Cart[cart.html]
    JS[js modules]
    CSS[style.css]
end

subgraph Backend
    Server[Express Server]
    Routes[Propducts Routes]
    Controller[Products Controller]
    Data[products.js]
end

User --> Index
User --> Product
User --> JS

Index --> js
Product --> js
cart --> js

JS --> |fetch /products| Server

Server --> Routes
Routes --> Controller
Controller --> Data

Server -->|JSON response| JS
JS --> User

## Flujo de datos

    El usuario abre una de las páginas delo frontend.
    Los script JavaScript se ejecutan en el navegador.
    El frontend realiza la petición fetch a la API (/products).
    El servidor Express recibe la petición.
    La ruta llama al controlador (products-controller).
    El controlador obtiene los datos desde el module produts.
    El servidor responde con JSON.
    El frontend renderiza los productos en la interfaz (div).

## TECNOLOGÍAS IMPLICADAS

    Frontend
        HTML
        CSS
        JavaScript (ES Modules)

    Backend
        Node.js
        Express
        CORS
