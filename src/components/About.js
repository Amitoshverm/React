import User from "./User.js";
import React from "react";
import UserClass from "./UserClass.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor is called");
  }
  // this is like useEffect which is used to make api call for lazy loading and componentDidMount() is called at the end
  // first constructor() is called then render() is called and in the end componentDidMount() is called.
  componentDidMount() {
    // console.log("Parent Component did mount is called");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About </h1>
        <h2>This is about of learning Namaste React</h2>

        <UserClass
          name={"first"}
          contact={"@amitosh(class)"}
          location={"ghaziabad(class)"}
        />
      </div>
    );
  }
}

/**
 * how will the life cyle of this method be called
 *  - Parent constructor
 *  - Parent Render
 *      - first child const
 *      - first child render
 *
 *      - second child const
 *      - second child render
 *
 *      - first child componentDidMount()
 *      - second child componentDidMount()
 *
 *  - Parents componentDidMount() callled
 */

// const About = () => {
//   return (
//     <div>
//       <h1>About </h1>
//       <h2>This is about of learning Namaste React</h2>

//       <UserClass
//         name={"amitosh verma(class)"}
//         contact={"@amitosh(class)"}
//         location={"ghaziabad(class)"}
//       />
//     </div>
//   );
// };
export default About;
