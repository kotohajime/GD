

var React = require("react");
var ReactDOM = require("react-dom");

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
      return(
        <PostComponent type={node.type}>
          {node.id}
        </PostComponent>
      );
    });
    return(
      <div className="root">
        {postNodes}
      </div>
    );
  }
});

ReactDOM.render(
  <TumblrRoot data={data} />,
  document.getElementById("main")
);
