document.addEventListener("DOMContentLoaded", () => {

  const studentBtn = document.getElementById("studentBtn");
  const facultyBtn = document.getElementById("facultyBtn");

  const studentsSection = document.getElementById("students-section");
  const facultySection = document.getElementById("faculty-section");

  if (!studentBtn || !facultyBtn || !studentsSection || !facultySection) {
    console.error("Team page elements missing");
    return;
  }

  studentBtn.addEventListener("click", () => {
    studentsSection.classList.add("active");
    facultySection.classList.remove("active");

    studentBtn.classList.add("active");
    facultyBtn.classList.remove("active");
  });

  facultyBtn.addEventListener("click", () => {
    facultySection.classList.add("active");
    studentsSection.classList.remove("active");

    facultyBtn.classList.add("active");
    studentBtn.classList.remove("active");
  });

});

let autoScrollActive = true;
let scrollSpeed = 0.3; // VERY slow (increase to 0.5 if you want faster)

function autoScroll() {
  if (!autoScrollActive) return;

  window.scrollBy(0, scrollSpeed);

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    autoScrollActive = false;
    return;
  }

  requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll);

window.addEventListener("wheel", () => autoScrollActive = false, { passive: true });
window.addEventListener("touchstart", () => autoScrollActive = false);
window.addEventListener("keydown", () => autoScrollActive = false);

