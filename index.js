var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Microsoft Office"];

var skillsHTML = "";
var i = 0;

for (var i = 0; i < skills.lenght; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;
