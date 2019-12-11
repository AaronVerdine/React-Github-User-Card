import React, { useEffect } from "react";
import axios from "axios";

import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userImg: "",
      userName: "",
      location: ""
    };
  }

  componentDidMount() {
    this.fetchGithubUsers();
  }

  fetchGithubUsers = () => {
    axios
      .get("https://api.github.com/users/AaronVerdine")
      .then(res => {
        // console.log(res.data);
        this.setState({
          userImg: res.data["avatar_url"],
          userName: res.data.login,
          location: res.data.location
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard
          userImg={this.state.userImg}
          userName={this.state.userName}
          location={this.state.location}
        />
        {/* <select>
          <option> </option>
        </select> */}
      </div>
    );
  }
}

export default App;
