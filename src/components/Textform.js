import React, { useState } from "react";

export default function Textform(props) {
  // variables
  let btnClasses = `btn btn-outline-${props.mode} btn-${
    props.mode === "light" ? "dark" : "light"
  } mx-2`;

  // methods
  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onUpperCase = () => {
    if (text !== "") {
      let upperCaseText = text.toUpperCase();
      setText(upperCaseText);
      props.displayAlert("Converted to Uppercase!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  const onLowerCase = () => {
    if (text !== "") {
      let lowerCaseText = text.toLowerCase();
      setText(lowerCaseText);
      props.displayAlert("Converted to Lowercase!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  const onRemoveSpaces = () => {
    if (text !== "") {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.displayAlert("Removed extra spaces!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  const onJsToJson = () => {
    if (text !== "") {
      let jsonText = JSON.stringify(text);
      setText(jsonText);
      props.displayAlert("Converted from JS to JSON!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  // EXAMPLE
  // let obj1 = {
  //   prop1: 1,
  //   prop2: 'red'
  // }

  const onJsonToJs = () => {
    if (text !== "") {
      let jsText = JSON.parse(text);
      setText(jsText);
      props.displayAlert("Converted JSON to JS!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  const onCopy = () => {
    if (text !== "") {
      document.getElementById("myTextArea").select();
      navigator.clipboard.writeText(text);
      props.displayAlert("Copied to your clipboard!", "success");
    }
    props.displayAlert("No text to process!", "warning");
  };

  const onClear = () => {
    if (text !== "") {
      props.displayAlert("No text to process!", "warning");
      setText("");
      props.displayAlert("Text cleared!", "success");
    }
  };

  const [text, setText] = useState("");

  // buttons style
  let btnStyles = {
    backgroundColor: "rgb(54, 168, 255)",
  };
  return (
    <div className="mb-3 mt-4">
      <textarea
        style={{
          borderRadius: 20,
          resize: "none",
        }}
        className="form-control my-3"
        id="myTextArea"
        rows="10"
        value={text}
        onChange={onTextChange}
        placeholder="Start typing or paste your text here..."
      ></textarea>

      {/* text analysis info */}

      <div
        className="container d-flex justify-content-between my-2"
        style={{
          height: 30,
          borderRadius: 100,
        }}
      >
        <p>
          Avg time to read:{" "}
          {0.008 * text.split(" ").length < 1
            ? "<1"
            : Math.round(0.008 * text.split(" ").length)}{" "}
          mins.
        </p>
        <p>
          Words: {text === "" ? "0" : text.split(" ").length}, Letters:{" "}
          {text.length}
        </p>
      </div>

      {/* buttons start here */}
      <div className="containter d-flex justify-content-center flex-wrap">
        <button className={btnClasses} onClick={onUpperCase} style={btnStyles}>
          Convert to Uppercase
        </button>

        <button className={btnClasses} onClick={onLowerCase} style={btnStyles}>
          Convert to Lowercase
        </button>

        <button
          className={btnClasses}
          onClick={onRemoveSpaces}
          style={btnStyles}
        >
          Remove Extra Spaces
        </button>

        <button className={btnClasses} onClick={onJsToJson} style={btnStyles}>
          JS to JSON
        </button>

        <button className={btnClasses} onClick={onJsonToJs} style={btnStyles}>
          JSON to JS
        </button>

        <button className={btnClasses} onClick={onCopy} style={btnStyles}>
          Copy
        </button>

        <button className={btnClasses} onClick={onClear} style={btnStyles}>
          Clear
        </button>
      </div>

      {/* text preview */}
      <div className="container my-5 ">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
