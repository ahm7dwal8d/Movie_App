import React, { useState } from "react";
import { FormDiv, Button } from "./Styled";

const formStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}
const inputStyle = {
    width: "80%",
    padding: "10px",
    borderRadius: "4px",
}


function Form(props) {
    return (
        <FormDiv>
            <form style={formStyle} onSubmit={props.handleSubmit}>
                <input type="search" onChange={props.value} style={inputStyle} />
                <Button type="submit">search</Button>
            </form>
        </FormDiv>
        )
}

export default Form