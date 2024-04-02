// Chiedo all'utente di inserire un numero N
const N = parseInt(prompt("Inserisci quanti numeri vuoi inserire: "));
console.log("N è =", N);

// Definisco un array che conterrà tutti i cubi di N
const cubesOfN = [];

// Eseguo un ciclo for
for (let i = 0; i < N; i++) {
    // Chiedo all'utente il numero "i" da moltiplicare al cubo
    let number = parseInt(prompt("Inserisci il "+ (i + 1) + "° numero da trasformare al cubo"));
    console.log("Numero inserito: ", number);

    // Eseguo il cubo di number
    number = Math.pow(number, 3);   // avrei potuto anche fare: number = number ** 3;
    console.log("Numero al cubo: ", number);

    // Inserisco il numero al cubo nell'array
    cubesOfN.push(number);
}

// Visualizzo in console.log l'array con i cubi
console.log(cubesOfN);