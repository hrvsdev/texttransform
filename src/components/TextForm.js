import React, { useState } from "react";
import Button from "./Button";
import buttonData from "./buttonData";

export default function TextForm() {
  const [text, setText] = useState("");
  function textChange(e) {
    setText(e.target.value);
  }
  function wordCounter() {
    if (text !== "") {
      return text
        .replace(/[^A-Za-z]\s+/g, " ")
        .trim()
        .split(" ").length;
    } else {
      return 0;
    }
  }

  function upperCase() {
    setText((prev) => prev.toUpperCase());
  }
  function lowerCase() {
    setText((prev) => prev.toLowerCase());
  }
  function titleCase() {
    let str = text;
    setText(str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase()));
  }
  function extraSpace() {
    setText(text.replace(/\s+/g, " ").trim());
  }
  function copyText(e) {
    navigator.clipboard.writeText(document.querySelector("textarea").value);
  }
  function clearText() {
    setText("");
  }

  return (
    <main>
      <h2>Enter your text here</h2>
      <div className="text-box">
        <textarea
          onChange={textChange}
          value={text}
          spellCheck="false"
          placeholder="Type something here ..."
        ></textarea>
      </div>

      <div className="button-sec">
        <Button {...buttonData[0]} clickFunc={upperCase} />
        <Button {...buttonData[1]} clickFunc={lowerCase} />
        <Button {...buttonData[2]} clickFunc={titleCase} />
        <Button {...buttonData[3]} clickFunc={extraSpace} />
        <Button {...buttonData[4]} clickFunc={copyText} />
        <Button {...buttonData[5]} clickFunc={clearText} />
      </div>
      <div className="text-info">
        There are <b>{text.length} characters</b> and{" "}
        <b>{wordCounter()} words</b>
      </div>
    </main>
  );
}
