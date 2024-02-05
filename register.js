function verifierCases() {
    var checkbox1 = document.getElementById('checkbox1');
    var checkbox2 = document.getElementById('checkbox2');
    var messageErreur = document.getElementById('messageErreur');

    // Vérifiez si au moins une case à cocher est cochée
    if (!checkbox1.checked && !checkbox2.checked) {
        messageErreur.textContent = "Veuillez cocher au moins une option.";
    } else {
        // Réinitialisez le message d'erreur si les cases sont cochées
        messageErreur.textContent = "";
        
        // Ajoutez ici le code pour soumettre le formulaire ou effectuer d'autres actions
        // ...
    }
}
