//PD: Las imagenes no cargan correctamente, pero el codigo si funciona

// API URL
const API_URL = 'https://api.escuelajs.co/api/v1';
// Seleccionando el contenedor de productos
const PRODUCTS_CONTAINER = document.querySelector('.products');

//  Obteniendo solo 10 productos a través de una API
async function getProducts() {
    const response = await fetch(`${API_URL}/products?offset=0&limit=10`);
    const products = await response.json();

    products.map((product) => {
        createProduct(product.images[0], product.title, product.price);
    });
    console.log(products);
}

getProducts();

// Creando productos en el DOM
function createProduct(imageSrc, title, price) {
    const newElement = document.createElement('article');
    newElement.classList.add('product');

    const elementImage = document.createElement('img');
    elementImage.src = imageSrc;

    const elementTitle = document.createElement('h3');
    elementTitle.textContent = title;

    const elementPrice = document.createElement('p');
    elementPrice.textContent = `$${price}`;

    // Agregando elementos al DOM
    newElement.append(elementImage, elementTitle, elementPrice);
    PRODUCTS_CONTAINER.append(newElement);
}


