import { MailSliceAction } from "./MailSlice";

export const sendMailHandler = (mailobj) => {
  return async (Disptach) => {
    let emailId = await mailobj.email.replace(/[&@.]/g, "");

    const sendingmail = async () => {
      const response = await fetch(
        `https://mailbox-client-26e9b-default-rtdb.firebaseio.com//${emailId}.json`,
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
      Disptach(MailSliceAction.setSentData());
      //   console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
};
