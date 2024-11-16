// Smooth Scroll Functionality
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetID = event.target.getAttribute('href').substring(1);
        document.getElementById(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Footer Year
const footer = document.querySelector('footer p');
footer.textContent = `© ${new Date().getFullYear()} Sooryamol S. All rights reserved.`;
