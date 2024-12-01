console.log("console 1")
// Basic interactivity: Form submission and Donation Button
document.getElementById('donateBtn').addEventListener('click', function () {
    // Scroll to the projects section with smooth scroll
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
    });
});
console.log("consol 2")
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    // Reset the form fields
    document.getElementById('contactForm').reset();
});

// Toggle the mobile menu when the hamburger icon is clicked
document.getElementById('hamburgerMenu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerIcon = document.querySelector('.hamburger-menu');

    // Toggle the 'active' class for nav-links to show/hide the menu
    navLinks.classList.toggle('active');

    // Toggle the 'active' class for hamburger to turn into "X"
    hamburgerIcon.classList.toggle('active');
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(function (link) {
    link.addEventListener('click', function () {
        const navLinks = document.querySelector('.nav-links');
        const hamburgerIcon = document.querySelector('.hamburger-menu');

        // Hide the menu by removing 'active' class
        navLinks.classList.remove('active');

        // Revert the hamburger icon to its original state
        hamburgerIcon.classList.remove('active');
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Scroll to the section with a smooth scroll behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("before imae")
// Array of image URLs to cycle through
// Image array
document.addEventListener('DOMContentLoaded', () => {
    // Array of image URLs
    const images = [
        'assets/images/hero section/download 1.png',
        'assets/images/hero section/download 2.png',
        'assets/images/hero section/download 3.png',
        'assets/images/hero section/download 4.png',
    ];

    // Get the hero section element
    const heroSection = document.getElementById('hero');

    // Initialize the current image index
    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        // Set the background image with a smooth transition
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;

        // Update to the next image index, looping back to the start
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Set an interval to change the background every second
    setInterval(changeBackgroundImage, 1000);

    // Set the initial background image
    changeBackgroundImage();
});
