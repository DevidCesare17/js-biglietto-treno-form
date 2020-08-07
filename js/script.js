

document.getElementById("genera").addEventListener("click",
  function() {
    var name = document.getElementById("name").value;
    if (name.length < 3 || !isNaN(name)) {
      alert("Inserire correttamente nome e cognome!");
    } else {
      document.getElementById("ticket_name").innerHTML = name;
    }

    var km = document.getElementById("km").value;
    if (km < 1) {
      alert("Inserisci valore numerico >= a 1!");
    }
    var prezzo = 0.21;
    var prezzoTot = prezzo * km;

    var scontoUnder18 = prezzoTot * 0.20; //sconto 20% under18
    var scontoOver65 = prezzoTot * 0.40; //sconto 40% over65

    var prezzoTotUnder18 = prezzoTot - scontoUnder18;
    var prezzoTotOver65 = prezzoTot - scontoOver65;

    var eta = document.getElementById("eta").value;
    if (eta == "1") {
      document.getElementById("ticket_offerta").innerHTML = "Tariffa Standard";
      document.getElementById("prezzo_tot").innerHTML = prezzoTot.toFixed(2) + " &euro;";
    } else if (eta == "2") {
      document.getElementById("ticket_offerta").innerHTML = "Tariffa ridotta";
      document.getElementById("prezzo_tot").innerHTML = prezzoTotUnder18.toFixed(2) + " &euro;";
    } else if (eta == "3") {
      document.getElementById("ticket_offerta").innerHTML = "Sconto Gold";
      document.getElementById("prezzo_tot").innerHTML = prezzoTotOver65.toFixed(2) + " &euro;";
    } else{
      alert("Seleziona un'età!");
    }

    var numCarrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById("num_carrozza").innerHTML = numCarrozza;

    var codCp = Math.floor(Math.random() * 9999) + 90000;
    document.getElementById("codcp").innerHTML = codCp;

    var biglietto = document.getElementById("bigliettone");
    biglietto.className = "your_ticket";
    biglietto.className = biglietto.classList + " d_block";
  }
);

document.getElementById("annulla").addEventListener("click",
  function() {
    // INSERIRE RESET CAMPI INPUT

    var biglietto = document.getElementById("bigliettone");
    biglietto.className = "d_none";
  }
);
