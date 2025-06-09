// script to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    if (body.classList.contains('light-theme')) {
        body.className = 'dark-theme';
        btn.textContent = 'Light Mode';
    } else {
        body.className = 'light-theme';
        btn.textContent = 'Dark Mode';
    }
}

const translation ={
    th:{
        
    }
}

// script to toggle between English and Thai languages
function toggleLanguage() {
    const btn = document.getElementById('language-toggle');
    if (btn.textContent === 'EN') {
        btn.textContent = 'TH';
        // Add your language switching logic here (e.g., swap text content)
    } else {
        btn.textContent = 'EN';
        // Add your language switching logic here (e.g., swap text content)
    }
}

// Set button texts on page load
window.onload = function() {
    const themeBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }

    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.textContent = 'EN'; // Default to EN or set based on your logic
    }
};