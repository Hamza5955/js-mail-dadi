/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

var mail_list = ["loki@marvel.com", "info@hamzajam.it", "a@a.com"];

var email = prompt("Inserisci la tua email", "a@a.com");

if (mail_list.includes(email)) {
  alert("benvenuto");
} else {
  alert("la tua mail non e presente tra le registrate");
}
