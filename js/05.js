//-------------| Manipulacion de objetos |-------------
const producto = {
    nombre: "uriel",
    apellido: "martinez",
    edad:21
}

//---> No modificar, añadir ni eliminar
// Object.freeze(producto)

//---> Solo modificar elementos existentes
// Object.seal(producto)

//---> Modificar valores de objeto
producto.nombre = "juan"
console.log(producto)

//---> Crear nuevo campo
producto.imagen = "imagen.jpg"
console.log(producto)

//---> Eliminar campo
delete producto.imagen
console.log(producto)

