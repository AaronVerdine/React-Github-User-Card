import React from "react";

const FollowersCard = props => {
  return (
    <div>
      <img src={props.followerImg} alt="followers" />
      <h2>{props.userName}</h2>
      <h3>{props.location}</h3>
    </div>
  );
};

export default FollowersCard;
