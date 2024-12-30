// Liste des classes
const classes = [
    {
        classe: "Guerrier",
        armes: ["épée longue", "bouclier"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Rôdeuse",
        armes: ["Arc long", "Dague"],
        styleCombat: ["A distance"],
    },
    {
        classe: "La Sorcière",
        armes: ["Amulettes", "Talisman"],
        styleCombat: ["A Distance"],
    },
    {
        classe: "Le Berserker",
        armes: ["Haches", "Noeuds Ornementaux"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Dompteuse",
        armes: ["Epée courte", "Colifichet"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Musa",
        armes: ["Lame", "Arc en Corne"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Maehwa",
        armes: ["Lame", "Arc en Corne"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Valkyrie",
        armes: ["Epée longue", "Bouclier"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Kunoichi",
        armes: ["Epée courte", "Shuriken / Kunai"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Ninja",
        armes: ["Epée courte", "Shuriken / Kunai"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Magicien",
        armes: ["Bâton", "Dague"],
        styleCombat: ["Magie à Distance"],
    },
    {
        classe: "La Magicienne",
        armes: ["Sphère", "Dague"],
        styleCombat: ["Magie à Distance"],
    },
    {
        classe: "La Mystique",
        armes: ["Gantelets", "Coudières"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Poings Furieux",
        armes: ["Gantelets", "Coudières"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Lahn",
        armes: ["Pendulum", "Epée Cérémonielle"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "L'Archer",
        armes: ["Arbalète", "Raghon"],
        styleCombat: ["A Distance"],
    },
    {
        classe: "La Lame Sombre",
        armes: ["Espadon", "Noeuds"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Shai",
        armes: ["Florang", "Vitclarum"],
        styleCombat: ["Soutien"],
    },
    {
        classe: "La Guardiana",
        armes: ["Hache de Guerre", "Bouclier"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "L'Hashasin",
        armes: ["Shamshir", "Haladie"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Nova",
        armes: ["Fléau", "Quoratum"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Sage",
        armes: ["Kyve", "Talisman"],
        styleCombat: ["Magie à Distance"],
    },
    {
        classe: "La Corsaire",
        armes: ["Sérénaka", "Maréka"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Drakania",
        armes: ["Slayer", "Eclat Draconique"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Woosa",
        armes: ["Eventail Papillon", "Sceptre Do"],
        styleCombat: ["Mi Distance"],
    },
    {
        classe: "La Maegu",
        armes: ["Amulette Renard", "Couteau Binyeo"],
        styleCombat: ["Corps à Corps", "A Distance"],
    },
    {
        classe: "L'Erudite",
        armes: ["Marteaux", "Noyaux de Gravité"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Dosa",
        armes: ["Hwando", "Pipe"],
        styleCombat: ["Corps à Corps"],
    },
];

// Liste des classes eveilles
const awakening = [
    {
        classe: "Guerrier Eveil",
        armes: ["Claymore"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Guerrier Eveil",
        armes: ["Epée elfique"],
        styleCombat: [ "Corps à Corps"],
    },
    {
        classe: "Sorcière Eveil",
        armes: ["Faux"],
        styleCombat: ["A Distance", "Corps à Corps"],
    },
    {
        classe: "Berserker Eveil",
        armes: ["Mortier"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Dompteuse Eveil",
        armes: ["Bo céleste"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Musa Eveil",
        armes: ["Mushindo"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Maehwa Eveil",
        armes: ["Mushindo"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Valkyrie Eveil",
        armes: ["Lance"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Kunoichi Eveil",
        armes: ["Chakram"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Ninja Eveil",
        armes: ["Surado"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Magicien Eveil",
        armes: ["Sphère Bog"],
        styleCombat: ["Magie à Distance"],
    },
    {
        classe: "La Magicienne Eveil",
        armes: ["Sphère Aad"],
        styleCombat: ["Magie à Distance"],
    },
    {
        classe: "La Mystique Eveil",
        armes: ["Cestus"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Poings Furieux Eveil",
        armes: ["Kavanchas"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Lahn Eveil",
        armes: ["Talwars Sanglants"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "L'archer Eveil",
        armes: ["Grand Arc"],
        styleCombat: ["A Distance"],
    },
    {
        classe: "La Lame Sombre Eveil",
        armes: ["Vediant"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Shai Eveil",
        armes: ["Solrédo"],
        styleCombat: ["Soutien"],
    },
    {
        classe: "La Guardiana Eveil",
        armes: ["Jordun"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "L'Hashasin Eveil",
        armes: ["Céraste"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Nova Eveil",
        armes: ["Epine"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Sage Eveil",
        armes: ["Kibelius"],
        styleCombat: ["Mague à Distance"],
    },
    {
        classe: "La Corsaire Eveil",
        armes: ["Patraka"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Drakania Eveil",
        armes: ["Trion"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "La Woosa Eveil",
        armes: ["Livre des Ames"],
        styleCombat: ["Mi Distance"],
    },
    {
        classe: "La Maegu Eveil",
        armes: ["Eventails Vulpins"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "L'Erudite Eveil",
        armes: ["Masse"],
        styleCombat: ["Corps à Corps"],
    },
    {
        classe: "Le Dosa Eveil",
        armes: ["Lame Divine"],
        styleCombat: ["Corps à Corps", "A Distance"],
    },
]


// Affichage
const classesContainer = document.getElementById('classescontainer');
const awakeningContainer = document.getElementById('awakeningcontainer');

// Affichage des classes
classes.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('classe');
    div.innerHTML = `
        <h2>${c.classe}</h2>
        <p><span>Les armes :</span> ${c.armes.join(', ')}</p>
        <p><span>Le style de combat :</span> ${c.styleCombat.join(', ')}</p>
    `;
    classesContainer.appendChild(div);
});

// Affichage des classes eveilles
awakening.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('classe');
    div.innerHTML = `
        <h2>${c.classe}</h2>
        <p><span>Les armes :</span> ${c.armes.join(', ')}</p>
        <p><span>Le style de combat :</span> ${c.styleCombat.join(', ')}</p>
    `;
    awakeningContainer.appendChild(div);
})