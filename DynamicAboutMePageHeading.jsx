import React from "react";

const Heading = (props) => {
  return (
    <h1>
      Hello, my name is <span>{props.name}</span>
    </h1>
  );
};

export default Heading;