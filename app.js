//A todas mis etiquetas p se le asiga el texto de escoger un numero
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del uno al 10'

//! Variableble donde se le asigna una funcion que retorna un numero aleatorio
let numeroSecretro;
console.log(condicionesIniciales); //! Muestra en consola el numero aleatorio

let intentos = 0 ; //? Contador de intentos

//? Funcion para asignar un a una etiqueta  HTML un texto
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); //! CAPTURA EL VALOR DE LA VARIABLE Y LO DEVUELVE EN OBJETO
  elementoHTML.innerHTML = texto;
}

//! A un "h1" se le asigna el texto. De igual forma a una etiqueta "p" se le asiga otro texto

//? Funcion para verificar intentos
function Verificarintento() {
  let elementoHTML = document.getElementById("intentoUsuario").value; //! Guarda el valor de la caja de texto en una variable

  //console.log("Numero secreto: ", numeroSecretro);
  /*console.log("Numero ingresado",elementoHTML);
  console.log(elementoHTML==numeroSecretro);
  */

//! VALIDACION SI EL NUMERO SECRETO ES IGUAL AL INGRESADO
  if (elementoHTML == numeroSecretro) {
    let adivinaste = document.querySelector("p");
    //! operador ternario es cuando evaluamos en una sola linea (if,else) por ejemplo al final de la linea de abajo
    adivinaste.innerHTML = `¡FELICIDADES LO ADIVINASTE EN ${intentos} ${intentos === 1 ? "VEZ" : "VECES!"} `;

    //! se busca el boton por id y se habilita cuando el usuario adivina el numero(cambia de color de gris a azul)
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
  //EL USUARIO NO ACERTO
    if (elementoHTML > numeroSecretro) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiar();
  }
  return;
}

//? Funcion que limpia los datos
function limpiar() {
  document.querySelector("#intentoUsuario").value = " ";
}

//? Funcion para hacer numeros aleatorios
function numsecreto() {
  //el floor es para que tome solo numeros enteros sin decimales
  return Math.floor(Math.random() * 10 + 1);
}

//? FUnicion de reiniciar juego
function reiniciarjuego() {
  //* limpiar la caja
  limpiar()
  //* indicar el intervalo de numeros (cuando se reinicie el juego de mandan llamar los msj iniciales)
  //* Generar el numero aleatorio nuevamente
  //* inicializar el numero de intentos
  condicionesIniciales()
  //* deshabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');


}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero Secreto!");
  asignarTextoElemento("p", "Indica un numero del 1 al 10");
  numeroSecretro = numsecreto()
  intentos = 1;
    
}
condicionesIniciales()