// Crea una función llamada sumarElementos que reciba un arreglo de números y devuelva la suma de todos sus elementos.
const sumarElementos = (arr) => {
  let returnedValue = 0;
  for (let i = 0; i < arr.length; i++) {
    returnedValue += arr[i];
  }
  console.log("el valor es " + returnedValue);
  return returnedValue;
};
export { sumarElementos };
