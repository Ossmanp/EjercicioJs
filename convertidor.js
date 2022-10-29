/**Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas
 * 1 litro = 100 centilitros
 * 1 litro = 1000 decilitros
 * 1 litro = 3,78 galon
 * 1 litro = 33.81 oz
 */


'use strict'

let litro = 1;
let unidad_medida = 'oz';
let mensaje ="";
switch (unidad_medida){
    case 'cl':
        mensaje = "Un litro equivale a " + (litro * 100) + " centilitros";
        break;
        case 'dc':
        mensaje = "Un litro equivale a " + (litro * 1000) + " decilitros";
        break;
        case 'gl':
        mensaje = "Un litro equivale a " + (litro * 3.78) + "galón";
        break;
        case 'oz':
        mensaje = "Un litro equivale a " + (litro * 33.81) + "oz";
        break;
        default: console.log(`Lo siento, la medida ${unidad_medida} no está en el rango`);
}
console.log(mensaje);