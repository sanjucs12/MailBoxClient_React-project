import React from "react";
import { ListGroup } from "react-bootstrap";
import SentMessageListItem from "./SendmessageItem";

import { useSelector, useDispatch } from "react-redux";
const SentMessage = () => {
  const Items = useSelector((state) => state.mail.items);

  return (
    <>
      <ListGroup as="ul" variant="primary">
        {Items.map((item) => (
          <SentMessageListItem
            key={item.id}
            email={item.email}
            subject={item.subject}
            text={item.text}
            id={item.id}
            readreceipt={item.readreceipt}
          ></SentMessageListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default SentMessage;
