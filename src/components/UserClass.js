import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    // destructing the prop
    const { name, location, contact } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contack: {contact}</h3>
      </div>
    );
  }
}
export default UserClass;
