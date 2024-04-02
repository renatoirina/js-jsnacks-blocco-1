// Variabile per memorizzare la somma dei numeri inseriti
let sum = 0;

// Ciclo che chiede all'utente di inserire un numero per 10 volte
for (let i = 0; i < 10; i++) {
    // Chiedo all'utente di inserire un numero e lo converto in numero intero
    const number = parseInt(prompt("Inserisci il " + (i + 1) + "° numero:"));
    console.log("Numero inserito:", number);

    // Aggiungo il numero inserito alla somma totale
    sum += number;
}

// Stampiamo la somma di tutti i numeri inseriti
console.log("La somma di tutti i numeri inseriti è:", sum);
