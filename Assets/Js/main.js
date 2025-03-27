let nombre = "Juan";
var ciudad = "Madrid";
const EDAD = 30;
var llovera = true;
var nevara = false;
let nota = null;

let lista = [1,2,3,4,5];
let lista2 = ["Fresa","Pera","Piña","Mango"];

let mix = [1, "Fresa", true, null, { nombre: "Juan", edad: 30, ciudad: "Madrid" }];

let diccionario = { nokmbre: "Juan", edad: 30, ciudad: "Madrid" };

// comentario

console.log("nombre:" ,nombre);
console.log("ciudad:" ,ciudad);
console.log("edad:" ,EDAD);
console.log("hola Mundo");



// operadores 

let a = 10;
a = 25;
let b = 5;

console.log("suma",a + b);
console.log("resta",a - b);
console.log("multiplicacion",a * b);
console.log("division",a / b);
console.log("modulo",a % b);

let n = 10;

n = n + 1;

n += 1;

n++;

n *= 2;
n /= 2;

a = 5;
b = 10;
c = 15;

if (a > b && a > c) {
    console.log("El mayor es A", a);
}
else if (b > a && b > c) {
    console.log("El mayor es B", b);
}
else {
    console.log("El mayor es C", c);
}

//fffffffffffffffffff

// if (a > b && a > c) { console.log("El mayor es A", a);
// else if (b > a && b > c) console.log("El mayor es B", b);
// else console.log("El mayor es C", c);


a = 5;


if (a > 18 || a % 2 == 0) {
    console.log("o es mayor o su edad es par");
}else {
    console.log("es menor y ademas no es par");
}