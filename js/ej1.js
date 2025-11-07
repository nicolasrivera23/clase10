//Extraemos los datos del formulario

let nombre = "asdfasd";
let correo = "asdfsafd";
let mensaje = "asedfasdf";


//Crear una función que valide que ninguna de estas variables esté vacía.

if( (nombre == "") || (correo == "") || (mensaje == "") ) {
  console.log("Faltan completar campos obligatorios.");
} else {
  console.log("Formulario completo. Listo para enviar.");
}


