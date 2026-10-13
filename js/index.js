
let characters = document.querySelector(".characters");
let gryffindor = document.querySelector(".gryffindor");
let hufflepuff = document.querySelector(".hufflepuff");
let ravenclaw = document.querySelector(".ravenclaw");
let slytherin = document.querySelector(".slytherin");

let personnages = [];

fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => {
    personnages = data.slice(0, 20);

    afficherPersonnages(personnages);
  })
  .catch(error => console.error("Erreur :", error));


function afficherPersonnages(liste) {
  characters.innerHTML = "";

  liste.forEach(personnage => {
    let newSection = document.createElement("section");

    if (personnage.house === "Gryffindor") {
      newSection.classList.add("grifondor");
    } else if (personnage.house === "Slytherin") {
      newSection.classList.add("slytherin");
    } else if (personnage.house === "Ravenclaw") {
      newSection.classList.add("ravenclaw");
    } else if (personnage.house === "Hufflepuff") {
      newSection.classList.add("hufflepuff");
    }

    newSection.innerHTML = `
      <div>
        <img src="${personnage.image}" alt="${personnage.name}">
        <p>${personnage.name}</p>
      </div>
    `;
    characters.appendChild(newSection);
  });
}

function filtrerMaison(maison) {
  let resultat = personnages
    .filter(personnage => personnage.house === maison)
    .sort((a, b) => a.name.localeCompare(b.name));

  afficherPersonnages(resultat);
}

gryffindor.addEventListener("click", () => {
  filtrerMaison("Gryffindor");
});
hufflepuff.addEventListener("click", () => {
  filtrerMaison("Hufflepuff");
});

ravenclaw.addEventListener("click", () => {
  filtrerMaison("Ravenclaw");
});
slytherin.addEventListener("click", () => {
  filtrerMaison("Slytherin");
});
