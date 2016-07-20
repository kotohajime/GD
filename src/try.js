var React = require("react");
var ReactDOM = require("react-dom");

var RootComponent = React.createClass({
  render:function(){
    return(
      <div className="Root">
        <h1>kthjm</h1>
        i do react.
      </div>
    );
  }
});

ReactDOM.render(
  <RootComponent />,
  document.getElementById("main")
);

