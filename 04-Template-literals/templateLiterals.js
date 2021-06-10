// Old School 

// const user = (name, lastName, age) => {
// 	console.log(
// 		'El nombrel del user es ' +
// 			name +
// 			' y su apellido es ' +
// 			lastName +
// 			' y su edad es de ' +
// 			age
// 	);
// };

// ################### TEMPLATE LITERALS ######################

const user = (name, lastname, age) => {
    console.log(
        `Mi nombre es ${name} mi apellido es ${lastname} y tengo ${age} años de edad` // Sintaxis
    )
}

user('Nicolas', 'Spagliardi', '28')

