let lastKonwnScrollPosition = 0;
let tinking = false;

function doSomething(scrollPos){
  
}
document.addEventListener('scroll', function(e) {
  lastKonwnScrollPosition = window.scrollY;

  if (!tinking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKonwnScrollPosition);
      tinking = false;
    });
    tinking = true;
  }
}); 
