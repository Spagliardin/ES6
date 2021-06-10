// let & const == block scope !== VAR

//const x = 5;
//x = 2 // <------ Error, no podemos reasignar un nuevo valor

let x = 5;
x = 2 

console.log(x) // <----- valor x = 2

//######################## FUERA DEL SCOPE #########################

function variable() {
    let x = 5;
}

console.log(x) // ----> x undefined

// ········································································

// Funciones declaradas vs expresiones funcionales

// ################### DECLARATIVE FUNCTION ################### 

function foo() {
    console.log('foo')  
}

foo()

// ################### EXPRESION FUNCIONAL ################### 

const fooFuncional = () => {
    console.log('foo funcional')
}

fooFuncional()

