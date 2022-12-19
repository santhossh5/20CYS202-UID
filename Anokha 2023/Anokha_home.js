let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function about() {
  document.body.scrollTop = 640;
  document.documentElement.scrollTop = 640;
}

function eventSit() {
  document.body.scrollTop = 1420;
  document.documentElement.scrollTop = 1420;
}

function gallery() {
  document.body.scrollTop = 2480;
  document.documentElement.scrollTop = 2480;
}

function contact() {
  document.body.scrollTop = 3500;
  document.documentElement.scrollTop = 3500;
}