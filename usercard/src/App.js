import React, { useEffect } from "react";
import axios from "axios";

import UserCard from "./UserCard";
import FollowersCard from "./FollowersCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userImg: "",
      userName: "",
      location: "",
      followerImg: []
    };
  }

  componentDidMount() {
    this.fetchGithubUsers();
    this.fetchUserFollowers();
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

  fetchUserFollowers = () => {
    axios
    .get("https://api.github.com/users/AaronVerdine/followers")
    .then(res => {
       console.log(res)
        for (let i = 0; res.data.length < i; i++) {
          console.log(i);
        }
    });
    .catch(err => {
      console.log(err)
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
        <h2>Followers</h2>
        <FollowersCard followerImg={this.state.followerImg} />
      </div>
    );
  }
}

export default App;
