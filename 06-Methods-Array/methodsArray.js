// --------> Callbaks son funciones que se pasan como parametros de otra funcion

// ################### Array Methods #########################

const items = [
    {nombre: 'Auto', precio: 200_000},
    {nombre: 'Bicicleta', precio: 20_000},
    {nombre: 'Moto', precio: 90_000},
    {nombre: 'Cuatriciclo', precio: 150_000} // ----> Mejor Lectura de numeros largos
]




// ·············· ---> Filter 

// Retorna valores filtrados a partir de la condicion

// let filteredItems = items.filter((x) => {
//     return x.precio < 100000
// })

// console.log(filteredItems)   




// ················· ---> Map
// Este toma un Array y devuelve uno nuevo, conveniente cuando tenemos un objeto y queremos obtener una de sus propiedades

// const itemsNames = items.map((x) => {
//     return x.nombre + '-' + x.precio
// })

// console.log(itemsNames)




// ··············· ----> Find 
// Devuelve un elemento que coincide con un valor dentro del arrat

// const findItems = items.find((x) => {
//     return x.precio === 90000
// })

// console.log(findItems)





// ·················· ----> forEach 
// loopea en el array

// const forEach = items.forEach((x) => {
//     return x.nombre
// })

// console.log(forEach)

// const loopForEach = items.forEach((x) => {
//     console.log(x.precio)
// })





// ···················· -----> Some

// some devuelve un boleano TRUE o FALSE si la propiedad existe en dicho array

// const someItem = items.some((x) => {
//     return x.nombre === 'Auto'  // FALSE
// })

// console.log(someItem)

// const lowItem = items.some((x) => {
//     return x.precio < 100   // TRUE
// })

// console.log(lowItem)






// ·················· -----> Every

// Devuelve Boleano en caso de que todos los valores dentro del array de objetos cumplen las condiciones

// const lowItem = items.every((x) => {
//     return x.precio < 100  // ------> TRUE
// })








// ················· ----> Reduce

// Reduce nos permite por ejemplo sumar valores dentro de un array de objetos
// Admite dos parametros, el primero corresponde al valorTotal de la suma | el segundo le pasamos lo que representa cada uno de los objetos en cada iteracion
// luego como callback dentro de reduce debemos colocar un numero que da inicio a la suma

const total = items.reduce((currentTotal, x) => {
    return x.precio + currentTotal
}, 0)

console.log(total)









// ··················· ----> Includes
// Devuelve Boleano si encuentra el valor que pasamos como parametro de un array

const numbers = [1, 2, 3, 4, 5, 6, 7]

const includesNumber = numbers.includes(5)
console.log(includesNumber)