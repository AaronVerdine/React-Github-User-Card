import React from "react";

const FollowersCard = props => {
  return (
    <div>
      <h1>{props.followerName}</h1>
      <h3>{props.url}</h3>
    </div>
  );
};

export default FollowersCard;
