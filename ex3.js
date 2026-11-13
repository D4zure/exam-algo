function comparerScores(score1, score2) {
  return score1 >= score2;
}

comparerScores(12, 8); // "Joueur 1 gagne"
comparerScores(3, 7); // "Joueur 2 gagne"
comparerScores(5, 5); // "Égalité"
