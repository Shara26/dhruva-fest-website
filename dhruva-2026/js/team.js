const teamData = {
  "Dhruva Coordinator": [
    "Rushikesh Patil"
  ],

  "Cultural Coordinator": [
    "Aishwarya Kokate",
    "Abhishek Patil"
  ],

  "Technical Coordinator": [
    "Atharva Hegade",
    "Rajat Kulkarni"
  ],

  "Finance Coordinator": [
    "Kalash Malge"
  ],

  "Sponsorship Coordinator": [
    "Ninad Waskar",
    "Padmavati Koppad"
  ],

  "Anchoring Coordinator": [
    "Om Talape",
    "Kaveri Gavare"
  ],

  "Decoration": [
    "Pratiksha Sathe",
    "Ketan Kabade"
  ],

  "Stage Management": [
    "Daresh Andholkar"
  ],

  "Graphics": [
    "Atharva Tidke"
  ],

  "Advertisement / Social Media": [
    "Abhijeet Shinde",
    "Vipul Patil"
  ],

  "Discipline": [
    "Sanchit Rathod"
  ],

  "Stall Management": [
    "Ruturaj Vichare"
  ]
};

const container = document.getElementById("team-content");

for (const role in teamData) {
    const section = document.createElement("div");
    section.className = "team-role";

    let html = `<h2>${role}</h2>`;
    teamData[role].forEach(name => {
        html += `<p>${name}</p>`;
    });

    section.innerHTML = html;
    container.appendChild(section);
}

document.getElementById("studentBtn")?.addEventListener("click", () => {
    document.getElementById("team-content").scrollIntoView({
        behavior: "smooth"
    });
});
