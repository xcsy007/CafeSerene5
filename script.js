// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Product hover animations
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Sign In Modal
const signInBtn = document.querySelector('.btn.btn-secondary'); // Assuming first secondary button is Sign In
const signInModal = document.getElementById('signin-modal');
const signInClose = signInModal.querySelector('.close');

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signInModal.style.display = 'block';
});

signInClose.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

// Order Online Modal
const orderBtn = document.querySelector('.btn.btn-primary'); // Assuming first primary button is Order Online
const orderModal = document.getElementById('order-modal');
const orderClose = orderModal.querySelector('.close');

orderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    orderModal.style.display = 'block';
});

orderClose.addEventListener('click', () => {
    orderModal.style.display = 'none';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === signInModal) signInModal.style.display = 'none';
    if (e.target === orderModal) orderModal.style.display = 'none';
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('header nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('show');
});

