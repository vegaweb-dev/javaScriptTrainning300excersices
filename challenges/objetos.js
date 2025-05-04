// Crea un objeto llamado persona que tenga las siguientes propiedades:
// nombre (con tu nombre)
// edad (tu edad)
// Crea una función que reciba este objeto y imprima en consola lo siguiente:
// "Mi nombre es [nombre] y tengo [edad] años."
// Ejemplo de salida:
// "Mi nombre es Carlos y tengo 25 años."


const presentacion =(objeto)=>{
    let mensaje = console.log(`Mi nombre es ${objeto.nombre} y tengo ${objeto.edad} anos`)
    return mensaje

}

export {presentacion}