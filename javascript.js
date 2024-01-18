//..............portfolio navbar function...........//
function show_list() {
  document.getElementById("nav-ul").style.display = "block";
  document.getElementById("show-list").style.display = "none";
  document.getElementById("close-list").style.display = "block";
}
function close_list() {
  document.getElementById("nav-ul").style.display = "none";
  document.getElementById("show-list").style.display = "block";
  document.getElementById("close-list").style.display = "none";
}
///.................navigate about.............///
function about() {
  window.location.href = "about.html";
}

///.................home function................////

function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("close-list").style.display = "none";
  document.getElementById("show-list").style.display = "block";
  
}

/////.................portfolio function ............/////
function portfolio() {
  document.getElementById("portfolio").style.display = "block";
  document.getElementById("portfolio").style.display = "flex";
  document.getElementById("home").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("nav-ul").style.display = "none";
  document.getElementById("close-list").style.display = "none";
  document.getElementById("show-list").style.display = "block";
}

function portfolio_button() {
  document.getElementById("nav-ul").style.display = "block";
  document.getElementById("home").style.display = "block";
  document.getElementById("contact").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
}

/////.................contact function.................////
function contact() {
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
  document.getElementById("nav-ul").style.display = "none";
  document.getElementById("close-list").style.display = "none";
  document.getElementById("show-list").style.display = "block";
}
function contact_button() {
  document.getElementById("nav-ul").style.display = "block";
  document.getElementById("home").style.display = "block";
  document.getElementById("contact").style.display = "none";
  document.getElementById("portfolio").style.display = "none";
}

function hide(){
  document.getElementById("nav-ul").style.display = "none";
  document.getElementById("close-list").style.display = "none";
  document.getElementById("show-list").style.display = "block";
}
