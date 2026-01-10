function startCountdown(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "🎉 Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}


const mehfilDate = new Date("January 28, 2026 18:00:00").getTime();
const flashMobDate = new Date("January 29, 2026 12:00:00").getTime();

startCountdown(mehfilDate, "mehfil-timer");
startCountdown(flashMobDate, "flashmob-timer");
