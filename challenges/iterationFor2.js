// Crea una función llamada duplicarNumeros que reciba un arreglo de números y devuelva un nuevo arreglo con cada número duplicado.

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