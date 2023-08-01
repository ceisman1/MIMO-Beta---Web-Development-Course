import React from "react";

const Hobbies = (props) => {
  return (
    <div>
      <h2>My hobbies:</h2>
      <ol>
        <li>My favorite hobby is {props.best}</li>
        <li>My second-favorite hobby is {props.outdoor}</li>
        <li>I also like {props.indoor}</li>
      </ol>
    </div>
  );
};
export default Hobbies;