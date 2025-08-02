// Create a function called `duplicarNumeros` that receives an array of numbers
// and returns a new array with each number duplicated.

const duplicarNumeros = (arreglo) => {
  const copiaArregloElementosDuplicados = []

  for(let i =0; i < arreglo.length;i++){
    copiaArregloElementosDuplicados.push(arreglo[i]*2)
    
  }
  const arregloOriginal = console.log(`el arreglo original seria ${arreglo}`)
  const arregloFinal = console.log(`la copia de elementos duplicados seria ${copiaArregloElementosDuplicados}`);

  return {arregloOriginal, arregloFinal}
};

export {duplicarNumeros}