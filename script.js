// DecesosIA - Editorial Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations with Intersection Observer
    const animateElements = document.querySelectorAll('.animate-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animations within the same section
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add stagger delay to elements
    animateElements.forEach((el, index) => {
        // Find siblings to create stagger effect
        const parent = el.parentElement;
        const siblings = parent.querySelectorAll('.animate-in');
        const siblingIndex = Array.from(siblings).indexOf(el);
        el.dataset.delay = siblingIndex;
        observer.observe(el);
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect on hero (subtle)
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    if (hero && heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = hero.offsetHeight;

            if (scrolled < heroHeight) {
                const opacity = 1 - (scrolled / heroHeight) * 0.5;
                const translateY = scrolled * 0.3;
                heroContent.style.opacity = opacity;
                heroContent.style.transform = `translateY(${translateY}px)`;
            }
        }, { passive: true });
    }

    // Animate hero elements on load
    setTimeout(() => {
        document.querySelectorAll('.hero .animate-in').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 150);
        });
    }, 100);
});
