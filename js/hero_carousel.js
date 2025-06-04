document.addEventListener("DOMContentLoaded", function() {
    const bgDivs = document.querySelectorAll('.hero-bg-fade');
    const indicators = document.querySelectorAll(".bg-btn-indicator");
    let current = 0;
    let timer;

    function setBg(idx) {
        bgDivs.forEach((div, i) => {
            div.classList.toggle("active", i === idx);
        });
        indicators.forEach((btn, i) => btn.classList.toggle("active", i === idx));
        current = idx;
    }

    indicators.forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            setBg(idx);
            resetTimer();
        });
    });

    function nextBg() {
        setBg((current + 1) % bgDivs.length);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(nextBg, 7000);
    }

    setBg(0);
    timer = setInterval(nextBg, 7000);
});