import { MailSliceAction } from "./MailSlice";
import { MymailSliceAction } from "./MymailSlice";

//sending mail
export const sendMailHandler = (mailobj) => {
  return async (Disptach) => {
    let emailId = await mailobj.email.replace(/[&@.]/g, "");

    const sendingmail = async () => {
      const response = await fetch(
        `https://mail-box-5eae5-default-rtdb.firebaseio.com/${emailId}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify(mailobj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      //   console.log(data);
      return data;
    };
    try {
      await sendingmail();

      // Disptach(MailSliceAction.setSentData());
      //   console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
};

//get all mail
export const getmailHandler = () => {
  let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");
  // console.log(emailId);
  return async (Disptach) => {
    const gettingMailList = async () => {
      const response = await fetch(
        `https://mail-box-5eae5-default-rtdb.firebaseio.com//${emailId}.json`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      // if (data.inbox) {
      //   return data;
      // }
      // console.log(data.inbox);
      if (data.error) {
        console.log(data);
        throw new Error("faild");
      }

      return data;
    };
    try {
      const data = await gettingMailList();
      const items = data.inbox;
      let sentItem = data.sentItem;

      const transformeddata = [];

      for (const key in items) {
        const Obj = {
          id: key,
          ...items[key],
        };
        transformeddata.push(Obj);
      }
      Disptach(MailSliceAction.addItem(transformeddata));
      if (sentItem) {
        Disptach(MymailSliceAction.AddSenditemList(sentItem));
      }
    } catch (error) {
      // console.log("error message");
      // console.log(data);
    }
  };
};

//Read readreceipt update
export const UpdateList = (obj) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    const UpdateEmailList = async () => {
      const response = await fetch(
        `https://mail-box-5eae5-default-rtdb.firebaseio.com//${emailId}/inbox/${obj.id}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            email: obj.email,
            subject: obj.subject,
            text: obj.text,
            From: obj.From,
            readreceipt: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      return data;
    };
    try {
      await UpdateEmailList();
      Dispatch(MailSliceAction.updataItems());
    } catch (error) {
      console.log(error);
    }
  };
};
//inbox mail delete
export const DeleteMail = (id) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    const DeletingMail = async () => {
      const response = await fetch(
        `https://mail-box-5eae5-default-rtdb.firebaseio.com//${emailId}/inbox/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        console.log(data);
        // throw new Error("faild");
      }
      return data;
    };
    try {
      const data = await DeletingMail();
      Dispatch(MailSliceAction.DeleteItem());
    } catch (error) {
      // console.log(error);
      Dispatch(MailSliceAction.DeleteItem());
    }
  };
};

//send maild upadte
export const UpdateMySentItem = (sentItem) => {
  return async (Dispatch) => {
    let emailId = localStorage.getItem("mailid").replace(/[&@.]/g, "");

    const UpdatedingmySendingItem = async () => {
      const response = await fetch(
        `https://mail-box-5eae5-default-rtdb.firebaseio.com/${emailId}/sentItem/.json`,
        {
          method: "PUT",
          body: JSON.stringify(sentItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.error) {
        throw new Error("faild");
      }
      return data;
    };
    try {
      const data = await UpdatedingmySendingItem();
      console.log(data);

      // Dispatch( MymailSliceAction.sendItemUpdateTrigge());
    } catch (error) {
      // console.log(error);
    }
  };
};
