const dasboard = document.querySelector("#dasboard");
const connexion = document.querySelector("#connexion");
const inscription = document.querySelector("#inscription");
const btnConnexion = document.querySelector("#btn-connexion");
const btnInscription = document.querySelector("#btn-inscription");
const btnCheckConnexion = document.getElementById("btn-check-connexion");
const btnCheckInscription = document.getElementById("btn-check-inscription");
const hoverFormation = document.querySelectorAll(".hover-formation");

if (dasboard) {
  btnConnexion.addEventListener("click", () => {
    window.location.href = "auth/connexion.html";
  });
  btnInscription.addEventListener("click", () => {
    window.location.href = "auth/inscription.html";
  });

  hoverFormation.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      e.classList.add("hover:hover:bg-[#34495E]");
      e.classList.add("hover:text-white");
      e.classList.add("hover-effect"); // Ajoute une classe définie dans le CSS
    });

    e.addEventListener("mouseleave", () => {
      e.classList.remove("hover-effect"); // Retire la classe quand la souris sort
    });
  });
}

if (connexion) {
  btnCheckConnexion.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}
if (inscription) {
  btnCheckInscription.addEventListener("click", () => {
    window.location.href = "/index.html";
  });
}
