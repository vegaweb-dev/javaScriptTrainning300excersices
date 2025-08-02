// 📝 Instructions:
// Create an array with the following numbers: 10, 20, 30, 40, 50.
// Use push() to add the number 60 to the end of the array.
// Use unshift() to add the number 5 to the beginning of the array.
// Use pop() to remove the last element of the array.
// Use shift() to remove the first element of the array.
// Finally, print the array to the console after each operation.

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
