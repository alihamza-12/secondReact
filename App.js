import React from "react"
import ReactDOM from "react-dom/client"



// create Element
const heading = React.createElement("div", { id: "parent", xyz: "abc" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    "Hello i am here nested chlid 1",
    React.createElement("h1", { id: "nestedChildh1", key: "nestedChildh1" }, "hi nested child 1"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    "Hello i am here nested chlid 2",
    React.createElement("h1", { id: "nestedChildh2", key: "nestedChildh2" }, "hi nested child 2"),
  ]),
]);

//React Object with the Attribute like id,text etc are childs of that prop
console.log(heading);
// create root
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render that root
root.render(heading);
