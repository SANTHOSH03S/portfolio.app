//.................about navbar function.................////

function show_list() {
  document.getElementById("ul").style.display = "block";
  document.getElementById("show-list").style.display = "none";
  document.getElementById("close-list").style.display = "block";
  document.getElementById("skill").style.display = "none";
  document.getElementById("project-btn").style.display = "none";
}
function close_list() {
  document.getElementById("ul").style.display = "none";
  document.getElementById("show-list").style.display = "block";
  document.getElementById("close-list").style.display = "none";
  document.getElementById("skill").style.display = "block";
  document.getElementById("skill").style.display = "flex";
  document.getElementById("education").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById('edu-button').style.display="none";
  document.getElementById('project-button').style.display="none";
  document.getElementById('certification-button').style.display="none";
}


////...................education function.....////
function education() {
  document.getElementById("education").style.display = "block";
  document.getElementById("education").style.display = "flex";
  document.getElementById("ul").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("project-button").style.display = "none";
  document.getElementById("edu-button").style.display = "block";
  document.getElementById("certification-button").style.display = "none";
}
function edu_button() {
  document.getElementById("ul").style.display = "block";
  document.getElementById("ul").style.display = "flex";
  document.getElementById("skill").style.display = "block";
  document.getElementById("education").style.display = "none";
  document.getElementById("skill").style.display = "flex";
  document.getElementById("certification-button").style.display = "block";
}

/////......................project function................./////
function project() {
  document.getElementById("project").style.display = "block";
  document.getElementById("ul").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("certification").style.display = "none";
  document.getElementById("edu-button").style.display = "none";
  document.getElementById("project-button").style.display = "block";
  document.getElementById("certification-button").style.display = "none";
}
function project_button() {
  document.getElementById("ul").style.display = "none";
  document.getElementById("ul").style.display = "flex";
  document.getElementById("skill").style.display = "block";
  document.getElementById("skill").style.display = "flex";
  document.getElementById("project").style.display = "none";
  document.getElementById("certification-button").style.display = "block";
}

////////...................certification function...........////

function certification() {
  document.getElementById("ul").style.display = "none";
  document.getElementById("certification").style.display = "block";
  document.getElementById("certification").style.display = "flex";
  document.getElementById("skill").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("project").style.display = "none";
  document.getElementById("edu-button").style.display = "none";
  document.getElementById("project-button").style.display = "none";
}
function certification_button() {
  document.getElementById("ul").style.display = "none";
  document.getElementById("ul").style.display = "flex";
  document.getElementById("skill").style.display = "block";
  document.getElementById("skill").style.display = "flex";
  document.getElementById("certification").style.display = "none";
  document.getElementById("certification-button").style.display = "block";
}
