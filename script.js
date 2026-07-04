// تشغيل سريع جداً بمجرد تحميل الصفحة
window.onload = function() {
    const loader = document.getElementById('loading-screen');
    const passScreen = document.getElementById('password-screen');
    
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            if (passScreen) passScreen.style.display = 'block';
        }, 300); // 300 مللي ثانية فقط للسرعة
    }
};

const fullStoryMessage = "من يوم ما دخلتي حياتي وأنا بقيت بشوف الدنيا بشكل مختلف، بقيت أحس إن كل حاجة ليها طعم ومعنى بس علشان إنتِ موجودة. وجودك جنبي بيديني راحة وأمان بطريقة عمري ما حسّيتها قبل كده، وكلامك حتى لو بسيط بيقدر يغير يوم كامل عندي. يمكن مبعرفش أوصف قد إيه أنتي غالية عندي، بس كل اللي أعرفه إنك بقيتي أجمل تفصيلة في حياتي، والشخص الوحيد اللي مهما حصل بفضل أرجعله وأنا مطمن وفرحان 🌹";

function checkPassword() {
    const userInput = document.getElementById('passInput').value;
    if (userInput.toLowerCase() === 'habiba') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        const music = document.getElementById('bg-music');
        music.play().catch(()=>{});
        startTypewriterEffect();
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function startTypewriterEffect() {
    const el = document.getElementById('story-paragraph');
    let i = 0;
    function type() {
        if (i < fullStoryMessage.length) {
            el.innerHTML += fullStoryMessage.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }
    type();
}

function flyAway() {
    const btn = document.getElementById('noBtn');
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 100) + 'px';
}

function acceptLove() {
    document.getElementById('main-content').innerHTML = `<h1>I LOVE YOU TOO HABIBA! 🥰</h1>`;
    setInterval(dropHeart, 100);
}

function dropHeart() {
    const h = document.createElement('div');
    h.className = 'falling-heart';
    h.innerText = '💖';
    h.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}
