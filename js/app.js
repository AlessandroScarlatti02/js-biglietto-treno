console.log("Ciao Mamma");



const priceElement = document.getElementById('price')
// console.log(priceElement)

//Dichiarazioni Variabili
const over = 40
const under = 20
const kmPrice = 0.21
let price
let discount
let finalPrice

//Richiesta all'utente dei dati neccessari per il calcolo del prezzo
let km = prompt("Inserisci i km che vuoi percorrere")
console.log(km);
let age = prompt("Inserisci la tua età")
console.log(age)

if (age >= 18 && age <= 64) {
    price = kmPrice * km
    priceElement.innerHTML = price.toFixed(2)
}

else if (age >= 65) {
    price = kmPrice * km
    discount = (price * over) / 100
    finalPrice = price - discount
    priceElement.innerHTML = finalPrice.toFixed(2)
}

else {
    price = kmPrice * km
    discount = (price * under) / 100
    finalPrice = price - discount
    priceElement.innerHTML = finalPrice.toFixed(2)
}

console.log(price);