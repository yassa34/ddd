// بيانات الدول
const countriesData = {
    "مصر": {
        flag: "🇪🇬",
        المساحة: "1,002,000 كم²",
        السكان: "104 مليون نسمة",
        العملة: "الجنيه المصري",
        ترتيب_البنية_التحتية: "115 عالمياً",
        سرعة_الإنترنت: "8.5 Mbps",
        الاتصالات: "4G متاح في معظم المناطق",
        الأماكن_السياحية: "أهرامات الجيزة، معابد الأقصر، البحر الأحمر، النيل",
        أفضل_وقت_للسياحة: "أكتوبر - أبريل"
    },
    "السعودية": {
        flag: "🇸🇦",
        المساحة: "2,149,690 كم²",
        السكان: "34 مليون نسمة",
        العملة: "الريال السعودي",
        ترتيب_البنية_التحتية: "28 عالمياً",
        سرعة_الإنترنت: "20 Mbps",
        الاتصالات: "5G في المدن الكبرى",
        الأماكن_السياحية: "مكة المكرمة، المدينة المنورة، العلا، رياض الثقافة",
        أفضل_وقت_للسياحة: "نوفمبر - مارس"
    },
    "الإمارات": {
        flag: "🇦🇪",
        المساحة: "83,600 كم²",
        السكان: "9.9 مليون نسمة",
        العملة: "الدرهم الإماراتي",
        ترتيب_البنية_التحتية: "2 عالمياً",
        سرعة_الإنترنت: "45 Mbps",
        الاتصالات: "5G متقدم",
        الأماكن_السياحية: "برج خليفة، جزيرة النخيل، دبي مول، صحراء دبي",
        أفضل_وقت_للسياحة: "نوفمبر - مارس"
    },
    "تركيا": {
        flag: "🇹🇷",
        المساحة: "783,562 كم²",
        السكان: "85 مليون نسمة",
        العملة: "الليرة التركية",
        ترتيب_البنية_التحتية: "49 عالمياً",
        سرعة_الإنترنت: "18 Mbps",
        الاتصالات: "4G/5G جيد",
        الأماكن_السياحية: "اسطنبول، كابادوكيا، الشواطئ الفيروزية، أنقرة",
        أفضل_وقت_للسياحة: "أبريل - أكتوبر"
    },
    "فرنسا": {
        flag: "🇫🇷",
        المساحة: "643,801 كم²",
        السكان: "67 مليون نسمة",
        العملة: "اليورو",
        ترتيب_البنية_التحتية: "9 عالمياً",
        سرعة_الإنترنت: "30 Mbps",
        الاتصالات: "4G/5G ممتاز",
        الأماكن_السياحية: "برج إيفل، متحف اللوفر، قصر فرساي، نوتردام",
        أفضل_وقت_للسياحة: "مايو - سبتمبر"
    },
    "إيطاليا": {
        flag: "🇮🇹",
        المساحة: "301,340 كم²",
        السكان: "59 مليون نسمة",
        العملة: "اليورو",
        ترتيب_البنية_التحتية: "8 عالمياً",
        سرعة_الإنترنت: "28 Mbps",
        الاتصالات: "4G/5G جيد",
        الأماكن_السياحية: "روما، البندقية، فلورنسا، ساحل أمالفي",
        أفضل_وقت_للسياحة: "أبريل - أكتوبر"
    },
    "اليونان": {
        flag: "🇬🇷",
        المساحة: "131,957 كم²",
        السكان: "10.7 مليون نسمة",
        العملة: "اليورو",
        ترتيب_البنية_التحتية: "33 عالمياً",
        سرعة_الإنترنت: "22 Mbps",
        الاتصالات: "4G جيد",
        الأماكن_السياحية: "أثينا، سانتوريني، ميكونوس، جزيرة كريت",
        أفضل_وقت_للسياحة: "مايو - سبتمبر"
    },
    "اليابان": {
        flag: "🇯🇵",
        المساحة: "377,975 كم²",
        السكان: "125 مليون نسمة",
        العملة: "الين الياباني",
        ترتيب_البنية_التحتية: "4 عالمياً",
        سرعة_الإنترنت: "50 Mbps",
        الاتصالات: "5G متقدم",
        الأماكن_السياحية: "طوكيو، معبد فوشيمي، جبل فوجي، كيوتو",
        أفضل_وقت_للسياحة: "مارس - مايو وسبتمبر - نوفمبر"
    }
};

