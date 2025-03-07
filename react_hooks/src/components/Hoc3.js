// import React, { useState } from "react";

// const Hoc3 = (OriginalComponent) => {
//   //perform some logic on original component
//   const NewComponent = (props) => {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//       setCount((count) => count + 1);
//     };
//     return (
//       <div>
//         <h1>count:{count}</h1>
//         <OriginalComponent increment={handleClick} {...props} />
//       </div>
//     );
//   };

//   NewComponent.add = OriginalComponent.add;

//   return NewComponent;
// };

// export default Hoc3;

import React from "react";

const withAuth = (Component) => {
  return function (props) {
    const isAuthenticated = true;
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      return <p>Please login to access</p>;
    }
  };
};

// import React from 'react'

const withDarkMode = (Component) => {
  const styles = {
    backgroundColor: "#212529",
    color: "#eee",
  };
  return (props) => {
    return (
      <div style={styles}>
        <Component {...props} />{" "}
      </div>
    );
  };
};
export { withAuth, withDarkMode };
