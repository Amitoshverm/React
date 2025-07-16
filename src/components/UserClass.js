import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        img: "",
      },
    };
    console.log(this.props.name + " constructor called");
  }
  async componentDidMount() {
    console.log(this.props.name + " child Component did mount is called");
    const data = await fetch("https://api.github.com/users/Amitoshverm");
    const jsonData = await data.json();

    console.log(jsonData);

    this.setState({
      userInfo: jsonData,
    });
  }
  render() {
    console.log(this.props.name + " child render is called");
    // destructing the prop
    const { contact } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

/*   - const()
    -  render()
    dummy data is called 

    - api is called 
    
 */
export default UserClass;
