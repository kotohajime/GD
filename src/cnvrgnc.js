var React = require("react");
var ReactDOM = require("react-dom");

var TumblrRoot = React.createClass({
  render:function(){
    return(
      <div className="root">
        hi!!
      </div>
    );
  }
});

ReactDOM.render(
  <TumblrRoot />,
  document.getElementById("main")
);
