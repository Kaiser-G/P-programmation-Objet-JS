"use strict"; // Oblige la déclaration des variables
class Employe {
  // Les attributs privés ont un # il faud faire get et set pour les utiliser
  Nom;
  Prenom;
  Branche;
  #salaire;

  constructor(nom = "par defaud", prenom, branche, salaire) {
    this.Nom = nom;
    this.Prenom = prenom;
    this.Branche = branche;
    this.#salaire = salaire;
  }

  //getter
  get Salaire() {
    return this.#salaire;
  }
  //setter
  set Salaire(value) {
    this.#salaire = value;
  }
}

const pierre = new Employe("Dupont", "Pierre", "Développement", 2000);
console.log(pierre);

const paul = new Employe("Durand", "Paul", "Production", 1800);
console.log(paul);

// Se déclenche lorsque TOUTE LA PAGE est chargée (Style, images etc..)
window.addEventListener("load", (event) => {
  // Le code de PROGRAMME PRINCIPAL
});
