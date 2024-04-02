// Array contenente i nomi degli invitati alla festa
const guests = ["Gatsby", "Pippo", "Pluto", "Paperino", "Yuki"];

// Chiedo all'utente di inserire il suo nome
const userName = prompt("Inserisci il tuo nome:");

// Verifico se il nome dell'utente è presente nell'array degli invitati
if (guests.includes(userName)) {
    console.log("Sei invitato alla festa del Grande Gatsby!");
} else {
    console.log("BUTTAFUORI!!! C'E' UN INTRUSO!!!");
}