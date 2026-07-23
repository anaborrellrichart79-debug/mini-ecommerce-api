# Frontend Components

Este documento describe los componentes principales del frontend del proyecto **mini-ecommerce** y sus responsabilidades.

El proyecto está organizado siguiendo una estructura modular en Javascript, separando lógica de negocio, renderizado de interfaz y estado de la aplicación.

## Pages

El proyecto contiene tres páginas principales.

    ### index.html
        Página principal donde se muestran los productos disponibles en la tienda.
        Estos elementos principales del DOM:
        - `#container-productos` --> contenedor donde se renderizan los productos
        - `#buscar-producto` --> input de búsqueda
        - `#categorias` --> filtro por categorías
        - `#cargador-productos` --> indicador de carga
        - `#error-mensaje` -->mensaje de error si falla la API

        script asociado:
        js/main.js

        Responsabilidades:
        - solicitar productos a la API
        - filtrar productos
        - renderizar targetas de producto
        - actualizar contador del carrito
        - mostrar notificaciones

    ### product.html
        Página de detalles del producto.
        Permite visualizar la información completa de un producto y añadirlo al carrito.
        Elementos principales:
        - `#detalles-producto` --> contenedor del detalle del producto
        - `#cart-count` --> contador del carrito
        - `#cargador-productos` --> indicador de carga

        script asociado:
        js/productMain.js

        Responsabilidades:
        - obtener el ID del producto desde la URL
        - solicitar productos a la API
        - encontrar el producto correspondiente
        - renderizar el detalle del producto
        - añadir producto al carrito

    ### cart.html
        Página del carrito de compra.
        Muestra los productos añadidos por el usuario.
        Elementos principales:
        - `#contenedor-carrito` --> lista de productos del carrito
        - `#Total-carrito` --> total de la compra
        - `#btn-caja` --> botón de finalizar compra

        script asociado:
        js/cartMain.js

        Responsabilidades:
        - obtener productos del carrito
        - renderizar productos del carrito
        - permitir finalizar la compra

## UI Components

Los componentes de UI se encargan exclusivamente del **renderizado del DOM**.

        ### renderProducts.js
            Responsable de mostrar los productos en la página principal.

            Funciones principales:
            - renderizar targetas de producto
            - mostrar imagen, nombre y precio
            - añadir botón de "ver producto"
            - añadir botón de "añadir al carrito"

            Este componente trabaja directamente con el contenedor:
            #container-productos

        ### renderCart.js
            Responsable de renderizar los productos dentro del carrito.
            Funciones principales:
            - mostrar lista de productos dentro del carrito.
            - mostrar precio de cada producto
            - mostrar total del carrito

            Contenedor principal:
            #contenedor-carrito

## Services

    Los servicios contienen la **lógica de negocio** de la aplicación.

        ### servicio-carrito.js
            Gestiona todas las operaciones relacionadas con el carrito.

            Funciones principales:

            - `addToCart(product)`
                añade un producto al carrito.

            - `removeFromcart(productId)`
                Elimina un producto del carrito.

            - `getCartTotal()`
                Calcula el total de productos añadidos al carrito.

            - `getCartCount()`
                Devuelve el numero total de productos.
    
            El carrito se guarda en:
            localStorage

            Esto permite mantener los productos incluso si el usuario recarga la página.
        
## API Layer

    La capa de API se encarga de la comunicación con el backend.

        ### products.api.js
            Contiene funciones para obtener productos desde el backend.

            funciones principales:
                - Obtener lista de productos
                - gestionar errores de red
                - devolver datos en formato JSON

## State Management

    El estado de la aplicación se mantiene mediante una estructura simple.

        ### store.js
            Contiene el estado global del frontend.

            Responsabilidades:
                - Almacenar productos cargados
                - almacenar carrito del usuario
                - permitir compartir estado entre módulos

## Utilidades

    El útil contiene funciones auxiliares reutilizables.

        ### helpers.js
            Algunas de sus funciones son:
            - formatear precios
            - obtener parámetros de la URL
            - funciones reutilñizables en varios módulos

## Notificaciones

        Avisos típicos:
            - producto añadido al carrito
            - error al cargar la página
    
