skillsEl = document.getElementById("skills-list");
var skill = ["HTML", "CSS", "JS", "Microsoft Office"];
var skillsHTML = " ";
for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
  skillsEl.innerHTML = skillsHTML;
}
