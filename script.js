// مصفوفة بيانات المسارات (Logic)
const techPaths = [
    { 
        title: "تطوير البرمجيات (Software Development)", 
        info: "يركز على بناء التطبيقات والأنظمة، وهو من أكثر المجالات طلباً.", 
        color: "#00ffff" 
    },
    { 
        title: "الأمن السيبراني (Cybersecurity)", 
        info: "حماية الأنظمة والبيانات من الهجمات الرقمية، مجال حيوي جداً.", 
        color: "#ef4444" 
    },
    { 
        title: "تحليل البيانات (Data Analysis)", 
        info: "استخراج الرؤى من البيانات لدعم اتخاذ القرارات الذكية.", 
        color: "#10b981" 
    },
    { 
        title: "الذكاء الاصطناعي (AI)", 
        info: "بناء أنظمة تحاكي الذكاء البشري لحل المشكلات المعقدة.", 
        color: "#fbbf24" 
    }
];

// وظيفة عرض البيانات برمجياً لضمان Clean Code
function renderCompass() {
    const container = document.getElementById('container-paths');
    
    techPaths.forEach(path => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.borderTop = `5px solid ${path.color}`;
        
        cardElement.innerHTML = `
            <h3>${path.title}</h3>
            <p>${path.info}</p>
        `;
        
        container.appendChild(cardElement);
    });
}

// تشغيل النظام فور جاهزية الصفحة
window.addEventListener('DOMContentLoaded', renderCompass);
