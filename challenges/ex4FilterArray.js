// Crea una función llamada filtrarPares que reciba un arreglo de números y devuelva un nuevo arreglo con solo los números pares.

//Solution 1. This is simpler since it creates the array and fills it out with even numbers at the same time for more efficiency
/*const filterEverNumbers = () => {
  const initialArray = [];
  const initialsize = Math.floor(Math.random() * 10) + 1;
  console.log(initialArray);
  console.log(initialsize);

  for (let i = 0; i < initialsize; i++) {
    const value = Math.floor(Math.random() * 10) + 1;
    if (value % 2 === 0) {
      initialArray.push(value);
    }
  }

  console.log(initialArray);
};

export { filterEverNumbers };
*/

//Solution 2. This is more flexible 'cause it creates an arbitrary bidimensional array and fills it out at once with even numbers.
const filterEverNumbers = () => {
  const initialArray = [];
  const initialsize = Math.floor(Math.random() * 10) + 1;
  console.log(initialArray);
  console.log(initialsize);

  for (let i = 0; i < initialsize; i++) {
    initialArray.push([]);
    const columnas = Math.floor(Math.random() * 10) + 1;

    for (let j = 0; j < columnas; j++) {
      const value = Math.floor(Math.random() * 10) + 1;
      if (value % 2 === 0) {
        initialArray[i].push(value);
      }
    }
  }
  console.log(initialArray);
};
export { filterEverNumbers };


//A third solution strictly according with what the challenge ask would be:

/*const filtrarPares =(arreglo)=>{
    const arregloDevuelto =[]

    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]%2===0){
            arregloDevuelto.push(arreglo[i])
        }
    }
    console.log(arregloDevuelto)
    return arregloDevuelto
}

export{filtrarPares}*/