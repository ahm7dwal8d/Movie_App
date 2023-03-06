import styled from "styled-components";

export const FormDiv = styled.div`
background-color: rgba(255, 255, 255, 0.08);
margin: 10px 15px;
padding: 15px;
border-radius: 4px;
`
export const Button = styled.button`
padding: 9px;
margin: 0 5px;
border-radius: 4px;
border: 1px solid rgb(255, 87, 34);
background: rgb(255, 87, 34);
color: #fff;
text-transform: capitalize;
cursor: pointer;
:hover {
    background-color: #fff;
    transition: 0.4s linear;
    color: rgb(255, 87, 34)
}
`