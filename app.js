const phases = [
  {
    temps: 300,
    titre: "Installation"
  },
  {
   phases.forEach(phase => {

    if (seconds === phase.temps) {

        title.textContent = phase.titre;

        speak(phase.titre);

        vibrate();
    }

});