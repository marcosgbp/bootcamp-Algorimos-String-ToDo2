/*
    Implementa reverseString(str) que, dada una cadena, devuelve esa cadena con los 
    caracteres invertidos. Dado "criatura", devuelve "arutairc". 
    Por tentador que parezca, ¡no uses reverse() que está incorporado!
*/
function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
let str = "criatura";
console.log(reverseString(str));
/*
Escribe una función individual para quitar cadenas de la misma longitud de una matriz dada. 
La matriz contiene:
["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], 
cambia esta misma matriz a  ["Nope!","Its","Chris","."].
*/
function removeEqualLong(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let duplicado = false;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i].length === array[j].length) {
                    duplicado = true;
                    break;//Forzamos salir del bucle
                }
            }
        }
        if (!duplicado) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

let array = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C)", "."];
console.log(removeEqualLong(array));
/*
    Dado un entero positivo menor que 4000, devuelve una cadena que contenga ese valor en 
    representación de números romanos. En esta representación, I es 1, V es 5, X es 10, L = 50, C = 100, D = 500 y M = 1000. Recuerda que 4 es IV, 349 es CCCIL y 444 es CDXLIV.
*/
function enteroAromano(num) {
    let change = '';
    let simbolosRomanos = [{ value: 1000, symbol: 'M' }, { value: 900, symbol: 'CM' }, { value: 500, symbol: 'D' }, { value: 400, symbol: 'CD' }, { value: 100, symbol: 'C' }, { value: 90, symbol: 'XC' }, { value: 50, symbol: 'L' }, { value: 40, symbol: 'XL' }, { value: 10, symbol: 'X' }, { value: 9, symbol: 'IX' }, { value: 5, symbol: 'V' }, { value: 4, symbol: 'IV' }, { value: 1, symbol: 'I' }];
    for (let i = 0; i < simbolosRomanos.length; i++) {
        while (num >= simbolosRomanos[i].value) {
            change += simbolosRomanos[i].symbol;
            num -= simbolosRomanos[i].value;
        }
    }
    return change;
}

console.log(enteroAromano(500));

/*
  Titular del 16 de septiembre de 2014: "Se ha encontrado una computadora antigua en un 
  naufragio romano". Compuesto por 30 engranajes de bronce, su marco de madera presenta 2000 
  caracteres. Dada una cadena que contiene una representación en números romanos de un entero positivo, devuelve el entero. Recuerda que III es 3, DCIX es 609 y MXDII es 1492.
*/
function romanoAEntero(romano) {
    let valorRomano = { I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000};
    let entero = 0;
    let previo = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        let letraRomano = romano[i];
        let valor = valorRomano[letraRomano];

        if (valor < previo) {
            entero -= valor;
        } else {
            entero += valor;
        }

        previo = valor;
    }

    return entero;
}
console.log(romanoAEntero("IX"));