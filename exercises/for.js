// a. Crear un array y mostrar alertas con cada palabra
let palabras = ["javascript", "programacion", "codigo", "desarrollo", "computadora"];

for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}


// b. Convertir primera letra en mayúscula y mostrar alertas
for (let i = 0; i < palabras.length; i++) {
    let palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraModificada);
}


// c. Guardar todas las palabras en una variable y mostrar alerta con la frase completa
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
alert(sentence.trim()); // .trim() para quitar espacio final


// d. Crear array vacío y llenarlo con números del 0 al 9 usando un for
let numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log("Array final con números del 0 al 9:", numeros);
