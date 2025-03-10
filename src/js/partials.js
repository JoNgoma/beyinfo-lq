document.addEventListener("DOMContentLoaded", () => {
    fetch('../partials/header.html')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('header-container');
        container.innerHTML = html;
        
        const menuToggle = container.querySelector('#menuToggle');
        const mobileMenu = container.querySelector('#mobileMenu');
  
        if (menuToggle && mobileMenu) {
          menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuToggle.classList.toggle('menu-open');
          });
        }
      })
      .catch(error => console.error('Erreur lors du chargement du header:', error));
  });
  