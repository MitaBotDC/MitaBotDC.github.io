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
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Language switcher functionality with flag icons
    const flagIcons = document.querySelectorAll('.flag-icon');
    
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }
    
    // Add click event to flag icons
    flagIcons.forEach(flag => {
        flag.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            setLanguage(language);
            localStorage.setItem('language', language);
        });
    });
    
    function setLanguage(language) {
        // Update active flag
        flagIcons.forEach(flag => {
            if (flag.getAttribute('data-lang') === language) {
                flag.classList.add('active');
            } else {
                flag.classList.remove('active');
            }
        });
        
        // Show/hide elements based on language
        document.querySelectorAll('.lang-en, .lang-tr').forEach(element => {
            element.classList.add('hidden');
        });
        
        document.querySelectorAll('.lang-' + language).forEach(element => {
            element.classList.remove('hidden');
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = language;
    }
});