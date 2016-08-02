/*
function fuckyou(){
  var html = document.querySelector("html");
  var screen = html.clientHeight;
  
  var post = document.querySelectorAll(".post");
  for(var i = 0; i<post.length; i++){
    post[i].style.height = screen+"px";
  }
  
  var mq = document.querySelectorAll(".min-quote");
  var mp = document.querySelectorAll(".min-photo");
  for(var o = 0;o<mq.length;o++){
   var ki = screen-mq[o].clientHeight;
   var ik = ki/2;
   mq[o].style.marginTop = ik-20 + "px";
   mq[o].style.marginBottom = ik+20 + "px";
  }
  for(var m = 0;m<mp.length;m++){
   var ui = screen-mp[m].clientHeight;
   var iu = ui/2;
   mp[m].style.marginTop = iu-20 + "px";
   mp[m].style.marginBottom = iu+20 + "px";
  }
}
*/

function setHeight(){
  var html = document.querySelector("html");
  var screen = html.clientHeight;
  var mq = document.querySelectorAll(".min");
  for(var o = 0;o<mq.length;o++){
   var ki = screen-mq[o].clientHeight;
   var ik = ki/2;
   mq[o].style.marginTop = ik-20 + "px";
   mq[o].style.marginBottom = ik+20 + "px";
  }
}