// top nav bar
function topNav() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


  if (document.getElementById('blink')) {
    setInterval(function() {
      var blink = document.getElementById('blink');
        blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
    }, 1500)
  }