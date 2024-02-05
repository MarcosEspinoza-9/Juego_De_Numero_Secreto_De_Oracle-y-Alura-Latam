//A todas mis etiquetas p se le asiga el texto de escoger un numero
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del uno al 10'

let numeroSecretro = numsecreto();
    console.log(numeroSecretro);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // CAPTURA EL VALOR DE LA VARIABLE Y LO DEVUELVE EN OBJETO
    elementoHTML.innerHTML = texto;
    
}

function Verificarintento() {
//forma para buscar en el html por etiqueta
//let elementoHTML = document.querySelector('intentar')
    let elementoHTML = document.getElementById('intentoUsuario').value;

console.log("Numero secreto: " , numeroSecretro);
/*console.log("Numero ingresado",elementoHTML);
console.log(elementoHTML==numeroSecretro);
*/

    if (elementoHTML==numeroSecretro) {
     let adivinaste = document.querySelector('p');
        adivinaste.innerHTML = "¡FELICIDADES LO ADIVINASTE!" 
    } else {
       if (elementoHTML> numeroSecretro) {
            asignarTextoElemento('p',"El numero secreto es menor")   
        } else {
            asignarTextoElemento('p',"El numero secreto es mayor")   
        }
       }
       return;
    }





//Funcion para hacer numeros aleatorios
function numsecreto() {
//el floor es para que tome solo numeros enteros sin decimales
    return Math.floor(Math.random()*10+1)
}

asignarTextoElemento('h1',"Juego del numero Secreto!")
asignarTextoElemento('p',"Indica un numero del 1 al 10")

