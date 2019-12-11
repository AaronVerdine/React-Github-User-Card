import React from "react";

const UserCard = props => {
  return (
    <div>
      <img src={props.userImg} alt="Me" />
      <h1>{props.userName}</h1>
      <h2>{props.location}</h2>
    </div>
  );
};

export default UserCard;
