let modal = document.getElementById("miVelo");

let img = document.getElementById("miImg");
let veloImg = document.getElementById("img1");
let captionText = document.getElementById("texto");
let body = document.getElementById("body");
img.onclick = function(){
  modal.style.display = "block";
  veloImg.src = this.src;
  captionText.innerHTML = this.alt;
  body.style += "overflow: none;";
}

let span = document.getElementsByClassName("cerrar")[0];

span.onclick = function() {
  modal.style.display = "none";
}
