import { introduce } from "./challenges/01-helloNameAndAge.js";
import { operaciones } from "./challenges/02-basicMathOperations.js";
import { funcionEdad } from "./challenges/03-checkAgeStatus.js";
import { presentacion } from "./challenges/04-printPersonObject.js";
import { sumarElementos } from "./challenges/05-sumArrayElements.js";
import { countVowels } from "./challenges/06-countVowelsInString.js";
import { mostrarElementos } from "./challenges/07-printArrayElementsWithFor.js";
import { duplicarNumeros } from "./challenges/08-doubleArrayNumbers.js";
import { filterEverNumbers } from "./challenges/09-filterNumbers.js";
import { arraysMethods } from "./challenges/10-updateArrayWithPushPopShiftUnshift.js";
import { evaluar } from "./challenges/11-conditionals.js";

//01-helloNameAndAge
introduce("carlos", 39);

//02-basicMathOperations
operaciones(34234, 453245);

//03-checkAgeStatus
funcionEdad(34);

//04-printPersonObject
presentacion({
  nombre: "carlos vega",
  edad: 39,
});

//05-sumArrayElements
sumarElementos([1, 2]);

//06-countVowelsInString
countVowels("rr");

//07-printArrayElementsWithFor
mostrarElementos([1, 2, 3, 4, 5, 6]);

//08-doubleArrayNumbers
duplicarNumeros([234, 456, 6767, 78]);

//09-filterNumbes
filterEverNumbers();

//10-updateArrayWith...
arraysMethods([10, 20, 30, 40, 50]);

//11-conditionals
evaluar(2);
