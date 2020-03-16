import React from "react";
import spinner from "./giphy.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margint: "40px auto", display: "block" }}
      />
    </div>
  );
};
