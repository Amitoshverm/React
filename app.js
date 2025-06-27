{
  /* <div>
    <div>
        <h1> nested child</h1>
    </div>
</div> */
}

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "hello from react"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag from children"),
    React.createElement("h2", {}, "h2 tag from children"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag from children"),
    React.createElement("h2", {}, "h2 tag from children"),
  ]),
]);

console.log(parent); // the parent here is not an html its an object and the react is using this object to create an html and render on dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // here
