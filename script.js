document.addEventListener('DOMContentLoaded', function() {
    // Get all flag icons
    const flagIcons = document.querySelectorAll('.flag-icon');
    const flagContainer = document.querySelector('.flag-container');
    
    // Add click event to flag container to toggle dropdown
    if (flagContainer) {
        flagContainer.addEventListener('click', function(e) {
            // If clicking on a non-active flag, don't toggle the dropdown
            if (e.target.classList.contains('flag-icon') && !e.target.classList.contains('active')) {
                return;
            }
            
            // Toggle the open class
            this.classList.toggle('open');
        });
    }
    
    // Add click event to each flag
    flagIcons.forEach(flag => {
        flag.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            setLanguage(language);
            
            // Save language preference to localStorage
            localStorage.setItem('preferredLanguage', language);
            
            // Close the dropdown after selection
            if (flagContainer) {
                flagContainer.classList.remove('open');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (flagContainer && !flagContainer.contains(e.target)) {
            flagContainer.classList.remove('open');
        }
    });
    
    // Get saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(savedLanguage);
    
    // Toggle command sections if they exist (for commands page)
    const toggles = document.querySelectorAll('.category-toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            // Toggle the content visibility
            if (targetContent) {
                targetContent.classList.toggle('expanded');
                
                // Toggle the arrow icon
                const icon = this.querySelector('.toggle-icon');
                if (icon) {
                    icon.textContent = targetContent.classList.contains('expanded') ? '▼' : '►';
                }
            }
        });
    });
});

function setLanguage(language) {
    // Get all flag icons
    const flagIcons = document.querySelectorAll('.flag-icon');
    
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