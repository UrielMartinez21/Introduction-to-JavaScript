//-------------| Objetos |-------------
const producto = {              // Corchetes para declarar objetos
    nombre: "uriel",            // La etiqueta no lleva comillas
    apellido: "martinez",       // Solo el valor lleva comillas
    edad: 21
}

console.log(producto)
console.log(producto.nombre)    // Imprimir valor especifico del objeto

//---> Sixtaxis de destructurando (Saca los valores de un objeto)
const { nombre } = producto     // Crea e inicializa el valor con producto.nombre, tiene que tener mismo nombre
console.log(nombre)             // Tienen que tener el mismo nombre