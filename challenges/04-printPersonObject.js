// Create an object called `persona` with the following properties:
// nombre (with your name)
// edad (your age)
// Create a function that receives this object and prints the following to the console:
// "Mi nombre es [nombre] y tengo [edad] años."
// Example output:
// "Mi nombre es Carlos y tengo 25 años."


const presentacion =(objeto)=>{
    let mensaje = console.log(`Mi nombre es ${objeto.nombre} y tengo ${objeto.edad} anos`)
    return mensaje

}

export {presentacion}