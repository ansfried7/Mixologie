document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupérer les valeurs des champs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Vérification que tous les champs sont remplis
        if (name && email && message) {
            alert('Demande envoyée avec succès !');
            form.reset(); // Réinitialise le formulaire après soumission
        } else {
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});

 // Fonction pour détecter la visibilité des éléments dans la fenêtre
window.addEventListener('scroll', function() {
    var items = document.querySelectorAll('.portfolio-item');
    var windowHeight = window.innerHeight;
    
    items.forEach(function(item) {
        var itemPosition = item.getBoundingClientRect().top;
        
        // Si l'élément est visible dans la fenêtre
        if (itemPosition < windowHeight * 0.8) { // L'élément devient visible quand il est à 80% de la hauteur de la fenêtre
            item.classList.add('visible');
        }
    });
});

