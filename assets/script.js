// ============================
// HAMBURGER MENU TOGGLE
// ============================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ============================
// SMOOTH SCROLLING + CLOSE MENU
// ============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================
// HEADER SCROLL EFFECT
// ============================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================
// SECTION FADE-IN ON SCROLL
// ============================
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// ============================
// CAROUSEL FUNCTIONALITY
// ============================
const carousels = {
    'regular': { current: 0, id: 'regular-carousel', interval: setInterval(() => moveSlide('regular', 1), 5000) },
    'premium': { current: 0, id: 'premium-carousel', interval: setInterval(() => moveSlide('premium', 1), 5000) },
    'exclusive': { current: 0, id: 'exclusive-carousel', interval: setInterval(() => moveSlide('exclusive', 1), 5000) },
    'testimonials': { current: 0, id: 'testimonials-carousel', interval: setInterval(() => moveSlide('testimonials', 1), 7000) }
};

function moveSlide(section, direction) {
    const carousel = carousels[section];
    const slides = document.getElementById(carousel.id).children;
    const totalSlides = slides.length;

    carousel.current += direction;

    if (carousel.current >= totalSlides) {
        carousel.current = 0;
    } else if (carousel.current < 0) {
        carousel.current = totalSlides - 1;
    }

    const offset = -carousel.current * 100;
    document.getElementById(carousel.id).style.transform = `translateX(${offset}%)`;
}
