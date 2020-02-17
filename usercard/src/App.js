import React, { useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
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
      followerName: "",
      followers: []
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

        this.setState({
          ...this.state,
          followers: res.data
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
        <h1>Followers</h1>

        <FollowersCard
          followerImg={this.state.followerImg}
          followerName={this.state.followerName}
        />
        {this.state.followers.map(item => {
          return (
            <Card>
              <Card.Content>
                <Card.Header>{item.login}</Card.Header>
              </Card.Content>
              <Image src={item.avatar_url} />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default App;
