// Create a function that receives a variable called `age`.
// If the age is greater than or equal to 18, print: "You are an adult."
// If the age is less than 18, print: "You are a minor."

const funcionEdad = (edad) =>
  edad > 18
    ? console.log("Eres mayor de edad")
    : console.log("Eres menor de edad");

export { funcionEdad };
