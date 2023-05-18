skillsEl = document.getElementById("skills-list");
var skill = ["HTML", "CSS", "JS", "Microsoft Office"];
var skillsHTML = " ";
for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  skillsEl.innerHTML = skillsHTML;
}

function hideAllPages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}

function displayHome() {
  hideAllPages();
  document.getElementById("home").style.display = "block";
}
function displaySkills() {
  hideAllPages();
  document.getElementById("skills").style.display = "block";
}
function displayLanguages() {
  hideAllPages();
  document.getElementById("languages").style.display = "block";
}
function displayCertification() {
  hideAllPages();
  document.getElementById("certification").style.display = "block";
}

function displayVolunteering() {
  hideAllPages();
  document.getElementById("volunteering").style.display = "block";
}

function displayFutureProjects() {
  hideAllPages();
  document.getElementById("future-projects").style.display = "block";
}

function displayHobbies() {
  hideAllPages();
  document.getElementById("hobbies").style.display = "block";
}

function displayContact() {
  hideAllPages();
  document.getElementById("contact").style.display = "block";
}

displayHome();
