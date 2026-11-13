function calculerPrixTotal(prixUnitaire, quantite, fraisLivraison) {
  return prixUnitaire * quantite + fraisLivraison;
}

calculerPrixTotal(10, 3, 5); // 35
calculerPrixTotal(2.5, 4, 0); // 10
calculerPrixTotal(0, 10, 4.99); // 4.99
