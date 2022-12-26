//-------------| Destructurando arreglos |-------------
const numeros = ["uno", "dos", "tres"]
const [x,y] = numeros                   // Se basa en la posicion y no en el nombre
console.log(x, y)

const [, , z] = numeros                 // Otra forma de destructuracion 
console.log(z)