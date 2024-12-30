// On récupère les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const championData = urlParams.get('data'); // On récupère les données du champion

if (championData) {
    const champion = JSON.parse(decodeURIComponent(championData)); // On decode les données du champion

    const championinfo = document.getElementById("championinfo");
    const nom = document.getElementById('nom'); // On met le nom du champion dans le h1
    nom.textContent = champion.name;

    // On créer une image pour le champion
    const img = document.createElement('img');
    img.src = `https://ddragon.leagueoflegends.com/cdn/14.20.1/img/champion/${champion.image.full}`;
    img.alt = champion.name;
    championinfo.appendChild(img);

    // On ajoute les roles du champion
    const tags = document.createElement('p');
    tags.textContent = `Role(s): ${champion.tags.join(', ')}`;
    championinfo.appendChild(tags);

    // On ajoute le titre
    const title = document.createElement('p');
    title.textContent = `Titre : ${champion.title}`;
    championinfo.appendChild(title);

    // on met le nom dans le titre de la page
    document.title = champion.name;
}