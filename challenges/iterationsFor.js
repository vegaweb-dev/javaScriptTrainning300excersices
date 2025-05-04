// Crea una función llamada mostrarElementos que reciba un arreglo de números.
// La función debe imprimir uno por uno cada número del arreglo usando un bucle for.

const mostrarElementos =(arrayOfNumbers)=>{
    for(let i=0; i<arrayOfNumbers.length; i++){
        console.log(arrayOfNumbers[i])
    }

}

export {mostrarElementos}