import React from "react";

export default function Button(props) {
  return <button disabled={props.disabled} onClick={props.clickFunc}>{props.title}</button>;
}
