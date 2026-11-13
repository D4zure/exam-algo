function accesSalle(estMembre, Invitation, estBanni) {
  return (estMembre || Invitation) && !estBanni;
}

accesSalle(true, false, false); // true
accesSalle(false, true, false); // true
accesSalle(true, true, true); // false
