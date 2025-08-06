import { createContext } from "react";
// This file creates a UserContext using React's createContext API.
const UserContext = createContext({
  loggedInUser: "defaultUser",
});
// The UserContext is initialized with a default value of "defaultUser".
export default UserContext;
