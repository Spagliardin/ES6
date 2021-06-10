// ################### SIN DESTRUCTURING #####################

const direccion = {
    street: 'Monroe',
    city: 'Buenos Aires',
    country: 'Argentina'
}

// const street = direccion.street
// const city = direccion.city
// const country = direccion.country

// console.log(street, city, country)

// ##################### DESTRUCTURING ##################

const {street, city, country} = direccion

console.log(street, city, country)
