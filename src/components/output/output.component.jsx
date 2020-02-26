import React from "react";

import { OutputComponentContainer } from "./output.style";

const Output = (props) => {
  console.log(props);
  return (
    <OutputComponentContainer>
      <h4>Hi {props.userName} you've enter the following:</h4>
      <p>{props.input}</p>
      <h5>and ones more:</h5>
      <p>{props.input}</p>
    </OutputComponentContainer>
  )
}

export default Output;
