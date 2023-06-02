let productoDisponible1 = "Collar de oro rosa con colgante de cristal"
let precio1 = 1200
let productoDisponible2 = "Anillo de plata con gema natural"
let precio2 = 780
let productoDisponible3 = "Gargantilla de terciopelo con colgante adornado"
let precio3 = 950
let total = 0
let producto = prompt(`¡Bienvenido/a a nuestra tienda!\nNuestros productos disponibles son:\n1) ${productoDisponible1}\nPrecio: $${precio1}\n2) ${productoDisponible2}\nPrecio: $${precio2}\n3) ${productoDisponible3}\nPrecio: $${precio3}\nIngrese el numero del producto que desea comprar`)
// Esta funcion hace que al ingresar una palabra que iria en el lugar de cupon, se descuente el 10% del total.
function cupon(cupon){
    let validacionCupon = prompt("Ingrese " + cupon + " para un obtener 10% de descuento :)")
    if (validacionCupon == cupon) {
        total = total * 0.9
        alert(`El total de su compra es $${total}.\n¡Muchas gracias por preferirnos!`)
    }
    else{
        alert(`El total de su compra es $${total}.\n¡Muchas gracias por preferirnos!`)
    }
}
//Este ciclo hace que el usuario pueda elegir varios productos mientras quiera seguir navegando
do {
if (producto === "1") {
    total = total + precio1
}
else if (producto === "2") {
    total = total + precio2
}
else if (producto === "3") {
    total = total + precio3
}
continuarNavegacion = prompt(`Su total es de $${total}\n¿Desea seguir navegando en la tienda?`).toLowerCase()
if(continuarNavegacion == "si") {
    producto = prompt(`Nuestros productos disponibles son:\n1) ${productoDisponible1}\nPrecio: $${precio1}\n2) ${productoDisponible2}\nPrecio: $${precio2}\n3) ${productoDisponible3}\nPrecio: $${precio3}\nIngrese el numero del producto que desea comprar`)
}
} while (continuarNavegacion == "si")
cupon("PrimeraCompra")
