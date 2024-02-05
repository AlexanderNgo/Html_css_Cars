function verifierChamps() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var messageErreur = document.getElementById('messageErreur');

    // Vérifiez si les champs sont vides
    if (nom.trim() === '' || prenom.trim() === '') {
        messageErreur.textContent = "Veuillez remplir tous les champs.";
        return false; // Empêche la soumission du formulaire
    } else {
        // Réinitialisez le message d'erreur si les champs sont remplis
        messageErreur.textContent = "";
        return true; // Permet la soumission du formulaire
    }
}
