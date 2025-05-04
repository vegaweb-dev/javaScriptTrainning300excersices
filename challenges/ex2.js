// Declara dos variables llamadas num1 y num2 con valores numéricos.
// Calcula la suma, la resta, la multiplicación y la división de esas dos variables.
// Imprime cada resultado en una línea diferente usando console.log().
const operaciones = (num1, num2) => {
  let suma = num1 + num2;
  let resta = num1 - num2;
  let multiplicacion = num1 * num2;
  let division = num1/num2
  console.log(`el resultado de la suma es ${suma} y el resultado de la resta es ${resta}, el resultado de la multiplicacion es ${multiplicacion} el resultado de la division es ${division}`)
  return(suma,resta,multiplicacion,division)
};

export {operaciones}