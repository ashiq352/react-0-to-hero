import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Heading = ()=>(
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// Components - Functional
// composing components
const HeaderComponent = function () {
  return (
    <div>
      {Heading()}
      <Heading />
      <h1>Namaste React! Functional Component</h1>
      <h2>This is a h2</h2>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<HeaderComponent />);
