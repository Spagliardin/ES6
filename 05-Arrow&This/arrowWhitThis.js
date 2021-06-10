// ###### METODO DENTRO DEL OBJETO #####

// const person = {
//     name: 'Nicolas',
//     walk() {
//         console.log('this', this)
//     }
// }

// person.walk() ------> Referencia a todo el objeto

// ################## FUNCTION + THIS #######################

// const person = {
//     walk() {
//         setTimeout(function (){
//             console.log(`this`, this)
//         }, 1000)
//     }
// }

// person.walk()   ----------------> Con funciones el this hace referencia al bojeto windows

// ##################### ARROW FUNCTION + THIS ########################

// const person = {
//     walk() {
//         setTimeout(() => {
//             console.log(`this`, this)
//         }, 1000)
//     }
// }

// person.walk()   ----------------> hacemos referencia el objeto, ya que la arrow no sobreescriben el valor de this


const person = {
    name: 'Nicolas',
    walk: function (){
        setTimeout(() => {
            console.log(`this`, this.name)
        }, 1000)
    }
}

person.walk()