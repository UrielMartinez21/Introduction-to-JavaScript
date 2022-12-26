//-------------| Function declaration |-------------

//---> El orden no importa
//---> Primero registra las variables y luego las ejecuta

sumarNumeros()

function sumarNumeros() {
    console.log("[+]El resultado es: "+ (2+4))
}

//-------------| Function express |-------------

//---> Se puede usar en arrow functions
//---> El orden si importa

const resultadoFinal = function (valor1 = 0, valor2 = 0) {
    console.log(valor1-valor2)
}

resultadoFinal(5,1)

//-------------| Parametros de funciones |-------------

function sumarDosNumeros(numero1=0,numero2=0) {                 // Declara e inicializa parametros
    console.log("[+]Suma de parametros: " + (numero1+numero2)) 
}

sumarDosNumeros(2,2)                                            // 2 argumentos
sumarDosNumeros(2)                                              // 1 argumento
sumarDosNumeros()                                               // 0 argumentos

//-------------| Funciones que retornan valores |-------------

function sumar(valor) {
    return valor
}

const resultado=sumar(7)
console.log(resultado)