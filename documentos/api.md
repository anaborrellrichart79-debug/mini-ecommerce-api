# Documento API

    La API del proyecto proporciona acceso a los productos disponibles en el mini-ecommerce.
    Base URL:
    http://localhost:3000

## Endpoint: Get products

    Devuelve la lista completa de productos disponibles.

    ### Request
        GET/products

    ### Response
        ```json
        [
            {
                "id": 1,
                "title": "Camiseta FC Barcelona",
                "price": 89.99,
                "category": "equipaciones",
                "image": "/images/barcelona.jpg"
            },
            {
                "id": 2,
                "title": "Botas Nike Mercurial",
                "price": 129.99,
                "category": "botasFutbol"
            }
        ]

## CORS

    la API utiliza CORS para permitir solicitudes desde el frontend.
        app.use(cors())
        Esto permite que el frontend en otro puerto (PORT5500) pueda acceder a la APi.
