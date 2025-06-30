// a. Mostrar por consola los meses 5 y 11
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("a. Mes 5:", meses[4]);    // Mayo (índice 4)
console.log("a. Mes 11:", meses[10]);  // Noviembre (índice 10)


// b. Ordenar alfabéticamente y mostrar
let mesesOrdenados = [...meses].sort();  // Usamos copia para no modificar el original
console.log("b. Meses ordenados alfabéticamente:", mesesOrdenados);


// c. Agregar elemento al principio y al final
meses.unshift("Inicio");
meses.push("Fin");
console.log("c. Después de agregar elementos:", meses);


// d. Quitar un elemento del principio y del final
meses.shift();  // Quita "Inicio"
meses.pop();    // Quita "Fin"
console.log("d. Después de quitar elementos:", meses);


// e. Invertir el orden del array
meses.reverse();
console.log("e. Meses en orden invertido:", meses);


// f. Unir todos los elementos en un string separados por guión
let mesesUnidos = meses.join("-");
console.log("f. Meses unidos con guión:", mesesUnidos);


// g. Crear copia del array desde Mayo hasta Noviembre
// ACLARACIÓN: Se usó el array original sin modificar
let mesesOriginal = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let copiaMeses = mesesOriginal.slice(4, 11);  // Mayo (índice 4) hasta Noviembre (índice 10)
console.log("g. Copia de Mayo a Noviembre:", copiaMeses);
