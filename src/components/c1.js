var React = require("react");
var c2 = require("./c2");
var FirstChild = c2.component;
var childstring = c2.string;
var chichistring = c2.childstring;

var RootComponent = React.createClass({
  render:function(){
    return(
      <div className="Root">
        <h1>kthjm</h1>
        <FirstChild />
        <FirstChild />
        <FirstChild />
        <FirstChild />
        <FirstChild />
        <FirstChild />
        <FirstChild />
      </div>
    );
  }
});

module.exports = {
  component : RootComponent,
  string : "わたしはc1から来ました",
  childstring : childstring,
  chichistring : chichistring
};