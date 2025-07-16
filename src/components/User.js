import { useState } from "react";
const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/Amitoshverm");

    const jsonData = await data.json();
    console.log(jsonData);
  };

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 2);
        }}>
        Click To increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contack: {contact}</h3>
    </div>
  );
};
export default User;
