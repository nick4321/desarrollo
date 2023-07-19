//importamos productos
import productos from "./productos.js";

//creamos el array de carrito
const carritoFrutas = recuperarCarrito();

let AgregarAlCarrito = (frutaId) => { //arrow funtion
    const encontrado = false;
    
    if (typeof frutaId === 'number' && frutaId > 0) {
        encontrado = productos.find(producto => producto.id === frutaId);
    }
    if (typeof encontrado !== 'undefined') {
        for (let i = 0; i < productos.length; i++) {
            if (frutaId === String(productos[i].id)) {
                carritoFrutas.push(productos[i])
            }
        }
    }
    almacenarCarrito();
}

function almacenarCarrito() {
    if (carritoFrutas.length > 0) {
        localStorage.setItem('carritoFrutas', JSON.stringify(carritoFrutas));
    }
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem('carritoFrutas')) || [];
}

export default AgregarAlCarrito;