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
  //setter permet de modifier
  //si la nouvelle valeur est supérieur à l'ancienne alors elle change
  set Salaire(value) {
    if (value > this.#salaire) {
      this.#salaire = value;
    }
  }
  get Salaire() {
    return this.#salaire;
  }
}

// Se déclenche lorsque TOUTE LA PAGE est chargée (Style, images etc..)
window.addEventListener("load", (event) => {
  // Le code de PROGRAMME PRINCIPAL
  let pierre = new Employe("Dupont", "Pierre", "Développement", 2000);
  let paul = new Employe("Durand", "Paul", "Production", 1800);
  let jacques = new Employe("Daniel", "Jacques", "Production", 2500);
  //Exo 2.2 Rajout de la propriété CHEF
  pierre.chef = paul;
  console.log("Le chef de Pierre est : " + pierre.chef.Nom);

  paul.chef = jacques;
  console.log("Le chef de Paul est : " + paul.chef.Nom);

  pierre.Salaire = 3000; //si la value est inférieur a Salaire elle ne change pas
  console.log(pierre);

  //Exo 2.3

  console.log(jacques);
  jacques.Salaire = 1000; //refus de baisse de salaire
  paul.chef = jacques;

  console.log("Nom du chef du chef de Pierre : " + pierre.chef.chef.Nom);
});
