// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Vi consigliamo di dividere i due esercizi in due cartelle separate all'interno della stessa repo! :occhiolino:
// A domani :charmander_dancing: (modificato) 

const mailUtente = prompt("Inserisci la tua email");
const messaggio = document.getElementById('messaggio')

console.log(mailUtente);

const tutteLeMail = ["angela@gmail.com", "paolo@gmail.com", "alfonso@gmail.com"]
    
if (mailUtente.includes('angela@gmail.com')) {
    messaggio.innerHTML = "ACCESSO CONSENTITO"
    messaggio.classList.add("green");
    console.log("UTENTE AUTORIZZATO")
} else if (mailUtente.includes('paolo@gmail.com')) {
    messaggio.innerHTML = "ACCESSO CONSENTITO"
    messaggio.classList.add("green");
    console.log("UTENTE AUTORIZZATO")
} else if (mailUtente.includes('alfonso@gmail.com')) {
    messaggio.innerHTML = "ACCESSO CONSENTITO"
    messaggio.classList.add("green");
    console.log("UTENTE AUTORIZZATO")
} else {
    messaggio.innerHTML = "ACCESSO NEGATO"
    messaggio.classList.add("red");
    console.log("UTENTE NON AUTORIZZATO");
}
