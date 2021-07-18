/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);
//genero numero rand da 1-6 per giocatore
var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);
//genero numero rand da 1-6 per computer
if (giocatore > computer) {
  //verifico che il numero generato da giocatore sia maggiore al quelo dell computer se si stampo il giocatore vince
  document.getElementById("dadi").innerHTML = "Il giocatore vince";
} else if (giocatore < computer) {
  //verifico che il numero generato da giocatore dia minore al quelo dell computer se si stampo il pc vince
  document.getElementById("dadi").innerHTML = "Il computer vince ";
} else if (giocatore == computer) {
  //verifico che il numero generato da giocatore sia uguale a quello generto dal pc poi stampo pareggio
  document.getElementById("dadi").innerHTML = "pareggiano";
}
