// import AuthForm from "./Component/AuthForm/AuthForm";
// import TextEditing from "./Component/TextEditing/TextEditing";
// import InboxPage from "./Component/InboxPage.js/InboxPage";
import { Route, Routes, Navigate } from "react-router-dom";
// import SentMessage from "./Component/InboxPage.js/Sentmessage/SentMessage";
import React, { useEffect, Suspense } from "react";
// import InboxList from "./Component/InboxPage.js/InboxList";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMySentItem } from "./Store/Mail-thunk";
import { useNavigate } from "react-router-dom";
const InboxPage = React.lazy(() =>
  import("./Component/InboxPage.js/InboxPage")
);
const TextEditing = React.lazy(() =>
  import("./Component/TextEditing/TextEditing")
);
const AuthForm = React.lazy(() => import("./Component/AuthForm/AuthForm"));
const SentMessage = React.lazy(() =>
  import("./Component/InboxPage.js/Sentmessage/SentMessage")
);
const InboxList = React.lazy(() =>
  import("./Component/InboxPage.js/InboxList")
);
function App() {
  let loginlocalstore = localStorage.getItem("islogin") === "true";
  // console.log(loginlocalstore);
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (loginlocalstore || islogin) {
      navi("/main/text-edit");
      console.log(" navi");
    }
    if (!loginlocalstore) {
      navi("/login");
    }
  }, [loginlocalstore]);

  const sentItem = useSelector((state) => state.mymail.sentItem);
  const sendcount = useSelector((state) => state.mymail.sendcount);
  useEffect(() => {
    Dispatch(UpdateMySentItem(sentItem));
  }, [sendcount]);
  // console.log("app", sentItem);
  return (
    <div>
      <Suspense fallback={<p className="loading">Loading .....</p>}>
        <Routes>
          <Route path="/login" element={<AuthForm />}></Route>
          {loginlocalstore && (
            <Route path="/main/*" element={<InboxPage />}>
              <Route path="inboxlist" element={<InboxList />} />
              <Route path="text-edit" element={<TextEditing />} />
              <Route path="sentmessage" element={<SentMessage />} />
            </Route>
          )}
          {!loginlocalstore && (
            <Route element={<Navigate replace to="login" />} />
          )}

          {/* <TextEditing></TextEditing> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
