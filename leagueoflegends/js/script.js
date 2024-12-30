fetch('https://ddragon.leagueoflegends.com/cdn/14.20.1/data/fr_FR/champion.json') // on recupere toute les données des champions
  .then(response => response.json())
  .then(data => {
    const champions = data.data;
    const championsList = document.getElementById('tankchamp'); // conteneur des champions
    const tagsContainer = document.querySelector('.tags'); // Conteneur des boutons de filtrage
    
    // Fonction pour afficher les champions
    const displayChampions = (filteredChampions) => {
      championsList.innerHTML = ''; // Efface la liste existante
      filteredChampions.forEach(champion => {
        const listItem = document.createElement('li'); // on créer une li pour chaque champions
        const img = document.createElement('img'); // on créer une image pour chaque champion
        img.src = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion.image.full}`; // on recupere l'image
        img.alt = champion.name; // on met le nom en alt
        
        listItem.textContent = champion.name; // on met le nom du champion
        listItem.appendChild(img); // on rajoute l'image
        championsList.appendChild(listItem); // on rajoute la li

        // Événement pour rediriger vers la page du champion
        listItem.addEventListener('click', () => {
          const championData = JSON.stringify(champion); // Convertir le champion en JSON
          window.location.href = `champion.html?data=${encodeURIComponent(championData)}`; // Rediriger vers la page du champion
        });
      });
    };

    // Afficher tous les champions par défaut
    displayChampions(Object.values(champions));

    // Extraire les tags uniques des champions
    const allTags = new Set();
    Object.values(champions).forEach(champion => {
      champion.tags.forEach(tag => allTags.add(tag));
    });

    // Créer les boutons de filtrage dynamiquement pour chaque tag
    allTags.forEach(tag => {
      const button = document.createElement('button');
      button.textContent = tag;
      button.addEventListener('click', () => {
        const filteredChampions = Object.values(champions).filter(champion => 
          champion.tags.includes(tag)
        );
        displayChampions(filteredChampions);
      });
      tagsContainer.appendChild(button);
    });

    // Ajouter un bouton "Tout afficher" pour réinitialiser le filtre
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Tout afficher';
    showAllButton.addEventListener('click', () => {
      displayChampions(Object.values(champions));
    });
    tagsContainer.appendChild(showAllButton);
  });
