

function PesoZaino() {
  let pesoInput = document.getElementById("peso").value;
  pesoInput=pesoInput.replace(',','.');
  let peso = parseFloat(pesoInput);

  if (isNaN(peso) || peso <=0) {
    document.getElementById("risultato").innerText="Inserisci un peso valido!";
    return;
  }

    let pesomassimo= peso*0.15;
    document.getElementById("risultato").innerText =
    "Il tuo zaino può pesare al massimo " + pesomassimo.toFixed(2) + " kg.";
}

const pesoInput = document.getElementById("peso");
pesoInput.addEventListener("focus", () => {
    if (pesoInput.value === "") {
        pesoInput.value = 60; 
    }
});



  function calcolaPeso() {
    let selezionati = document.querySelectorAll('input[name="oggetto"]:checked');
    let pesoTotale = 2;
    
    selezionati.forEach((checkbox) => {
      pesoTotale += parseFloat(checkbox.value);
    });
      const acqua = parseFloat(document.getElementById('acqua').value) || 0;
  pesoTotale += acqua;

    document.getElementById("pesoTotale").textContent = pesoTotale.toFixed(2);
  }



  function pulisciForm() {
  document.querySelectorAll('input[name="oggetto"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.getElementById('acqua').value = 0;
  let pesoTotale = 2;
  document.getElementById("pesoTotale").textContent = pesoTotale.toFixed(2);
}

