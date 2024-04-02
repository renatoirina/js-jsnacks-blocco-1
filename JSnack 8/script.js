// Chiedo all'utente il numero di 4 cifre
const number = parseInt(prompt("Inserisci un numero da 4 cifre"));
console.log("Numero inserito:", number);

// Controllo che il numero inserito dall'utente sia corretto
if(isNaN(number) || number < 1000 || number > 9999) {
    prompt("Inserisci un numero valido di 4 cifre.");
} else {
    // Converto il numero in stringa
    const numberString = number.toString();

    // Inizializzazione della variabile della somma delle cifre
    sum = 0;

    // Ciclo for
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }

    // Stampo la somma delle cifre
    console.log("La somma delle cifre del numero:", number, "è =", sum);
}