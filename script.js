document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');

    if (mobileMenuBtn && navbarMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('is-active');
            navbarMenu.classList.toggle('active');
        });

        // Close mobile menu when a nav link is clicked
        const navLinks = document.querySelectorAll('.navbar__links');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('is-active');
                navbarMenu.classList.remove('active');
            });
        });
    }

    // Navbar Scroll Shadow
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // FAQ Accordion
    const faqs = document.querySelectorAll('.faq-question');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active');
            const answer = faq.nextElementSibling;
            if (faq.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // Scroll-to-Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '&uarr;';
    scrollTopBtn.className = 'scroll-top';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Automatically set active navigation link based on current page URL if not explicitly set
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const allNavLinks = document.querySelectorAll('.navbar__links');

    allNavLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref) {
            const pageName = linkHref.split('/').pop();
            if (pageName === currentPath || (currentPath === '' && pageName === 'index.html')) {
                link.classList.add('active');
            }
        }
    });

    // Handle Contact Form Submission with Validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = contactForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value && !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                return;
            }
            alert('Thank you for reaching out to Mthethweni Farming! We have received your message and will get back to you shortly.');
            contactForm.reset();
        });
    }

    // IntersectionObserver - animate cards when they scroll into view
    if ('IntersectionObserver' in window) {
        const animatables = document.querySelectorAll(
            '.card, .feature-card, .service-card, .about-card, .contact-card, .faq-item, .process-step, .owner'
        );

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger animation slightly for each card
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, i * 80);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        animatables.forEach(el => cardObserver.observe(el));
    } else {
        // Fallback: just show all cards for browsers without IntersectionObserver
        document.querySelectorAll(
            '.card, .feature-card, .service-card, .about-card, .contact-card, .faq-item, .process-step, .owner'
        ).forEach(el => el.classList.add('animate-in'));
    }
});
