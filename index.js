import { introduce } from "./challenges/ex1.js"
import { operaciones } from "./challenges/ex2.js"
import { funcionEdad } from "./challenges/ex3.js"
import { arraysMethods } from "./challenges/arraysOps.js"
import { presentacion } from "./challenges/objetos.js"
import { evaluar } from "./challenges/condicionales.js"

introduce("carlos", 39)
operaciones(34234, 453245)
funcionEdad(34)
arraysMethods([10, 20, 30, 40, 50])

// llamado funcion presentacion de challenges/objetos.js

presentacion({
  nombre: "carlos vega",
  edad: 39,
})

// llamado funcion evaluar de challenges/condicionales.js
evaluar(2)

