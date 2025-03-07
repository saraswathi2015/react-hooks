import "./App.css";
import { useEffect, useRef, useState } from "react";
// import Memo from "./components/Memo";
// import Usecallback from "./components/Usecallback";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Usereducer from "./components/Usereducer";
import Uselayout from "./components/Uselayout";
import Customhook from "./components/Customhook";
import Filter from "./components/usecallback-new.js";
import Hoc1 from "./components/Hoc1.js";
import Hoc2 from "./components/Hoc2.js";
import withAuth from "./components/Hoc3.js";
import Dashboard from "./components/Hoc1.js";
import AuthDash from "./components/Hoc1.js";
import Customhook1 from "./components/Customhook1.js";
import Toggle from "./components/Customhook/Customhook3.js";
import ItemList from "./components/Customhook/Customhook4.js";
import Useeffect from "./components/Useeffect.js";
import Useeffect1 from "./components/Useeffect.js";
import LoginForm from "./components/Customhook/Valitate.js";
// import Ref from "./components/Ref";

// function App() {
//

//useRef accessing Dom element
function App() {
  // console.log(Hoc2.add(1, 3));
  // const AuthDash = withAuth(Dashboard);

  return (
    <div className="App">
      {/* <Ref /> */}
      {/* <Memo /> */}
      {/* <Usecallback /> */}
      {/* <Profile /> */}
      {/* <Footer /> */}
      {/* <Usereducer /> */}
      {/* <Uselayout /> */}
      {/* <Customhook /> */}
      {/* <Filter /> */}
      {/* <Hoc1 name={"click counter"} /> */}
      {/* <Hoc2 name={"mouse over counter"} /> */}
      {/* <AuthDash /> */}
      {/* <Customhook1 /> */}
      {/* <Toggle /> */}
      {/* <ItemList /> */}
      {/* <Useeffect1 /> */}
      <LoginForm />
    </div>
  );
}

export default App;
