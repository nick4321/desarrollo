// hay que importar el
import productos from "./productos.js";
import AgregarAlCarrito from "./carrito.js"

//funcion para retonar el HTML de una card
function retornarCardHTML(producto) {
    return `<div class="card">
    <div class="card-image">${producto.imagen}</div>
    <div class="card-name">${producto.nombre}</div>
    <div class="card-price">${producto.precio}</div>
    <div class="card-button">
        <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">+</button>
    </div>
    </div>`
}
//funcion para cargar los productos en la pagina
function cargarProductos(array) {
    const container = document.querySelector('.container')
    array.forEach( producto => {
        const cardHTML = retornarCardHTML(producto);
        container.innerHTML += cardHTML;
    });
}

const activarClickEnBotones = () => {
    const botonesAgregar = document.querySelectorAll('.button.button-outline.button-add')
    if (typeof botonesAgregar !== null){
        for (const boton of botonesAgregar){
            boton.addEventListener('click',(event)=>{
                AgregarAlCarrito(event.target.id)
                console.log()
            })
        }
    }
}
//llamar a la funcion para cargar datos en la pagina
cargarProductos(productos);
activarClickEnBotones()