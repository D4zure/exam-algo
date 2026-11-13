function comparerScores(score1, score2) {
  if (score1 > score2) console.log("Joueur 1 gagne");
  else if (score1 < score2) console.log("Joueur 2 gagne");
  else if ((score1 = score2)) console.log("Égalité");
}

comparerScores(12, 8); // "Joueur 1 gagne"
comparerScores(3, 7); // "Joueur 2 gagne"
comparerScores(5, 5); // "Égalité"
