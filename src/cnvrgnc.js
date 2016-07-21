var React = require("react");
var ReactDOM = require("react-dom");
var c1 = require("./components/c1");
var RootComponent = c1.component;

console.log(c1.string);
console.log(c1.childstring);
console.log(c1.chichistring);
console.log("git");


ReactDOM.render(
  <RootComponent />,
  document.getElementById("main")
);

