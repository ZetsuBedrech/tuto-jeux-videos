// on prend les ids
const decisionButton = document.getElementById("decision");
const recherche = document.getElementById("recherche");
const experimentation = document.getElementById("experimentation");
const diplomatie = document.getElementById("diplomatie");
const commerce = document.getElementById("commerce");
const construction = document.getElementById("construction");
const production = document.getElementById("production");
const recrutement = document.getElementById("recrutement");
const logistique = document.getElementById("logistique");
const officiers = document.getElementById("officiers");

// Les fonctions pour afficher ou cacher toutes les images
function showDecisionAlert() {
    const decisionImg = document.getElementById("decisionimg");
    hideAllImages();
    toggleImageVisibility(decisionImg);
}

function rechercheFunction() {
    const rechercheImg = document.getElementById("rechercheimg");
    hideAllImages();
    toggleImageVisibility(rechercheImg);
}

function experimentationFunction() {
    const experimentationImg = document.getElementById("experimentationimg");
    hideAllImages();
    toggleImageVisibility(experimentationImg);
}

function diplomatieFunction() {
    const diplomatieImg = document.getElementById("diplomatieimg");
    hideAllImages();
    toggleImageVisibility(diplomatieImg);
}

function commerceFunction() {
    const commerceImg = document.getElementById("commerceimg");
    hideAllImages();
    toggleImageVisibility(commerceImg);
}

function constructionFunction() {
    const constructionImg = document.getElementById("constructionimg");
    hideAllImages();
    toggleImageVisibility(constructionImg);
}

function productionFunction() {
    const productionImg = document.getElementById("productionimg");
    hideAllImages();
    toggleImageVisibility(productionImg);
}

function recrutementFunction() {
    const recrutementImg = document.getElementById("recrutementimg");
    hideAllImages();
    toggleImageVisibility(recrutementImg);
}

function logistiqueFunction() {
    const logistiqueImg = document.getElementById("logistiqueimg");
    hideAllImages();
    toggleImageVisibility(logistiqueImg);
}

function officiersFunction() {
    const officiersImg = document.getElementById("officiersimg");
    hideAllImages();
    toggleImageVisibility(officiersImg);
}

// Fonction pour basculer la visibilité des images
function toggleImageVisibility(imgElement) {
    if (imgElement.style.display === "block") {
        imgElement.style.display = "none";  // Cacher l'image si elle est visible
    } else {
        imgElement.style.display = "block"; // Afficher l'image si elle est cachée
    }

    // Ajouter un événement pour cacher l'image lorsqu'elle est cliquée
    imgElement.addEventListener("click", () => {
        imgElement.style.display = "none"; // Cacher l'image lorsqu'elle est cliquée
    });
}

// Fonction pour cacher toutes les images
function hideAllImages() {
    const allImages = document.querySelectorAll("img[id$='img']");  // Sélectionne toutes les images ayant un id qui se termine par 'img'
    allImages.forEach(img => {
        img.style.display = "none";  // Cacher chaque image
    });
}

// Ajouter des événements aux boutons
decisionButton.addEventListener("click", showDecisionAlert);
recherche.addEventListener("click", rechercheFunction);
experimentation.addEventListener("click", experimentationFunction);
diplomatie.addEventListener("click", diplomatieFunction);
commerce.addEventListener("click", commerceFunction);
construction.addEventListener("click", constructionFunction);
production.addEventListener("click", productionFunction);
recrutement.addEventListener("click", recrutementFunction);
logistique.addEventListener("click", logistiqueFunction);
officiers.addEventListener("click", officiersFunction);
