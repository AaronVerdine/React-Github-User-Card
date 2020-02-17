import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = props => {
  return (
    <Card>
      <Image src={props.userImg} alt="Me" />
      <Card.Content>
        <Card.Header>{props.userName}</Card.Header>
        <Card.Meta>
          <span>{props.location}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
