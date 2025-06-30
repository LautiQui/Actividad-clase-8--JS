// a. Función suma simple
function suma_funcionA(num1, num2) {
    return num1 + num2;
}

let resultado_funcionA = suma_funcionA(10, 15);
console.log("Resultado 6a:", resultado_funcionA);


// b. Suma con validación de tipos numéricos
function suma_funcionB(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }
    return num1 + num2;
}

let resultado_funcionB = suma_funcionB(10, "hola");
console.log("Resultado 6b:", resultado_funcionB);


// c. Función para validar si un número es entero
function validateInteger_funcionC(num) {
    return Number.isInteger(num);
}

console.log("6c: ¿15 es entero?:", validateInteger_funcionC(15));       // true
console.log("6c: ¿15.7 es entero?:", validateInteger_funcionC(15.7));   // false


// d. Suma que reutiliza suma_funcionB y valida enteros redondeando si es necesario
function suma_funcionD(num1, num2) {
    // Validar tipo usando la función del 6b
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    // Validar enteros y redondear con alert
    if (!validateInteger_funcionC(num1)) {
        alert("El primer número no es entero. Se redondea.");
        num1 = Math.round(num1);
    }

    if (!validateInteger_funcionC(num2)) {
        alert("El segundo número no es entero. Se redondea.");
        num2 = Math.round(num2);
    }

    return num1 + num2;
}

let resultado_funcionD = suma_funcionD(12.4, 7.8);
console.log("Resultado 6d:", resultado_funcionD);


//e. Extraer validación y redondeo en función separada y usarla dentro de la suma
function redondearSiNoEsEntero_funcionE(num) {
    if (!validateInteger_funcionC(num)) {
        alert("Número no entero. Se redondea.");
        return Math.round(num);
    }
    return num;
}

function suma_funcionE(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    num1 = redondearSiNoEsEntero_funcionE(num1);
    num2 = redondearSiNoEsEntero_funcionE(num2);

    return num1 + num2;
}

let resultado_funcionE = suma_funcionE(8.7, 3.3);
console.log("Resultado 6e:", resultado_funcionE);
