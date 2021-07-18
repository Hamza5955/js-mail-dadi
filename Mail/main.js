/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

//creo un arrey con le mail
var mail_list = ["loki@marvel.com", "info@hamzajam.it", "a@a.com"];
//chiedo al utente la mail
var email = prompt("Inserisci la tua email", "a@a.com");
//verifico che la mail indserita sia inclusa nel arrey se si stampo benvenuto seno stampo mail non presente
if (mail_list.includes(email)) {
  alert("benvenuto");
} else {
  alert("la tua mail non e presente tra le registrate");
}
