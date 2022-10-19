const frutas = ['palta', 'naranja', 'manzana', 'anana', 'banana'];

console.log(frutas)
console.log(frutas.sort());


const numeros = [78,10,7,1,2, -1];

console.log(numeros.sort());  // 1,10,2,7,78 (unicode, el array es ordenado atendiendo a la posicion del valor unicode (en -US) de cada caracter, segun la conversion a string de cada elemento.


const num = numeros.sort(function(a,b){
    return a-b;
})

console.log(num)

const num2 = numeros.sort(function(a,b){
    return b-a;
})

console.log(num2)


const palabras = ['flavia','pablo','abeja','perro', 'animal'];

const palab = palabras.sort();

console.log(palab);

console.log(palabras.sort().reverse()); // posible solucion

const palabrs = palabras.sort(function(a,b){  // otra posible solucion
    if(b<a) return -1;
    return 0
})

console.log(palabrs)



