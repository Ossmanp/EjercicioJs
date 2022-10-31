/** Realizar el algoritmo que realice las 4 operaciones básicas para dos números
de entrada.*/
'use strict';

let numero1 = 2;
let numero2 = 3;
let operacion ="multiplicación";
let resultado = "";

switch(operacion){
    case 'suma':
        resultado = numero1 + numero2;
        break;
    case 'resta':
        resultado = numero1 - numero2;
        break;
    case 'multiplicación':
        resultado = numero1 * numero2;
        break;
    case 'división':
        resultado = numero1 / numero2;
        break;
    default:
        resultado = 'la operación no es válida';
        break;
}
console.log(resultado)
