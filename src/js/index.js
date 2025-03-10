const dasboard = document.querySelector("#dasboard");
const connexion = document.querySelector("#connexion");
const inscription = document.querySelector("#inscription");
const btnConnexion = document.querySelector("#btn-connexion");
const btnInscription = document.querySelector("#btn-inscription");
const btnCheckConnexion = document.getElementById("btn-check-connexion");
const btnCheckInscription = document.getElementById("btn-check-inscription");

if (dasboard) {
  btnConnexion.addEventListener("click", () => {
    window.location.href = "auth/connexion.html";
  });
  btnInscription.addEventListener("click", () => {
    window.location.href = "auth/inscription.html";
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

