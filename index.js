skillsEl = document.getElementById("skills-list");
var skill = ["HTML", "CSS", "JS", "Microsoft Office"];
var skillsHTML = " ";
for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  skillsEl.innerHTML = skillsHTML;
}

function displayHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}
function displaySkills() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}
function displayLanguages() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "block";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}
function displayCertification() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "block";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}

function displayVolunteering() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "block";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
}

function displayFutureProjects() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("future-projects").style.display = "block";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "none";
}

function displayHobbies() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
  document.getElementById("hobbies").style.display = "block";
  document.getElementById("contact").style.display = "none";
}

function displayContact() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("volunteering").style.display = "none";
  document.getElementById("future-projects").style.display = "none";
  document.getElementById("hobbies").style.display = "none";
  document.getElementById("contact").style.display = "block";
}

displayHome();
