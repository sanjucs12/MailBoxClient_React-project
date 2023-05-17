import React from "react";
import { ListGroup } from "react-bootstrap";
import SentMessageListItem from "./SendmessageItem";
import { useEffect } from "react";
import { UpdateMySentItem } from "../../../Store/Mail-thunk";

import { useSelector, useDispatch } from "react-redux";
const SentMessage = () => {
  const Dispatch = useDispatch();

  const sentItem = useSelector((state) => state.mymail.sentItem);
  console.log(sentItem);

  return (
    <>
      <ListGroup as="ul" variant="primary">
        {sentItem.map((item, index) => (
          <SentMessageListItem
            key={index}
            email={item.email}
            subject={item.subject}
            text={item.text}
            id={index}
            readreceipt={item.readreceipt}
          ></SentMessageListItem>
        ))}
      </ListGroup>
    </>
  );
};
export default SentMessage;
