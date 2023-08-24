/* 

*/
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

// Esegui queste righe di codice ogni secondo(setInterval invoca: '1000' indica ogni secondo)
setInterval(() => {
  // inizializzo un oggetto date al momento corrente
  const now = new Date();
  // inizializzo un oggetto date al momento del termine
  const tomorrow = new Date("2023-08-25 9:30");

  // CREA UNA FUNZIONE CHE CALCOLA LA DIFFERENZA TRA:
  // recupero i MS dal momento attuale
  const msNow = now.getTime();
  // recupero i MS dal momento di arrivo
  const msTomorrow = tomorrow.getTime();
  // calcolo i S che separano dalla data di partenza alla data di arrivo
  const sToTomorrow = Math.floor((msTomorrow - msNow) / 1000);

  // convertire i MS in secondi(S)
  const seconds = sToTomorrow % 60;
  // convertire i secondi in minuti(M)
  const minutes = Math.floor((sToTomorrow / 60) % 60);
  // converto i minuti in ore(H)
  const hours = Math.floor((sToTomorrow / 60 / 60) % 24);
  // converto le ore in giorni(D)
  const days = Math.floor(sToTomorrow / 60 / 60 / 24);

  // CREA UNA FUNZIONE CHE STAMPA A SCHERMO:
  // stampo i S
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  // stampo i M
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  // stampo i H
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  // stampo i D
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}, 1000);
