//alert("PEMBERITAHUAN\nLaman ini dalam tahap pengembangan")

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

function turnOnNav(navOn){
  if(navOn){
    document.body.setAttribute("id", "navigate")
  }
  else{
    document.body.setAttribute("id", "")
  }
}


function kembali() {
  history.back();
}
