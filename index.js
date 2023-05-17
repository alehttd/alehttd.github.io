var skillsEl = document.getElementById("skills-list");

// skillsEl.innerHTML += '<li class="favorite">HTML</li>';
// skillsEl.innerHTML += '<li class="favorite">CSS</li>';
// skillsEl.innerHTML += '<li class="favorite">JS</li>';
// skillsEl.innerHTML += '<li class="favorite">Microsoft Office</li>';

var skills = ["HTML", "CSS", "JS", "Microsoft Office"];
// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[3] + "</li>";

var skillsHTML = "";
var i = 0;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;
// skillsHTML += "<li>" + skills[i] + "</li>";
// i++;

for (var i = 0; i < skills.lenght; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;
