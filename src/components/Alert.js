import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let lowerCaseWord = word.toLowerCase();
    return lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1);
  };
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
      </div>
    )
  );
}
