// 📝 Enunciado:
// Crea una función que reciba una variable edad.

// Si la edad es mayor o igual a 18, imprime: "Eres mayor de edad."

// Si la edad es menor a 18, imprime: "Eres menor de edad."

const funcionEdad = (edad) =>
  edad > 18
    ? console.log("Eres mayor de edad")
    : console.log("Eres menor de edad");

export { funcionEdad };
