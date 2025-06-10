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
    TH: {
        service: 'ให้บริการปิดบัญชีรายเดือนและปิดงบประจำปี',
        price: 'เริ่มต้นเพียง 2,500 บาทต่อเดือน',
        detail: 'รายละเอียดเพิ่มเติม <a href="price_rate.html">คลิกที่นี่</a>',
        contact: 'หากคุณสนใจในบริการของเราติดต่อง่ายๆได้ที่รูปด้านล่างนี้'
    },
    EN: {
        service: 'Monthly and annual account closing services',
        price: 'Starting from only 2,500 Baht per month',
        detail: 'More details <a href="price_rate.html">click here</a>',
        contact: 'If you are interested in our services, please contact us easily at the image below.'
    }
};

// script to toggle between English and Thai languages
function toggleLanguage() {
    console.log('Language button clicked');
    const btn = document.getElementById('language-toggle');
    if (btn.textContent === 'TH') {
        setLanguage('EN');
    } else {
        btn.textContent = 'TH';
        setLanguage('TH');
    }
}

function setLanguage(lang) {
    for (const id in translations[lang]) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = translations[lang][id];
    }
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) langBtn.textContent = lang === 'EN' ? 'TH' : 'EN';
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