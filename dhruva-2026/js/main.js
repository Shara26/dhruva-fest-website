window.addEventListener("load", () => {
    let scrollSpeed = 0.1;
    let currentScroll = window.pageYOffset;
    let autoScrollActive = true;

    
    function stopAutoScroll() {
        autoScrollActive = false;
    }

    window.addEventListener("wheel", stopAutoScroll, { passive: true });
    window.addEventListener("touchstart", stopAutoScroll);
    window.addEventListener("keydown", stopAutoScroll);

    function autoScroll() {
        if (!autoScrollActive) return;

        currentScroll += scrollSpeed;
        window.scrollTo(0, currentScroll);

        if (currentScroll < document.body.scrollHeight - window.innerHeight) {
            requestAnimationFrame(autoScroll);
        }
    }

    requestAnimationFrame(autoScroll);
});


const dayTabs = document.querySelectorAll(".day-tab");
const eventGrids = document.querySelectorAll(".events-grid");

dayTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        dayTabs.forEach(t => t.classList.remove("active"));
        eventGrids.forEach(grid => grid.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.day).classList.add("active");
    });
});

const scheduleTabs = document.querySelectorAll(".day-tab");
const timelines = document.querySelectorAll(".timeline");

scheduleTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        scheduleTabs.forEach(t => t.classList.remove("active"));
        timelines.forEach(tl => tl.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.day).classList.add("active");
    });
});