// ملء القائمة المنسدلة
window.addEventListener('DOMContentLoaded', function() {
    const country1Select = document.getElementById('country1');
    const country2Select = document.getElementById('country2');

    Object.keys(countriesData).forEach(country => {
        const option1 = document.createElement('option');
        option1.value = country;
        option1.textContent = country;
        country1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = country;
        option2.textContent = country;
        country2Select.appendChild(option2);
    });
});

// دالة المقارنة
function compareCountries() {
    const country1 = document.getElementById('country1').value;
    const country2 = document.getElementById('country2').value;
    const comparisonDiv = document.getElementById('comparison');

    if (!country1 || !country2) {
        comparisonDiv.innerHTML = '<p style="text-align: center; color: red;">⚠️ يرجى اختيار دولتين</p>';
        return;
    }

    if (country1 === country2) {
        comparisonDiv.innerHTML = '<p style="text-align: center; color: red;">⚠️ اختر دولتين مختلفتين</p>';
        return;
    }

    const data1 = countriesData[country1];
    const data2 = countriesData[country2];

    let html = '<div class="comparison-title"><h2>نتائج المقارنة</h2></div>';

    // البطاقة الأولى
    html += `
        <div class="country-card">
            <h2>${data1.flag} ${country1}</h2>
            <div class="info-item">
                <strong>📍 المساحة:</strong>
                <p>${data1.المساحة}</p>
            </div>
            <div class="info-item">
                <strong>👥 السكان:</strong>
                <p>${data1.السكان}</p>
            </div>
            <div class="info-item">
                <strong>💱 العملة:</strong>
                <p>${data1.العملة}</p>
            </div>
            <div class="info-item">
                <strong>🏗️ ترتيب البنية التحتية:</strong>
                <p>${data1.ترتيب_البنية_التحتية}</p>
            </div>
            <div class="info-item">
                <strong>🌐 سرعة الإنترنت:</strong>
                <p>${data1.سرعة_الإنترنت}</p>
            </div>
            <div class="info-item">
                <strong>📱 الاتصالات:</strong>
                <p>${data1.الاتصالات}</p>
            </div>
            <div class="info-item">
                <strong>🎭 الأماكن السياحية:</strong>
                <p>${data1.الأماكن_السياحية}</p>
            </div>
            <div class="info-item">
                <strong>🗓️ أفضل وقت للسياحة:</strong>
                <p>${data1.أفضل_وقت_للسياحة}</p>
            </div>
        </div>
    `;

    // البطاقة الثانية
    html += `
        <div class="country-card">
            <h2>${data2.flag} ${country2}</h2>
            <div class="info-item">
                <strong>📍 المساحة:</strong>
                <p>${data2.المساحة}</p>
            </div>
            <div class="info-item">
                <strong>👥 السكان:</strong>
                <p>${data2.السكان}</p>
            </div>
            <div class="info-item">
                <strong>💱 العملة:</strong>
                <p>${data2.العملة}</p>
            </div>
            <div class="info-item">
                <strong>🏗️ ترتيب البنية التحتية:</strong>
                <p>${data2.ترتيب_البنية_التحتية}</p>
            </div>
            <div class="info-item">
                <strong>🌐 سرعة الإنترنت:</strong>
                <p>${data2.سرعة_الإنترنت}</p>
            </div>
            <div class="info-item">
                <strong>📱 الاتصالات:</strong>
                <p>${data2.الاتصالات}</p>
            </div>
            <div class="info-item">
                <strong>🎭 الأماكن السياحية:</strong>
                <p>${data2.الأماكن_السياحية}</p>
            </div>
            <div class="info-item">
                <strong>🗓️ أفضل وقت للسياحة:</strong>
                <p>${data2.أفضل_وقت_للسياحة}</p>
            </div>
        </div>
    `;

    comparisonDiv.innerHTML = html;
}