var post = document.querySelectorAll(".post");
var scrollNumber = 0;
function sc(e){
 if(e.keyCode == 74){
  scrollNumber++;
  window.scrollTo(post[scrollNumber].offsetLeft,post[scrollNumber].offsetTop);
 }else if(e.keyCode == 75){
  scrollNumber--;
  window.scrollTo(post[scrollNumber].offsetLeft,post[scrollNumber].offsetTop);
 }
}

window.addEventListener("keydown",sc,false);