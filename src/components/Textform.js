import React, { useState } from "react";

export default function Textform(props) {
  const upperCase = () => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };
  const textChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control my-3"
        id="exampleFormControlTextarea1"
        rows="10"
        value={text}
        onChange={textChange}
      ></textarea>
      <button className="btn btn-primary" onClick={upperCase}>
        Convert to Uppercase
      </button>
    </div>
  );
}
