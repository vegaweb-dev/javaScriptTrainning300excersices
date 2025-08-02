// Declare two variables called num1 and num2 with numeric values.
// Calculate the sum, subtraction, multiplication, and division of those two variables.
// Print each result on a different line using console.log().
const operaciones = (num1, num2) => {
  let suma = num1 + num2;
  let resta = num1 - num2;
  let multiplicacion = num1 * num2;
  let division = num1/num2
  console.log(`el resultado de la suma es ${suma} y el resultado de la resta es ${resta}, el resultado de la multiplicacion es ${multiplicacion} el resultado de la division es ${division}`)
  return(suma,resta,multiplicacion,division)
};

export {operaciones}