function validation() {
    var pays = document.getElementById("pays").value;
    var date_aller = document.getElementById("date_aller").value;
    var ville = document.getElementById("ville").value;
    var date_retour = document.getElementById("date_retour").value;
    var region = document.getElementById("region").value;
    
    if (pays !== "Dubai" && pays !== "Turky" && pays !== "France" && pays !== "Tokyo" && pays !== "Brezil" && pays !== "Miami" && pays !== "Saudi arabia") {
        alert("Veuillez choisir un pays parmi : Turky, Dubai, France, Tokyo, Miami, Brezil, Saudi arabia");
        return false; 
    }
        
    else if (pays === "" || date_aller === "" || ville === "" || date_retour === "" || region === "") {
            alert("Veuillez remplir tous les champs du formulaire.");
            return false; // Empêche l'envoi du formulaire si tous les champs ne sont pas remplis
        } else {
            return true; // Autorise l'envoi du formulaire si tous les champs sont remplis
        }
    }
   


    function validateNumero(numero) {
        // Vérifie si le numéro est un nombre
        if (isNaN(numero)) {
            return false; // Si ce n'est pas un nombre, retourne faux
        } else {
            return true; // Sinon, retourne vrai
        }
    }

 // Définition de la fonction de vérification du formulaire de contact
function verif(form) {
    // Récupération des champs du formulaire
    var nom = form.nom.value;
    var objet = form.objet.value;
    var email = form.email.value;
    var message = form.message.value;
    var numero = form.numero.value;
    var date = form.date.value;

    // Vérification que tous les champs sont remplis
    if (nom === "" || objet === "" || email === "" || message === "" || numero === "" || date === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false; // Empêche l'envoi du formulaire si tous les champs ne sont pas remplis
    } else {
        // Vérification que le champ numéro contient un nombre
        if (!validateNumero(numero)) {
            alert("Le champ numéro doit contenir uniquement des chiffres.");
            return false; // Empêche l'envoi du formulaire si le champ numéro ne contient pas un nombre
        } else {
            return true; // Autorise l'envoi du formulaire si tous les champs sont remplis correctement
        }
    }
}