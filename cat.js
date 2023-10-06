///////first fun////

function onMode() {
  document.getElementById("bulbImg").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImg").src = "image/cat-img.png";
  document.getElementById("onSwitch").style.backgroundColor = "green";
  document.getElementById("switchOn").textContent = "Switch On";
  document.getElementById("offSwitch").style.backgroundColor = "red";
}

////////second func//////////
function offMode() {
  document.getElementById("bulbImg").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImg").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("offSwitch").style.backgroundColor = "green";
  
  document.getElementById("switchOn").textContent = "Switch Off";
  document.getElementById("onSwitch").style.backgroundColor = "red";
}
