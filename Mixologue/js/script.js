document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de contact
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name && email && message) {
        alert('Demande envoyée avec succès !');
        form.reset();
      } else {
        alert('Veuillez remplir tous les champs du formulaire.');
      }
    });
  
    // Animation des éléments du portfolio lors du scroll
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const onScroll = () => {
      const windowHeight = window.innerHeight;
      portfolioItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight * 0.8) {
          item.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', onScroll);
    // Vérifie dès le chargement si des éléments sont déjà visibles
    onScroll();
  });