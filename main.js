/*for (i = 0; i < pokemons.length; i++) {
    console.log("#"${i+1} " - " ${pokemons[i]});
}*/

/* Crea un programa que imprima en consola los números impares del 1 al 50. */

for (i=0; i<=50; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

/*Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 
https://pastebin.com/Zzk8g7Z6*/

input = prompt("Ingresa un numero de pokemon")
pokemonArr = []
for (var i = 0; i <= input; i++) {
    if ((i+1) % 5 == 0) {
        pokemonArr.push(pokemons[i]);
    }
}

console.log(pokemonArr)


/*3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.*/
array = [4,"dos",8,"tres",5,9,1,"cero"];
result = [];

for (var i = 0; i < array.length; i++) {
    if (typeof(array[i]) == "number") {
        result.push(array[i]);
    }
}

console.log(result);

/*imprimir en consola los numeros entre 0 y 10000 de la secuencia de fibonacci,*/

var a = 0;
var b = 1;
var c = 0;
var arr = [0];

while (c < 900) {
    c = a + b;
    arr.push(c);
    b = a;
    a = c; 
}

console.log(arr.join(","))