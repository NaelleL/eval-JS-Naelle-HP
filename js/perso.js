
let personnage = JSON.parse(localStorage.getItem("personnage"));

if (personnage) {
  document.querySelector("#nom").textContent = personnage.name;

  let photo = document.querySelector("#photo");
  photo.src = personnage.image || "";
  photo.alt = personnage.name;

  document.querySelector("#acteur").textContent =
    personnage.actor || "Inconnu";

  document.querySelector("#genre").textContent =
    personnage.gender || "Inconnu";

  document.querySelector("#surnoms").textContent =
    personnage.alternate_names?.join(", ") || "Aucun surnom connu";

  document.querySelector("#yeux").textContent =
    personnage.eyeColour || "Inconnu";

  document.querySelector("#cheveux").textContent =
    personnage.hairColour || "Inconnu";

  document.querySelector("#naissance").textContent =
    personnage.dateOfBirth || "Inconnue";

  document.querySelector("#patronus").textContent =
    personnage.patronus || "Aucun";

  if (personnage.alive === false) {
    photo.classList.add("decede");
  }

  let blasons = {
    Gryffindor: "../images/Gryffindor.png",
    Slytherin: "../images/Slytherin.png",
    Ravenclaw: "../images/Ravenclaw.png",
    Hufflepuff: "../images/Hufflepuff.png"
  };

  let blason = document.querySelector("#blason");

  if (blasons[personnage.house]) {
    blason.src = blasons[personnage.house];
    blason.alt = "Blason de " + personnage.house;
  } else {
    blason.style.display = "none";
  }
}
