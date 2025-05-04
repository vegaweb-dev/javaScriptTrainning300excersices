// Declara dos variables llamadas num1 y num2 con valores numéricos.
// Calcula la suma, la resta, la multiplicación y la división de esas dos variables.
// Imprime cada resultado en una línea diferente usando console.log().
const operaciones = (num1, num2) => {
  let suma = num1 + num2;
  let resta = num1 - num2;
  let multiplicación = num1 * num2;
  console.log(`el resultado de la suma es ${suma} y el resultado de la resta es ${resta}`)
  return(suma,resta,multiplicación)
};

export {operaciones}