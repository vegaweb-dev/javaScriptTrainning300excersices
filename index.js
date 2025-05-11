import { introduce } from "./challenges/ex1.js"
import { operaciones } from "./challenges/ex2.js"
import { funcionEdad } from "./challenges/ex3.js"
import { arraysMethods } from "./challenges/arraysOps.js"
import { presentacion } from "./challenges/objetos.js"
import { evaluar } from "./challenges/condicionales.js"
import { mostrarElementos } from "./challenges/iterationsFor.js"
import{duplicarNumeros} from "./challenges/iterationFor2.js"
import{filterEverNumbers} from "./challenges/ex4FilterArray.js"
import {sumarElementos} from "./challenges/ex5AddArrayElements.js"
introduce("carlos", 39);
operaciones(34234, 453245);
funcionEdad(34);
arraysMethods([10, 20, 30, 40, 50])

// llamado funcion presentacion de challenges/objetos.js

presentacion({
  nombre: "carlos vega",
  edad: 39,
});
// llamado funcion evaluar de challenges/condicionales.js
evaluar(2)

//llamado funcion mostrarElementos de challenges/iterations
mostrarElementos([1,2,3,4,5,6])

//llamado funcion duplicarNumeros de challenges/iterationFor.js
duplicarNumeros([234,456,6767,78])

//Llamado de la funcion filterEvenNumbers
filterEverNumbers()

//Llamado de la funcion sumarElementos
sumarElementos([1,2])