// إخفاء شاشة التحميل البدائية بعد ثانيتين بشكل إجباري وقاطع
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById('loading-screen');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(function() {
                loader.style.display = 'none';
                // إظهار صفحة كلمة السر بأمان وبسرعة
                var passScreen = document.getElementById('password-screen');
                if (passScreen) {
                    passScreen.style.display = 'block';
                }
            }, 500);
        }
    }, 2000);
});

// الرسالة الخاصة بك المدمجة بالكامل
const fullStoryMessage = "من يوم ما دخلتي حياتي وأنا بقيت بشوف الدنيا بشكل مختلف، بقيت أحس إن كل حاجة ليها طعم ومعنى بس علشان إنتِ موجودة. وجودك جنبي بيديني راحة وأمان بطريقة عمري ما حسّيتها قبل كده، وكلامك حتى لو بسيط بيقدر يغير يوم كامل عندي. يمكن مبعرفش أوصف قد إيه أنتي غالية عندي، بس كل اللي أعرفه إنك بقيتي أجمل تفصيلة في حياتي، والشخص الوحيد اللي مهما حصل بفضل أرجعله وأنا مطمن وفرحان 🌹";

// فحص الباسورد (الباسورد الصحيح والوحيد هو Habiba)
function checkPassword() {
    const userInput = document.getElementById('passInput').value;
    const errorMsg = document.getElementById('error-msg');
    
    if (userInput.toLowerCase() === 'habiba') {
        // إخفاء صفحة الباسورد وإظهار صفحة المحتوى والرسالة
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        
        // 🎵 تشغيل الأغنية السريعة تلقائياً
        const music = document.getElementById('bg-music');
        if (music) {
            music.play().catch(function(error) {
                console.log("المتصفح يحتاج ضغطة لتشغيل الصوت وبما أنها ضغطت ستعمل.");
            });
        }

        // تشغيل تأثير الكتابة التدريجية للرسالة
        startTypewriterEffect();
    } else {
        errorMsg.style.display = 'block';
    }
}

// دالة الآلة الكاتبة للظهور التدريجي
function startTypewriterEffect() {
    const paragraphElement = document.getElementById('story-paragraph');
    let index = 0;
    
    function typeChar() {
        if (index < fullStoryMessage.length) {
            paragraphElement.innerHTML += fullStoryMessage.charAt(index);
            index++;
            setTimeout(typeChar, 40);
        }
    }
    typeChar();
}

// هروب زر NO بذكاء وسرعة فائقة
function flyAway() {
    const noBtn = document.getElementById('noBtn');
    const maxX = window.innerWidth - noBtn.offsetWidth - 40;
    const maxY = window.innerHeight - noBtn.offsetHeight - 40;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    document.getElementById('warning').innerText = "تؤتؤ.. مش هتعرفي تضغطي عليه يا حبيبة! 😜";
}

// عند الضغط على YES والموافقة النهائية
function acceptLove() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
        <div class="main-heart">🎉💖</div>
        <h1 class="title">تم فتح الرسالة بالكامل 💖</h1>
        <p class="subtitle" style="font-size: 24px;">I LOVE YOU TOO HABIBA! 🥰👀💗</p>
        <p class="hint">الموقع منور بوجودك يا أجمل تفصيلة في العمر كله ✨</p>
    `;
    
    setInterval(dropHeart, 100);
}

// تأثير تساقط القلوب
function dropHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    const heartsArray = ['❤️', '💖', '💕', '✨', '🌸', '🌹'];
    heart.innerText = heartsArray[Math.floor(Math.random() * heartsArray.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's';
    heart.style.fontSize = Math.random() * 15 + 15 + 'px';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 4000);
}

// تبديل الوضع المظلم والمضيء
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const themeBtn = document.getElementById('theme-toggle');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeBtn.innerText = "🌙 Dark";
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "☀️ Light";
    }
}

// التحكم اليدوي بالصوت
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    if (music.paused) {
        music.play();
        musicBtn.innerText = "🔊";
    } else {
        music.pause();
        musicBtn.innerText = "🔇";
    }
}
