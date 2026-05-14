// مصفوفة الأسئلة
const questions = [
    {
        questionText: "ما هو أول شيء يثير فضولك تقنياً؟",
        options: [
            { text: "تصميم الواجهات", path: "UI/UX" },
            { text: "الشبكات", path: "Networks" },
            { text: "بناء التطبيقات", path: "Software" }
        ]
    }
];

// مصفوفة البيانات للمسارات
const pathsData = [
    { title: "البرمجة", info: "أعلى طلب في الأردن ...", color: "var(--cyan)" },
    { title: "البيانات", info: "أقل ازدحاماً ...", color: "var(--emerald)" }
];

// وظيفة عرض الخريطة الذهنية برمجياً
function renderMap() {
    const grid = document.getElementById('map-grid');
    
    pathsData.forEach(path => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.borderTop = `4px solid ${path.color}`;
        card.innerHTML = `
            <h3>${path.title}</h3>
            <p>${path.info}</p>
        `;
        grid.appendChild(card);
    });
}

// تشغيل الدالة فور تحميل الصفحة
window.onload = renderMap;
