document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour vérifier que tous les champs sont remplis
    const form = document.querySelector('form');  // Récupère le formulaire
    const inputs = form.querySelectorAll('input, textarea'); // Récupère tous les champs du formulaire
    const submitButton = form.querySelector('button'); // Récupère le bouton de soumission
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Empêche l'envoi du formulaire avant la validation

        let allFieldsFilled = true;  // Variable pour vérifier si tous les champs sont remplis
        let errorMessage = '';

        // Vérifier chaque champ
        inputs.forEach(input => {
            if (input.required && !input.value.trim()) {  // Si le champ est obligatoire et vide
                allFieldsFilled = false;
                errorMessage += `${input.placeholder || input.name} est obligatoire.\n`;  // Ajoute un message d'erreur pour chaque champ vide
            }
        });

        // Si tous les champs sont remplis, on peut envoyer le formulaire
        if (allFieldsFilled) {
            form.submit();  // Si tout est validé, soumettre le formulaire
            alert("Votre message a bien été envoyé !");
        } else {
            // Sinon, afficher un message d'erreur
            alert(errorMessage || 'Tous les champs sont obligatoires.');
        }
    });

    // Pour les animations au survol des images de la galerie (Zoom effect)
    const galleryImages = document.querySelectorAll(".creations .gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("mouseover", function () {
            img.style.transform = "scale(1.05)";
        });
        img.addEventListener("mouseout", function () {
            img.style.transform = "scale(1)";
        });
    });

    // Animation au clic sur le bouton de contact
    const contactButton = document.querySelector("form button");
    if (contactButton) {
        contactButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Merci de nous avoir contacté !");
            contactButton.style.backgroundColor = "#d35400";
            contactButton.style.transform = "scale(1.1)";
        });
    }
});
