var React = require("react");
var ReactDOM = require("react-dom");

var TumblrRoot = React.createClass({
  render:function(){
    return(
      <div className="root">
        <h1>このページはこれから構築されますね</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <TumblrRoot />,
  document.getElementById("main")
);
