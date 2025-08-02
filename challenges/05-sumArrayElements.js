// Create a function called sumarElementos that receives an array of numbers and returns the sum of all its elements.
const sumarElementos = (arr) => {
  let returnedValue = 0;
  for (let i = 0; i < arr.length; i++) {
    returnedValue += arr[i];
  }
  console.log("el valor es " + returnedValue);
  return returnedValue;
};
export { sumarElementos };
