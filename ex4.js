function accesManege(taille, age) {
  return (taille >= 120, age >= 8);
}

accesManege(80, 10); // true
accesManege(130, 7); // false
accesManege(120, 8); // true
