window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor = "#262431";
  } else {
    document.getElementById("nav").style.backgroundColor= "transparent";
  }
} 