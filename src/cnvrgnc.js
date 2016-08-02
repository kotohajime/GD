var React = require("react");
var ReactDOM = require("react-dom");
var screen = document.querySelector("html").clientHeight;
//var timer = false;
var post,prevpost,nextpost;

var setHeight = function(){
  var html = document.querySelector("html");
  var post = document.querySelectorAll(".post");
  var minQ = document.querySelectorAll(".min-quote");
  var min = document.querySelectorAll(".min");
  var screen = html.clientHeight;
  //var main = document.getElementById("main");
  //main.style.marginTop = screen/2-20 + "px";
  for(var i = 0;i<post.length;i++){
    post[i].style.height = screen + "px";
    /*
    var ki = screen-mq[o].clientHeight;
    var ik = ki/2;
    console.log(screen);
    console.log(mq[o].clientHeight);
    console.log(ik);
    mq[o].style.marginTop = ik-20 + "px";
    mq[o].style.marginBottom = ik+20 + "px";
    */
  }
  for(var p = 0;p<min.length;p++){
    var minHeight = min[p].clientHeight;
    min[p].style.top = screen/2-minHeight/2-15 + "px";
  }
  for(var o = 0;o < minQ.length;o++){
    if(minQ[o].kizon){
      console.log("無視するやで");
    }else{
      minQ[o].innerHTML = minQ[o].innerText;
      minQ[o].kizon = true;
    }
  }
};
/*
var setHeight = function(){
  var html = document.querySelector("html");
  var screen = html.clientHeight;
  var post = document.querySelectorAll(".post");
  for(var i = 0; i<post.length; i++){
    post[i].style.height = screen+"px";
  }
  var mq = document.querySelectorAll(".min");
  for(var o = 0;o<mq.length;o++){
  var ki = screen-mq[o].clientHeight;
  var ik = ki/2;
  mq[o].style.paddingTop = ik + "px";
  mq[o].style.paddingBottom = ik + "px";
  }
};

window.onload = setHeight;
*/

var PhotoComponent = React.createClass({
  render:function(){
    var backSrc = {
      backgroundImage : "url("+this.props.children+")"
    };
    return(
      <div className="photo post">
        <div className="min-photo min" style={backSrc} />
      </div>
    );
  }
});

var QuoteComponent = React.createClass({
  render:function(){
    /*
    var parser = new DOMParser();
    var text = parser.parseFromString(this.props.children,"application/xml");
    */
    //↑ReactではDOMParserによる脱文字列処理は行えない。怒られる...。←DOMParser自体がズレてました...。
    //var text = JSON.parse(this.props.children);
    return(
      <div className="quote post">
        <div className="min-quote min">{this.props.children}</div>
      </div>
    );
    //この箇所で「screen」と「このmin自体」にアクセスしないといけない。
  }
});

var PostComponent = React.createClass({
  render:function(){
    return(
      <div className="post" type={this.props.type}>
        {this.props.children}
      </div>
    );
    
  }
});

var TumblrRoot = React.createClass({
  render:function(){
    var postNodes = this.props.data.map(function(node){
      if(node.type == "photo"){
        return(
          <PhotoComponent type={node.type}>
            {node["photo-url-500"]}
          </PhotoComponent>
        );
      }else if(node.type == "quote"){
        return(
          <QuoteComponent type={node.type}>
            {node["quote-text"]}
          </QuoteComponent>
        );
      }else{
        return(
          <PostComponent type={node.type}>
            {node.id}
          </PostComponent>
        );
      }
    });//this.props.screenのthisはこのままではpostNodesになってしまってるかな？
    return(
      <div className="root">
        {postNodes}
      </div>
    );
  }
});

var renderFunc = function(cb){
  ReactDOM.render(
    <TumblrRoot data={data} screen={screen}/>,
    document.getElementById("main")
  );
  cb();
  window.addEventListener("scroll",checkScroll,false);
  post = document.querySelectorAll(".post");
  postGet();
};

