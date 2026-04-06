// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const targetSection = targetId.startsWith('#') ? document.querySelector(targetId) : null;
        
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button smooth scroll
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Typing Animation for Hero Title
const heroTitle = document.querySelector('.hero-title');
const textOptions = [
    "Digital Experiences, Built Better.",
    "Quality Experiences, Every Time.",
    "From Blocky Worlds to Seamless Digital Lives."
];

// Ensure the animation starts with an empty hero title
heroTitle.textContent = '';

let currentIndex = 0;
let isDeleting = false;
let charIndex = 0;
let typingSpeed = 80;
let deletingSpeed = 50;
let displayDuration = 3500; // 3.5 seconds

function typeEffect() {
    const currentText = textOptions[currentIndex];
    
    if (!isDeleting) {
        // Typing phase
        if (charIndex < currentText.length) {
            heroTitle.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Text is fully typed, wait before deleting
            isDeleting = true;
            setTimeout(typeEffect, displayDuration);
        }
    } else {
        // Deleting phase
        if (charIndex > 0) {
            heroTitle.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            // Move to next text option
            isDeleting = false;
            currentIndex = (currentIndex + 1) % textOptions.length;
            setTimeout(typeEffect, 200);
        }
    }
}

// Start typing animation
typeEffect();

// Form submission handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Rate limiting constants
const MAX_EMAILS_PER_DAY = 2;
const RATE_LIMIT_KEY = 'emailRateLimit';

function getRateLimitData() {
    const today = new Date().toDateString();
    const data = JSON.parse(localStorage.getItem(RATE_LIMIT_KEY));
    
    if (data && data.date === today) {
        return data;
    } else {
        return { date: today, count: 0 };
    }
}

function updateRateLimitData(count) {
    const today = new Date().toDateString();
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ date: today, count: count }));
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check rate limit
    const rateLimitData = getRateLimitData();
    if (rateLimitData.count >= MAX_EMAILS_PER_DAY) {
        showMessage(`You've reached the maximum of ${MAX_EMAILS_PER_DAY} emails for today. Please try again tomorrow.`, 'error');
        return;
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Send email using EmailJS
    emailjs.init('9FdKnA1wkl__XYj_8'); // Replace with your EmailJS public key

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: '7exert@gmail.com'
    };

    emailjs.send('service_4w7jjwo', 'template_z918495', templateParams) // Replace with your service and template IDs
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            contactForm.reset();
            updateRateLimitData(rateLimitData.count + 1);
            showSuccessPopup();
        }, (error) => {
            console.log('FAILED...', error);
            showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
        });
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.add('show', type);
    
    // Remove previous type class
    if (type === 'success') {
        formMessage.classList.remove('error');
    } else {
        formMessage.classList.remove('success');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessPopup() {
    const successPopup = document.getElementById('successPopup');
    successPopup.classList.add('show');
    
    setTimeout(() => {
        successPopup.classList.remove('show');
    }, 3000);
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for scroll animation
const cards = document.querySelectorAll('.skill-card, .project-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active nav link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Load animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
