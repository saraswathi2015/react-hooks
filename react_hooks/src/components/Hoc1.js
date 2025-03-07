// import React, { useState } from "react";
// import Hoc3 from "./Hoc3";

// const Hoc1 = (props) => {
//   return (
//     <div>
//       <button onClick={props.increment}>{props.name}</button>
//     </div>
//   );
// };

// export default Hoc3(Hoc1);

import React from "react";
import { withAuth, withDarkMode } from "./Hoc3";

const Dashboard = () => {
  return (
    <div>
      <h1>your Dashboard</h1>
    </div>
  );
};
const AuthDash = withDarkMode(withAuth(Dashboard));
export default AuthDash;
