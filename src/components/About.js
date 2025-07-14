import User from "./User.js";
import UserClass from "./UserClass.js";
const About = () => {
  return (
    <div>
      <h1>About </h1>
      <h2>This is about of learning Namaste React</h2>

      <User
        name={"amitosh verma(function)"}
        contact={"@amitoshverm(function)"}
        location={"Ghaziabad(function)"}
      />

      <UserClass
        name={"amitosh verma(class)"}
        contact={"@amitosh(class)"}
        location={"ghaziabad(class)"}
      />
    </div>
  );
};
export default About;
