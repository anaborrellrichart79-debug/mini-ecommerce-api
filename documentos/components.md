# Frontend Components

Este documento describe los componentes principales del frontend del proyecto **mini-ecommerce** y sus responsabilidades.

El proyecto está organizado siguiendo una estructura modular en JavaScript, separando lógica de negocio, renderizado de interfaz y estado de la aplicación.

## Pages

El proyecto contiene cinco páginas principales.

### index.html
Página principal donde se muestran los productos disponibles en la tienda.

Elementos principales del DOM:
- `#container-productos` → contenedor donde se renderizan los productos
- `#buscar-producto` → input de búsqueda
- `#categorias` → filtro por categorías
- `#cargador-productos` → indicador de carga
- `#error-mensaje` → mensaje de error si falla la API
- `#cart-count` → contador de productos en el carrito (en el header)

Script asociado: `js/main.js`

Responsabilidades:
- Solicitar productos a la API
- Filtrar productos por categoría
- Renderizar tarjetas de producto
- Actualizar el contador del carrito

### product.html
Página de detalles del producto. Permite visualizar la información completa de un producto y añadirlo al carrito.

Script asociado: `js/productMain.js`

Responsabilidades:
- Obtener el ID del producto desde la URL (query param)
- Solicitar el producto correspondiente a la API
- Renderizar el detalle del producto
- Añadir el producto al carrito

### cart.html
Página del carrito de compra. Muestra los productos añadidos por el usuario.

Elementos principales:
- `#contenedor-carrito` → lista de productos del carrito
- `#total-carrito` → total de la compra
- `#btn-caja` → botón para ir a finalizar la compra

Script asociado: `js/cartMain.js`

Responsabilidades:
- Leer el carrito desde `localStorage`
- Renderizar los productos del carrito con su cantidad y precio
- Permitir eliminar productos del carrito
- Calcular y mostrar el total
- Redirigir a `checkout.html` al pulsar "Finalizar la compra"

### checkout.html
Página de pago. Integra Stripe Elements para procesar el cobro de forma segura.

Script asociado: `js/checkoutMain.js`

Responsabilidades:
- Mostrar un resumen del pedido
- Solicitar al backend un "Payment Intent" (`POST /api/checkout/create-payment-intent`)
- Montar el formulario de tarjeta de Stripe.js
- Confirmar el pago y redirigir a `pedido-confirmado.html`

### pedido-confirmado.html
Página de confirmación tras el pago.

Script asociado: `js/pedidoConfirmadoMain.js`

Responsabilidades:
- Leer el estado del pago desde la URL (parámetro `payment_intent_client_secret`)
- Consultar a Stripe el estado real del pago
- Vaciar el carrito (`localStorage`) si el pago fue exitoso
- Mostrar el mensaje correspondiente (éxito, procesando, o error)

## UI Components

Los componentes de UI se encargan exclusivamente del **renderizado del DOM**.

### renderProducts.js
Responsable de mostrar los productos en la página principal.

Funciones principales:
- Renderizar tarjetas de producto
- Mostrar imagen, nombre y precio
- Añadir botón de "Ver detalle"
- Añadir botón de "Añadir al carrito"

Contenedor principal: `#container-productos`

## Services

Los servicios contienen la **lógica de negocio** de la aplicación.

### servicio-carrito.js
Gestiona todas las operaciones relacionadas con el carrito.

Funciones principales:
- `addToCart(product)` — añade un producto al carrito, o incrementa su cantidad si ya existe
- `eliminarDelCarrito(id)` — elimina un producto del carrito
- `getCartTotal()` — calcula el total de los productos añadidos
- `upDateCartCount()` — actualiza el número mostrado en el contador del header

El carrito se guarda en `localStorage`, lo que permite mantener los productos incluso si el usuario recarga la página o navega entre páginas.

## API Layer

La capa de API se encarga de la comunicación con el backend.

### products.api.js
Contiene funciones para obtener y modificar productos en el backend.

Funciones principales:
- `getAllProducts()` — obtiene la lista completa de productos
- `getProductById(id)` — obtiene un producto por su id
- `getProductByCategory(category)` — obtiene productos filtrados por categoría
- `createProduct(data)` — crea un nuevo producto

## State Management

El estado de la aplicación se mantiene mediante una estructura simple.

### establecimiento.js
Contiene el estado global del frontend.

Responsabilidades:
- Almacenar los productos cargados desde la API (`establecimiento.products`)
- Almacenar el carrito del usuario, sincronizado con `localStorage` (`establecimiento.cart`)
- Permitir compartir el estado entre módulos mediante un único objeto exportado

## Utilidades

Contiene funciones auxiliares reutilizables.

### ayudantes.js
Funciones principales:
- `formatPrice(price)` — formatea un número como precio en euros
- `getQueryParam(param)` — obtiene un parámetro de la URL actual