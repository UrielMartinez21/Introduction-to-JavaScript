//-------------| Destructurando mas de 2 objetos |-------------
    //---> Objeto 1
    const usuario = {
        nombre: "uriel",
        apellido: "martinez",
        edad:21
    }

    //---> Objeto 2
    const persona = {
        nombre: "adulto",
        genero: "hombre"
    }

    //---> Destructuracion
    const { nombre } = usuario
    const { nombre:nombrePersona } = persona    // Imprimir 2 valores con el mismo nombre(se crea un alias)

    //---> Imprimir resultado
    console.log(nombre)
    console.log(nombrePersona)

//-------------| Uniendo 2 o mas objetos |-------------
    const nuevoObjeto = {
        usuario: { ...usuario },                // Crea una copia del objeto seleccionado
        persona:{...persona}
    }

    //---> Imprimir resultado
    console.log(nuevoObjeto)