function formaterDuree(minutes) {
  return minutes / 60;
}

formaterDuree(135); // "2h15min"
formaterDuree(60); // "1h0min"
formaterDuree(45); // "0h45min"
