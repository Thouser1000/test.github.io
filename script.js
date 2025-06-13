console.log('Script loaded');
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

const translations = {
    th: {
        service : 'ให้บริการปิดบัญชีรายเดือนและปิดงบประจำปี',
        price : 'เริ่มต้นเพียง 2,500 บาทต่อเดือน',
        detail : 'รายละเอียดเพิ่มเติม <a href="price_rate.html">คลิกที่นี่</a>',
        contact : 'หากคุณสนใจในบริการของเราติดต่อง่ายๆได้ที่รูปด้านล่างนี้'
    },
    en: {
        service : 'Monthly and annual account closing services',
        price : 'Starting from only 2,500 Baht per month',
        detail : 'More details <a href="price_rate.html">click here</a>',
        contact : 'If you are interested in our services, please contact us easily at the image below.'
    }
};
// script to toggle between English and Thai languages
function toggleLanguage() {
    console.log('Button clicked, current:', document.getElementById('language-toggle').textContent);
    const btn = document.getElementById('language-toggle');
    if (btn.textContent === 'th') {
        setLanguage('th');
    } else {
        setLanguage('en');
    }
}

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'th' : 'en';
}

// Set button texts on page load
window.onload = function() {
    const themeBtn = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
    setLanguage('th'); // Default to English or set based on your logic
};