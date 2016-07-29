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

var QuoteComponent = React.createClass({
  render:function(){
    /*
    var parser = new DOMParser();
    var text = parser.parseFromString(this.props.children,"application/xml");
    */
    //↑ReactではDOMParserによる脱文字列処理は行えない。怒られる...。
    //var text = JSON.parse(this.props.children);
    return(
      <div className="quote">
        <div className="min-quote">{this.props.children}</div>
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
          <PhotoComponent type={node.type} url={node["photo-url-500"]} />
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
    });
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
  request.open("GET",blogURL+"page/"+n+"/?format=json",true);
  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      var begining = request.response.search("{");
      var shaveB = request.response.substr(begining);
      var shaveL = shaveB.substr(0,shaveB.length-1);
      var happy = JSON.parse(shaveL);
      console.log(happy);
      for(var i = 0;i<happy.posts.length;i++){
        data.push(happy.posts[i]);
      }
      console.log(data);
      pagenumber++;
      RenderFunc();
    }
  };
  request.send(null);
};
requestFunc(pagenumber);

var button = document.getElementById("update");
button.addEventListener("click",function(){
  requestFunc(pagenumber);
},false);

