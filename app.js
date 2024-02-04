//A todas mis etiquetas p se le asiga el texto de escoger un numero
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del uno al 10'

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // CAPTURA EL VALOR DE LA VARIABLE Y LO DEVUELVE EN OBJETO
    elementoHTML.innerHTML = texto;
    
}

function intento () {
alert('si funciona la funcion!')

}

asignarTextoElemento('h1',"Juego del numero Secreto!")
asignarTextoElemento('p',"Indica un numero del 1 al 10")