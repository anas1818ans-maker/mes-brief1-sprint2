
let produits = [
  { id: 1, nom: "Jus d’orange", prix: 12 },
  { id: 2, nom: "Biscuits", prix: 8 }
];

let prochainId = 3;

const FORM = document.getElementById("form-produit");
const NOM = document.getElementById("nom");
const PRIX = document.getElementById("prix");
const LISTE = document.getElementById("liste-produits");
const COMPTEUR = document.getElementById("compteur");
const TOTAL = document.getElementById("total");
const ETAT_VIDE = document.getElementById("etat-vide");
const MESSAGE = document.getElementById("message");
const MODELE = document.getElementById("modele-produit");

function afficherProduits() {
  LISTE.replaceChildren();

  let total = 0;

  produits.forEach(function (produit) {
    const CARTE = MODELE.content.cloneNode(true);

    const LI = CARTE.querySelector(".produit");
    const NOM_PRODUIT = CARTE.querySelector(".nom-produit");
    const PRIX_PRODUIT = CARTE.querySelector(".prix-produit");
    const BOUTON = CARTE.querySelector(".supprimer");

    NOM_PRODUIT.textContent = produit.nom;
    PRIX_PRODUIT.textContent = produit.prix.toFixed(2) + " MAD";

    BOUTON.addEventListener("click", function () {
      supprimerProduit(produit.id);
    });

    LI.dataset.id = produit.id;

    LISTE.appendChild(CARTE);

    total += produit.prix;
  });

  COMPTEUR.textContent = produits.length;
  TOTAL.textContent = total.toFixed(2);

  ETAT_VIDE.hidden = produits.length > 0;
}

function ajouterProduit(nom, prix) {

  if (nom != "" && prix != "") {
    const nouveauProduit = {
    id: prochainId++,
    nom: nom,
    prix: prix
  };

  produits.push(nouveauProduit);
  afficherProduits();
    
  }else{
    alert("champ invalid");
  }
}

function supprimerProduit(id) {
  if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
    produits = produits.filter(function (produit) {
      return produit.id !== id;
    });
    afficherProduits();
  }
}

FORM.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomProduit = NOM.value.trim();
  const prixProduit = Number(PRIX.value);

  ajouterProduit(nomProduit, prixProduit);

  MESSAGE.textContent = "";
  FORM.reset();
});

afficherProduits();



// À vous de jouer :
// 1. Afficher les produits du tableau au chargement.
// 2. Gérer l’ajout depuis le formulaire.
// 3. Gérer le retrait du produit cliqué.
// 4. Bonus : compteur, état vide et total.
