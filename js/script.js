// 1. chiedo all'utente il suo nome e cognome
var name = document.getElementById("name");

// 2. chiedo all'utente quanti km vuole percorrere
var km;
km = document.getElementById("km").value;

// 3. chiedo all'utente la sua età
var eta;
eta = document.getElementById("eta").value;

// 4. calcolo prezzo totale secondo prezzo fisso per km
var prezzo = 0.21;
var prezzoTot = prezzo * km;

// 5. impostazione dei vari sconti in base all'età
var scontoUnder18 = prezzoTot * 0.20; //sconto 20% under18
var scontoOver65 = prezzoTot * 0.40; //sconto 40% over65

var prezzoTotUnder18 = prezzoTot - scontoUnder18;
var prezzoTotOver65 = prezzoTot - scontoOver65;

document.getElementById("genera").addEventListener("click",
  function() {
    if (typeof eta == 1) {
      document.getElementById("prezzo_tot").innerHTML = prezzoTot;
    }
  }
);
