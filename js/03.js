//-------------| Estructuras y tipos de datos |-------------

//------> Undefined
    // (+) Si no se inicializa una variable entonces es clasificado como 'undefined'
    // (+) Ejemplo
            let nombre
            console.log(nombre)

//------> Boolean
    // (+) Valores como si o no
    // (+) Ejemplo
            let valor=true
            console.log(valor)

//------> Number
    // (+) Todo numero es considerado 'number'
    // (+) Ejemplo
            let numero=30.3
            console.log(typeof numero)

//------> String 
    // (+) Todo caracter es considerado 'string'
    // (+) Ejemplo
            let letra="30.3"
            console.log(typeof letra)

//------> BigInt 
    // (+) Numeros grandes
    // (+) Ejemplo
            let grande=BigInt(100000000000000000000000n)
            console.log(typeof grande)

//------> Symbol 
    // (+) Cada simbolo es unico aunque tengan mismos valores
    // (+) Ejemplo
            let primerSimbolo = Symbol(21)
            console.log(primerSimbolo.valueOf() )

//------> Null 
    // (+) Valores vacios o nulos
    // (+) Ejemplo
            let nulos = null
            console.log(typeof nulos )