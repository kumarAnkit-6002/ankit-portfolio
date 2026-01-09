document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    navbar.style.backgroundColor =
        window.scrollY > 50
        ? 'rgba(10,10,10,0.98)'
        : 'rgba(10,10,10,0.9)';
});
