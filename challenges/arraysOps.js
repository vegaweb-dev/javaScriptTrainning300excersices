// 📝 Enunciado:
// Crea un array con los siguientes números: 10, 20, 30, 40, 50.
// Usa push() para agregar el número 60 al final del array.
// Usa unshift() para agregar el número 5 al principio del array.
// Usa pop() para eliminar el último elemento del array.
// Usa shift() para eliminar el primer elemento del array.
// Finalmente, imprime el array después de cada operación en consola.

const arraysMethods = (arreglo) => {
  console.log(arreglo.push(60));
  console.log(arreglo);
  console.log(arreglo.unshift(5));
  console.log(arreglo);
  console.log(arreglo.pop());
  console.log(arreglo);
  console.log(arreglo.shift());
  console.log(arreglo);
};

export { arraysMethods };
