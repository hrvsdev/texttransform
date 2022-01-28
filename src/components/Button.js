import React from "react";

export default function Button(props) {
  return <button onClick={props.clickFunc}>{props.title}</button>;
}
