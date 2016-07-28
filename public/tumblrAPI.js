var reactSrc = "http://static.tumblr.com/d1rkenh/xWLoayya4/rumblr.js";

var requestFunc = function(n){
  var request = new XMLHttpRequest();
  request.open("GET",blogURL+"page/"+pagenumber+"/?format=json",true);
  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      var begining = request.response.search("{");
      var shaveB = request.response.substr(begining);
      var shaveL = shaveB.substr(0,shaveB.length-1);
      var happy = JSON.parse(shaveL);
      for(var i = 0;i<happy.posts.length;i++){
        data.push(happy.posts[i]);
      }
      console.log(data);
      var body = document.body;
      var scr = document.createElement("script");
      scr.src = reactSrc;
      scr.id = "number"+pagenumber;
      body.appendChild(scr);
      pagenumber++;
      console.log(pagenumber);
    }
  };
  request.send(null);
};

requestFunc(pagenumber);

var html = document.querySelector("html");
var body = document.querySelector("body");
