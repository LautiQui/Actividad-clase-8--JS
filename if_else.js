// a. Número aleatorio entre 0 y 1
let randomNum = Math.random();

if(randomNum >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}

// b. Clasificación por edad
let Age = Math.floor(Math.random() * 101); // número entero entre 0 y 100

if (Age < 2) {
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}

