"use strict"; // Oblige la déclaration des variables
// Les Fonctions/Procédures

// Zone de déclaration des variables GLOBALES
// (celles du programme PRINCIPAL)

// Se déclenche lorsque TOUTE LA PAGE est chargée (Style, images etc..)
window.addEventListener("load", (event) => {
  // Le code de PROGRAMME PRINCIPAL

  //tableau ordinaire indicé
  let hero = new Array("Bob", "Morane");

  console.log(hero[1]);

  //tableau associatif
  var tableau = new Array(); //déclaration d'un tableau vide
  tableau["Nom"] = "Moran";
  tableau["Prenom"] = "Bob";
  //   alert(tableau["Nom"]);
  console.log(tableau["Nom"]);

  //syntaxe JSON
  var tableau2 = { nom: "Morris", prenom: "Philippe", age: 21 };
  console.log(tableau2["nom"]);
  console.log(tableau2.age);

  //Créez un objet littéral
  let chanteur = {
    //nom, prenom sont des propriétés de l'objet chanteur
    nom: "Son",
    prenom: "Ben",

    //bonjour est une méthode de l'objet chanteur (Ne fonctionne pas)
    bonjour: function () {
      alert("fonction bonjour");
      alert("Bonjour, je suis " + this.prenom + this.nom + "enchanté");
    },
  };
  console.log(chanteur.nom);
});
