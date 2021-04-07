import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
