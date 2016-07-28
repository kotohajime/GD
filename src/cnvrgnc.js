var React = require("react");
var ReactDOM = require("react-dom");

var PhotoComponent = React.createClass({
  render:function(){
    return(
      <div className="photo">
        <img className="min-photo" src={this.props.url} />
      </div>
    );
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
          <PhotoComponent type={node.type} url={node["photo-url-1280"]} />
        );
      }else{
        return(
          <PostComponent type={node.type}>
            {node.id}
          </PostComponent>
        );
      }
    });
    /*
    var postNodes;
    if(this.props.data.type == "photo"){
      postNodes = this.props.data.map(function(node){
        return(
          <PhotoComponent type={node.type} url={node.photo-url-500} />
        );
      });
    }else{
      postNodes = this.props.data.map(function(node){
        return(
          <PostComponent type={node.type}>
            {node.id}
          </PostComponent>
        );
      });
    }*/
    return(
      <div className="root">
        {postNodes}
      </div>
    );
  }
});

var RenderFunc = function(){
  ReactDOM.render(
    <TumblrRoot data={data} />,
    document.getElementById("main")
  );
};

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
      console.log(pagenumber);
      pagenumber++;
      console.log(pagenumber);
      RenderFunc();
    }
  };
  request.send(null);
};
requestFunc(pagenumber);

var button = document.getElementById("update");
console.log(button);
button.addEventListener("click",function(){
  requestFunc(pagenumber);
},false);
