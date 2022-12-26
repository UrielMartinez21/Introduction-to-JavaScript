//-------------| Arreglos / Manipulacion |-------------
//---> Declarar un arreglo
const arrelgo = [1, 2, "hola", true]                // Diferentes valores
console.log("[+]Arreglo original: " + arrelgo)

//---> Añadir elementos a un arreglo
const nuevoArreglo = [...arrelgo, "adios"]          // Copia de la variable
console.log("[+]Añadir elemento: " + nuevoArreglo)

//---> Eliminar elementos a un arreglo
const nuevoArreglo2 = arrelgo.filter((dato) => {    // Una vez por cada elemento del arreglo
    // console.log(dato)                            // Imprime los elementos
    return dato!==1                                 // Elimina todo lo que sea '1'
})
console.log("[+]Eliminar elemento: " + nuevoArreglo2)

//---> Reemplazar datos de arreglo
const nuevoArreglo3 = arrelgo.map((dato) => {       // Similar a filter
    // console.log(dato)
    if (dato === 1) return 10000
    else return dato
})
console.log("[+]Reemplazar datos: " + nuevoArreglo3)