const secteurs = [
{ secteur: "Pharmacie", prix: 450 },
{ secteur: "Infirmier - Infirmière", prix: 80 },
{ secteur: "Kinésithérapeute", prix: 80 },
{ secteur: "Médecin", prix: 220 },
{ secteur: "Chirurgien", prix: 220 },
{ secteur: "Dermatologue", prix: 250 },
{ secteur: "Dentiste", prix: 220 },
{ secteur: "Avocat", prix: 200 },
];
function filterResults() {
    const input = document.getElementById('activity').value.toLowerCase();
    const resultDiv = document.getElementById('autocomplete-list');
    resultDiv.innerHTML = ''; // Clear previous results
  
    if (input.length > 0) {
      const filteredSectors = secteurs.filter(s => s.secteur.toLowerCase().includes(input));
  
      filteredSectors.forEach(sector => {
        const item = document.createElement('div');
        item.classList.add('autocomplete-item');
        item.innerHTML = sector.secteur;
  
        item.addEventListener('click', function() {
          document.getElementById('activity').value = sector.secteur;
          resultDiv.innerHTML = ''; // Effacer la liste après sélection
          displayPrices(sector.prix, sector.secteur); // Afficher les prix calculés
        });
  
        resultDiv.appendChild(item);
      });
    }
  }
  
  function displayPrices(price, sector) {
    // Calculs pour les différentes offres
    const essentiel = price;
    const confort = Math.round(essentiel * 1.4375);
    const optim = Math.round(confort * 1.43478261);
    const conseilPlus = Math.round(optim * 1.27272727);

    const ttcessentiel = Math.round(price * 1.2);
    const ttcconfort = Math.round(confort * 1.2);
    const ttcoptim = Math.round(optim * 1.2);
    const ttcconseilPlus = Math.round(conseilPlus * 1.2);
  
    // Mise à jour des prix dans les éléments HTML par leur ID
    document.getElementById('price-essentiel').innerText = essentiel;
    document.getElementById('price-confort').innerText = confort;
    document.getElementById('price-optim').innerText = optim;
    document.getElementById('price-conseil-plus').innerText = conseilPlus;
    // Mise à jour des prix dans les éléments HTML par leur ID
    document.getElementById('price-essentiel-ttc').innerText = ttcessentiel;
    document.getElementById('price-confort-ttc').innerText = ttcconfort;
    document.getElementById('price-optim-ttc').innerText = ttcoptim;
    document.getElementById('price-conseil-plus-ttc').innerText = ttcconseilPlus;

    // Mise à jour du secteur sélectionné dans l'élément HTML
    document.getElementById('selected-sector').innerText = sector;
  }