var rsc = function(e,cb,cbcb){
  if(e.target.readyState == 4 && e.target.status == 200){
    var begining = e.target.response.search("{");
    var shaveB = e.target.response.substr(begining);
    var shaveL = shaveB.substr(0,shaveB.length-1);
    var happy = JSON.parse(shaveL);
    console.log(happy);
    for(var i = 0;i<happy.posts.length;i++){
      data.push(happy.posts[i]);
    }
    console.log(data);
    pagenumber++;
    cb(cbcb);
    //renderFunc(setHeight);
    
  }else{
    console.log(e.target.readyState);
  }
}

var requestFunc = function(){
  window.removeEventListener("scroll",checkScroll,false);
  var request = new XMLHttpRequest();
  request.open("GET",blogURL+"page/"+pagenumber+"/?format=json",true);
  request.addEventListener("readystatechange",function(e){
    rsc(e,renderFunc,setHeight);
  });
  request.send(null);
};
requestFunc();

var checkScroll = function(){
  if(document.body.scrollHeight-document.body.scrollTop < 3500){
    console.log("更新するで");
    requestFunc();
  }
}
window.addEventListener("scroll",checkScroll,false);


var scrollTimer = false;
var TopTimer = false;


function postGet(){
  if(TopTimer != false){
    clearTimeout(TopTimer);
  }
  TopTimer = setTimeout(function(){
    for(var i = 0;i<post.length;i++){
      if(post[i].offsetTop > window.scrollY+45){
        nextpost = post[i];
        if(post[i-1].offsetTop+100 > window.scrollY){
          prevpost = post[i-2];
        }else{
          prevpost = post[i-1];
        }
        console.log("↓nextpost");
        console.log(nextpost);
        console.log("↓prevpost");
        console.log(prevpost);
        return false;
      }
    }
  },50);
}
window.addEventListener("scroll",postGet,true);

function scrollFunc(e){
  if(e.keyCode == 74){
    if(scrollTimer != false){
      console.log("ちゃんと"+scrollTimer+"になってるやで");
      clearTimeout(scrollTimer);
      for(var i = 0;i<post.length;i++){
        if(post[i].offsetTop > window.scrollY+45){
          nextpost = post[i+1];
          console.log("↓nextpost");
          console.log(nextpost);
          i = post.length + 1;
        }
      }
    }
    if(nextpost === undefined){
      return false;
    }
    var twenty = 0;
    var nowleft = window.scrollX;
    var nowttop = window.scrollY;
    var leftDiff = nextpost.offsetLeft-window.scrollX;
    var topDiff = nextpost.offsetTop-window.scrollY;
    var fnL = leftDiff/20;
    var fnT = topDiff/20;
    var smoothScroll = function(){
      scrollTimer = setTimeout(function(){
        if(twenty == 20){
          console.log("下げ終わり");
          scrollTimer = false;
          console.log("scrollTimerは"+scrollTimer+"だよ");
          return false;
        }
        twenty++;
        window.scroll(window.scrollX+fnL,window.scrollY+fnT);
        smoothScroll();
      },6);
    };
    smoothScroll();
  }else if(e.keyCode == 75){
    if(scrollTimer != false){
      console.log("ちゃんと"+scrollTimer+"になってるやで");
      clearTimeout(scrollTimer);
      for(var i = 0;i<post.length;i++){
        if(post[i].offsetTop > window.scrollY+45){
          prevpost = post[i-2];
          console.log("↓prevpost");
          console.log(prevpost);
          i = post.length + 1;
        }
      }
    }
    if(prevpost === undefined){
      prevpost = post[0];
    }
    var twenty = 0;
    var nowleft = window.scrollX;
    var nowtop = window.scrollY;
    var leftDiff = window.scrollX - prevpost.offsetLeft;
    var topDiiff = window.scrollY - prevpost.offsetTop;
    var fnL = leftDiff/20;
    var fnT = topDiiff/20;
    var smoothScroll = function() {
      scrollTimer = setTimeout(function () {
        if (twenty == 20) {
          console.log("上げ終わり");
          scrollTimer = false;
          console.log("scrollTimerは"+scrollTimer+"だよ");
          return false;
        }
        twenty++;
        window.scroll(window.scrollX-fnL,window.scrollY-fnT);
        smoothScroll();
      }, 6);
    };
    smoothScroll();
  }
}

window.addEventListener("keydown",scrollFunc,false);

/*
var button = document.getElementById("update");
button.addEventListener("click",function(){
  requestFunc();
},false);
*/
