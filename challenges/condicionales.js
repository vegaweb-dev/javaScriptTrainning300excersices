// Crea una función llamada evaluarNota que reciba un número del 1 al 10.
// Si la nota es mayor o igual a 6, imprime: "Aprobado".
// Si la nota es menor a 6, imprime: "Reprobado".

const evaluar = (numero) => {
  if (numero < 1 || numero > 10) {
    const mensajeError = console.log("numero invalido");
    return mensajeError;
  }

  if (numero >= 6) {
    const mensajeAprobado = console.log("Aprobado");
    return mensajeAprobado;
  }

  if (numero < 6) {
    const mensajeReprobado = console.log("Reprobado");
    return mensajeReprobado;
  }
};

export { evaluar };
