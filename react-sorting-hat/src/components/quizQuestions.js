import React from "react";

const quiz = props => {
  return (
    <div className="quizDiv">
      {props.data.map(question => {
        <div>
          <h3>{props.question}</h3>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>;
      })}
    </div>
  );
};

export default quiz;
