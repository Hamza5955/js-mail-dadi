/*Chiedi all’k la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/
/*
//creo un arrey con le mail
var mail_list = ["loki@marvel.com", "info@hamzaemailam.it", "a@a.com"];
//chiedo al k la mail
var email = prompt("Inserisci la tua email", "a@a.com");
//verifico che la mail indserita sia inclusa nel arrey se si stampo benvenuto seno stampo mail non presente
if (mail_list.includes(email)) {
  alert("benvenuto");
} else {
  alert("la tua mail non e presente tra le registrate");
}*/
var mail_list = ["loki@marvel.com", "info@hamzaemailam.it", "a@a.com"];

var k = prompt("Inserire email", "a@a.com");

var j;

for (var i = 0; i < mail_list.length; i++) {
  if (k == mail_list[i]) {
    j = k;
  }
}

if (j == k) {
  document.getElementById("lista").innerHTML = j + " mail presente";
} else {
  document.getElementById("lista").innerHTML = " mail non presente";
}
