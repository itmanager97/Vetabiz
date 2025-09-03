document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const internalLinks = document.querySelectorAll('.nav-link-internal');
    
    const logoLink = document.querySelector('.logo-link'); 
    
    const allLinks = [...navLinks, ...internalLinks, logoLink];

    const pageSections = document.querySelectorAll('.page-section');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    const showSection = (targetId) => {
        if (!targetId || targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        pageSections.forEach(section => {
            section.classList.remove('active');
        });

        if (targetSection) {
            targetSection.classList.add('active');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });

        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            navbarToggler.click();
        }
        
        window.scrollTo(0, 0);
    };


    allLinks.forEach(link => {

        if (link) { 
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                showSection(targetId);
            });
        }
    });

  
    showSection('#inicio');


    document.getElementById('currentYear').textContent = new Date().getFullYear();
});