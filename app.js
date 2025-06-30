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

// React Element
// const heading = React.createElement("h2", { id: "heading" }, "hey hello"); // * this is how we create element using react (which is an object).

// // this is jsx, this is element creation using jsx
// // * React Element
// const jsxHeading = <h1 id="heading"> React using is jsx </h1>;

// // * React Component
// // * React Functional Component
// // * ways to write functional component

// // const HeadingComponent = () => <h1> This is functional component</h1>;

// const Title = () => {
//   return <h1 id="title">This is the Title</h1>;
// };

// // * this is component composition
// const HeadingComponent3 = () => (
//   <div>
//     <Title />
//     <h1 className="heading" id="root">
//       This is functional component
//     </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent3 />);

const Content = <h2 id="subheading">this is our react element </h2>;

const number = 100000;

const HeadingComponent = () => (
  <div id="container">
    {title}
    {Content}
    <h1>This is functional component</h1>
  </div>
);

const title = <h1>This is react element</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(title);
