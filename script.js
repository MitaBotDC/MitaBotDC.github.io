document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to main content
    const main = document.querySelector('main');
    main.style.opacity = '0';
    main.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        main.style.opacity = '1';
    }, 100);

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});