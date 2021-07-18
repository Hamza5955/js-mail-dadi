/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

if (giocatore > computer) {
  document.getElementById("dadi").innerHTML = "Il giocatore vince";
} else if (giocatore < computer) {
  document.getElementById("dadi").innerHTML = "Il computer vince ";
} else if (giocatore == computer) {
  document.getElementById("dadi").innerHTML = "pareggiano";
}
