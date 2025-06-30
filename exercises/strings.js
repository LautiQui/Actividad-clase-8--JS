// Ejercicio 2
// a. Variable string, convertir todo a mayúsculas
let textoA = "rosario";
let resultadoA = textoA.toUpperCase();
console.log("a:", resultadoA);

// b. Variable string, primeros 5 caracteres con substring
let textoB = "desarrollo";
let resultadoB = textoB.substring(0, 5);
console.log("b:", resultadoB);

// c. Variable string, últimos 3 caracteres con substring
let textoC = "computadora";
let resultadoC = textoC.substring(textoC.length - 3);
console.log("c:", resultadoC);

// d. Primera letra mayúscula y resto minúscula
let textoD = "central";
let resultadoD = textoD.substring(0, 1).toUpperCase() + textoD.substring(1).toLowerCase();
console.log("d:", resultadoD);

// e. Posición del primer espacio en blanco con indexOf
let textoE = "hola profe";
let posicionEspacio = textoE.indexOf(" ");
console.log("e: posición del primer espacio:", posicionEspacio);

// f. Dos palabras largas, capitalizar la primera letra de cada una
let textoF = "programacion experimental";
let espacio = textoF.indexOf(" ");
let primeraPalabra = textoF.substring(0, 1).toUpperCase() + textoF.substring(1, espacio).toLowerCase();
let segundaPalabra = textoF.substring(espacio + 1, espacio + 2).toUpperCase() + textoF.substring(espacio + 2).toLowerCase();
let resultadoF = primeraPalabra + " " + segundaPalabra;
console.log("f:", resultadoF);
