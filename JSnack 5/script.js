// Creo un array vuoto
const numbers = [];

// Chiedo all'utente di inserire un numero casuale per 6 volte
for (let i = 0; i < 6; i++) {

    // Chiedo all'utente di inserire un numero
    const input = parseInt(prompt("Inserisci il " + (i + 1) + "° numero di 6:"));
    console.log("Numero inserito: ", input);

    // Verifico se il numero inserito è PARI o DISPARI
    if (input % 2 !== 0) {
        // Inserisco il numero DISPARI nell'array
        console.log("Numero dispari");
        numbers.push(input);
    } else if (input % 2 === 0) {
        console.log("Numero pari");
    }
}

// Stampo l'array con i numeri dispari inseriti dall'utente
console.log("Numeri dispari inseriti:", numbers);