//A todas mis etiquetas p se le asiga el texto de escoger un numero
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del uno al 10'

let numeroSecretro = numsecreto();
console.log(numeroSecretro);

let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); // CAPTURA EL VALOR DE LA VARIABLE Y LO DEVUELVE EN OBJETO
  elementoHTML.innerHTML = texto;
}

function Verificarintento() {
  //forma para buscar en el html por etiqueta
  //let elementoHTML = document.querySelector('intentar')
  let elementoHTML = document.getElementById("intentoUsuario").value;

  console.log("Numero secreto: ", numeroSecretro);
  /*console.log("Numero ingresado",elementoHTML);
console.log(elementoHTML==numeroSecretro);
*/

  if (elementoHTML == numeroSecretro) {
    let adivinaste = document.querySelector("p");
    //operador ternario es cuando evaluamos en una sola linea (if,else) por ejemplo al final de la linea de abajo
    adivinaste.innerHTML = `¡FELICIDADES LO ADIVINASTE EN ${intentos} ${(intentos === 1 ? 'VEZ' : 'VECES!')} `;

    //se busca el boton por id y se habilita cuando el usuario adivina el numero(cambia de color de gris a azul)
    document.getElementById('reiniciar').removeAttribute('disabled');

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


function limpiar() {
  document.querySelector('#intentoUsuario').value = ' ';
}


//Funcion para hacer numeros aleatorios
function numsecreto() {
  //el floor es para que tome solo numeros enteros sin decimales
  return Math.floor(Math.random() * 10 + 1);
}

asignarTextoElemento("h1", "Juego del numero Secreto!");
asignarTextoElemento("p", "Indica un numero del 1 al 10");
