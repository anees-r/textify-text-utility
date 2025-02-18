import React from "react";

export default function About() {
  return (
    <>
      <div className="container">
        <div
          className="container my-5 border p-2"
          style={{
            borderRadius: 20,
          }}
        >
          <p>
            Welcome to Textify, a simple yet powerful text utility tool designed
            to make text formatting effortless. Whether you need to convert text
            to uppercase, lowercase, or quickly clear text, Textify provides an
            easy-to-use interface to handle it all. Our tool is built to help
            you process text efficiently, saving time and effort.
          </p>
          <p>
            In addition to basic formatting, Textify offers useful insights like
            word count, letter count, and average reading time, making it a
            great tool for writers, editors, and content creators. Whether
            you're drafting an article, preparing a document, or just checking
            readability, Textify ensures you have all the necessary tools at
            your fingertips.
          </p>
          <p>
            At Textify, we believe in simplicity and efficiency. Our goal is to
            provide a lightweight, no-fuss solution that helps users manage text
            without distractions. Whether you're a student, a professional, or
            just someone who works with text frequently, Textify is here to make
            your workflow smoother and faster.
          </p>
        </div>
      </div>
    </>
  );
}
