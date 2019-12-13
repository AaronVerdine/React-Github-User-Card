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
      followerImg: [],
      followers: []
      // followerName: ""
      // users: []
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
        console.log(res.data);

        // let followers = res.data;

        this.setState({
          ...this.state,
          followers: res.data
        });

        // followers.forEach(item => {
        //   for (let i = 0; i < followers.length; i++) {
        //     return res.data[i]["avatar_url"];
        //   }
        // });
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
        <h2>Followers</h2>
        {/* <FollowersCard followerImg={this.state.followerImg} /> */}
        {this.state.followers.map(item => {
          return (
            <div>
              <h2>{item.login}</h2>
              <img src={item.avatar_url} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
