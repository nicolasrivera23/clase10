//Condicionales

//if
/*
if (edad >= 18) {
  console.log("Sos mayor de edad.");
}

//if else
if (edad >= 18) {
  console.log("Sos mayor de edad.");
} else {
  console.log("Sos menor de edad.");
}


let edad = 12;

// if - else if - else
if (edad >= 18) {
  console.log("Sos mayor de edad.");
} else if (edad >= 13) {
  console.log("Sos un adolescente.");
} else {
  console.log("Sos un niño/a.");
}  
*/

//Operador Ternario
let edad = 18;
let resultado = edad >= 18 ? "mayor de edad" : "menor de edad";
console.log("Estado Edad: " + resultado);

//Operadores de comparación
let n1 = 5;
let c1 = "5";

let n2 = 7;
let n3 = 7;

let n4 = 6;
let n5 = 6;

console.log("5 number es igual a 5 string?");
console.log(n1 === c1);

console.log("7 number es igual a 7 number?");
console.log(n2 === n3);

console.log("n4 no es igual a n5?");
console.log(n4 !== n5);

let age = 17;
let isVip = true;

if(age >= 18) {
  console.log("Es mayor de edad.");
}

//Operador AND devuelve true si todas las condiciones booleanas son verdaderas
if (age >= 18 && isVip) {
  console.log("Ingreso permitido.");
} else {
  console.log("No se permite el ingreso.")
}

//Operador OR devuelve true si alguna condicion booleana es verdadera.

let paseVip = false;
let socioVitalicio = true;

if (paseVip || socioVitalicio) {
  console.log("Puede acceder al evento exclusivo");
} else {
  console.log("No puede acceder.")
}

let isMenor = false;

console.log("! Is Menor");
console.log(!isMenor);

//While
console.log("While");
let ix = 0;
while (ix < 5) {
 console.log(ix);
 ix++;
}

//Do While
let iy = 0;
do {
 console.log(iy);
 iy++;
} while (iy < 5);

//for
console.log("for");
for (let i = 0; i < 5; i++) {
   console.log(i);
}

//Array
//Métodos para agregar , eliminar elementos

let auto1 = "Mercedes Benz";
let auto2 = "Bentley";
let auto3 = "Renó 12";
let oferta = false;

let autos = ["Mercedes Benz", "Bentley","Renó 12"];

console.log(autos[0]);
console.log("Tamaño : " + autos.length);

//Itero el array y muestro los elementos
for(let i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}

//Objetos

const persona = {
  nombre : "Jethro",
  apellido : "Tull",
  edad : 33
}

console.log(persona.nombre);
console.log(persona["apellido"]);

//declaramos un array de objetos
let productos = [
   { nombre: 'Laptop', descuento: true },
   { nombre: 'Celular', descuento: false },
   { nombre: 'Tablet', descuento: true }
];

//Iteramos el array de productos , y por cada uno le preguntamos
//si tiene descuento, si es así mostramos por consola el nombre del
//producto junto con la frase "tiene descuento"
for (let i = 0; i < productos.length; i++) {
  if (productos[i].descuento) {
    console.log(productos[i].nombre + " tiene descuento.");
  }
}