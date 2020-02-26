import React from "react";

import { InputComponentContainer } from "./input.styles";

const Input = (props) => {
  return (
    <InputComponentContainer>
      <h3>Hi {props.user} your may enter anythin you want:</h3>
      <input type="text" value={props.input} onChange={props.change}/>
    </InputComponentContainer>
  )
}

export default Input;
