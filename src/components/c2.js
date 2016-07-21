var React = require("react");
var c3 = require("./c3");
var SecondChild = c3.component;
var childstring = c3.string;

var FirstChild = React.createClass({
  render:function(){
    return(
      <div className="fuck">
        <SecondChild />
        <SecondChild />
        <SecondChild />
        <SecondChild />
        <SecondChild />
      </div>
    );
  }
});

module.exports = {
  component : FirstChild,
  string : "わたしはc2から来ました",
  childstring : childstring
};
