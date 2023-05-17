import React from "react";
import { ListGroup } from "react-bootstrap";
import SentMessageListItem from "./SendmessageItem";
import { useEffect } from "react";
import { UpdateMySentItem } from "../../../Store/Mail-thunk";

import { useSelector, useDispatch } from "react-redux";
const SentMessage = () => {
  const Dispatch = useDispatch();
  const sentItem = useSelector((state) => state.mail.sentItem);
  //   const sentItem = useSelector((state) => state.mymail.sentItem);
  const updateTrigger = useSelector((state) => state.mymail.myupdateTriggerval);
  console.log(updateTrigger);
  useEffect(() => {
    // Dispatch(UpdateMySentItem(sentItem))
    console.log(sentItem);
  }, [sentItem]);
  return (
    <>
      <ListGroup as="ul" variant="primary">
        {sentItem.map((item) => (
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
