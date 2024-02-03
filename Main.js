document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, div a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const yOffset = -80; 
  
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.links');
  
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.classList.add('open'); 
        } else {
            navMenu.classList.remove('open'); 
        }
    });
  
  
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
           
            menuToggle.checked = false;
            navMenu.classList.remove('open');
  
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
  
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
  });
  