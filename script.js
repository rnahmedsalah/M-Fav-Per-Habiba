window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('password-screen').style.display = 'block';
    }, 1500);
    
    // حساب العداد
    const start = new Date("2026/07/01");
    const now = new Date();
    const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
    document.getElementById('days').innerText = diff;
};

function checkPassword() {
    if (document.getElementById('passInput').value === 'ABO SALAH') {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('bg-music1').play();
        setTimeout(startTypewriter, 1000);
    }
}

function startTypewriter() {
    const text = "من يوم ما دخلتي حياتي وأنا بقيت بشوف الدنيا بشكل مختلف، بقيت أحس إن كل حاجة ليها طعم ومعنى بس علشان إنتِ موجودة. وجودك جنبي بيديني راحة وأمان بطريقة عمري ما حسّيتها قبل كده، وكلامك حتى لو بسيط بيقدر يغير يوم كامل عندي. يمكن مبعرفش أوصف قد إيه أنتي غالية عندي، بس كل اللي أعرفه إنك بقيتي أجمل تفصيلة في حياتي، والشخص الوحيد اللي مهما حصل بفضل أرجعله وأنا مطمن وفرحان 🌹";
    let i = 0;
    const el = document.getElementById('story-paragraph');
    function type() {
        if(i < text.length) { el.innerHTML += text.charAt(i); i++; setTimeout(type, 40); }
    }
    type();
}

function flyAway() {
    const btn = document.getElementById('noBtn');
    btn.style.left = Math.random() * 80 + '%';
    btn.style.top = Math.random() * 80 + '%';
}
