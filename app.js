import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "1" }, [
//     React.createElement("h1", {}, "h1 tag from childrens"),
//     React.createElement("h2", {}, "h2 tag from children"),
//   ]),
//   React.createElement("div", { id: "child", key: "2" }, [
//     React.createElement("h1", {}, "h1 tag from children"),
//     React.createElement("h2", {}, "h2 tag from children"),
//   ]),
// ]);

// console.log(parent); // the parent here is not an html its an object and the react is using this object to create an html and render on dom
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); // here

const heading = React.createElement("h2", { id: "heading" }, "hey hello"); // this is how we create element using react (which is an object).
console.log(heading);

// this is jsx, this is element creation using jsx
const jsxHeading = <h1 id="heading"> This is jsx </h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(heading);
