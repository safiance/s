const secteurs = [
{ secteur: "Maçon - BTP", prix: 250 },
{ secteur: "Plaquiste - BTP", prix: 250 },
{ secteur: "Peintre - BTP", prix: 250 },
{ secteur: "Carreleur - BTP", prix: 250 },
{ secteur: "Plombier - BTP", prix: 250 },
{ secteur: "Électricien - BTP", prix: 250 },
{ secteur: "Construction - BTP", prix: 250 },
{ secteur: "Location de bennes", prix: 250 },
{ secteur: "Bureau d'étude", prix: 250 },
{ secteur: "Paysagiste", prix: 250 },
{ secteur: "Coiffure", prix: 200 },
{ secteur: "Esthétique", prix: 200 },
{ secteur: "Prothésiste ongulaire", prix: 230 },
{ secteur: "Informaticien", prix: 230 },
{ secteur: "Consultant", prix: 220 },
{ secteur: "Négoce Automobile", prix: 380 },
{ secteur: "Mécanique Automobile", prix: 260 },
{ secteur: "Carrosserie Automobile", prix: 260 },
{ secteur: "Centre de Lavage Automobile", prix: 250 },
{ secteur: "Agent commercial", prix: 180 },
{ secteur: "Agence immobilière sans gestion locative", prix: 230 },
{ secteur: "Agence immobilière avec gestion locative", prix: 250 },
{ secteur: "Promotion immobilière", prix: "Sur Rendez-vous" },
{ secteur: "Marchand de biens", prix: "Sur Rendez-vous" },
{ secteur: "Agence de communication et de publicité", prix: 220 },
{ secteur: "Community Manager", prix: 220 },
{ secteur: "Spécialiste en diagnostic immobilier", prix: 250 },
{ secteur: "Courtier en crédit", prix: 180 },
{ secteur: "Agence d'assurance", prix: 250 },
{ secteur: "Grossiste", prix: "Sur Rendez-vous" },
{ secteur: "Pizzeria, Sushi, Burgers à emporter et en livraison", prix: 250 },
{ secteur: "Boucherie, charcuterie et traiteur", prix: 250 },
{ secteur: "Traiteur", prix: 250 },
{ secteur: "Prêt-à-porter", prix: 280 },
{ secteur: "Presse, bimbeloterie", prix: 280 },
{ secteur: "Tabac, Française des jeux, bimbeloterie", prix: 350 },
{ secteur: "Tabac, Française des jeux, bimbeloterie et presses", prix: 390 },
{ secteur: "Tabac, Française des jeux, bimbeloterie, presses et BAR", prix: 450 },
{ secteur: "BAR, PMU", prix: 250 },
{ secteur: "Restauration traditionnelle", prix: 280 },
{ secteur: "Brasserie, restauration", prix: 300 },
{ secteur: "PUB", prix: 450 },
{ secteur: "Club et boîte de nuit", prix: 450 },
{ secteur: "Influenceur", prix: "Sur Rendez-vous" },
{ secteur: "Fleuriste", prix: 240 },
{ secteur: "Pressing", prix: 220 },
{ secteur: "Laverie automatique", prix: 180 },
{ secteur: "Location de box (conteneur)", prix: 200 },
{ secteur: "Primeur fruits et légumes", prix: 220 },
{ secteur: "Boulangerie, pâtisserie, sandwicherie", prix: 350 },
{ secteur: "Poissonnerie, crustacés", prix: 220 },
{ secteur: "Cigarettes électroniques et CBD", prix: 250 },
{ secteur: "Téléphonie, ventes et réparations", prix: 280 },
{ secteur: "Commerçants divers", prix: "Sur Rendez-vous" },
{ secteur: "Vente à distance (internet)", prix: "Sur Rendez-vous" },
{ secteur: "Prestataires aides à la personne", prix: 250 },
{ secteur: "Microcrèche", prix: 180 },
{ secteur: "Pompes funèbres", prix: 290 },
{ secteur: "Fossoyeur", prix: 180 },
{ secteur: "Taxi", prix: 180 },
{ secteur: "VTC", prix: 180 },
{ secteur: "Ambulance", prix: "Sur Rendez-vous" },
{ secteur: "SCI Revenu foncier", prix: 45 },
{ secteur: "SCI IS", prix: 45 },
{ secteur: "Holding", prix: 80 },
{ secteur: "LMNP", prix: 80 },
{ secteur: "Association", prix: "Sur Rendez-vous" }    
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
    const confort = Math.round(essentiel * 1.4);
    const optim = Math.round(confort * 1.2);
    const conseilPlus = Math.round(optim * 1.3);

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