// Create a function called `mostrarElementos` that receives an array of numbers.
// The function should print each number in the array one by one using a for loop.

const mostrarElementos =(arrayOfNumbers)=>{
    for(let i=0; i<arrayOfNumbers.length; i++){
        console.log(arrayOfNumbers[i])
    }

}

export {mostrarElementos}