// ####################### OBJETOS ########################

// Son colecciones de claves - valor 
// ········ A las funciones que se encuentran dentro del objeto se lo llaman "metodos" ········
// ········ variables dentro de un objeto son llamados "propiedades" ·················


const x = {
    nombre: "nicolas", // ------------> Propiedad

    walk() {
        console.log('I am a Walking') // -------------> Metodo
    },

    talk() {
        console.log(this) // --------------------> utilizamos this que en este caso hace referencia al objeto
    }
}

x.walk() // ------> accediendo a los metodos del objeto
x.talk()