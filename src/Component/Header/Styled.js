import styled from "styled-components"

export const HeaderDiv = styled.div`
padding: 10px 15px;
`
export const Container = styled.div`
display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background-color: #ffffff14;
    padding: 0 15px;
    border-radius: 4px;
`
export const Links = styled.ul`
display: flex;
a {
    padding: 10px;
    text-decoration: none;
    color: #ffffff9e;
}
a.active {
    color:#ff5722
}
`
export const ToggleIcon = styled.button`
padding: 10px;
font-size: 20px;
background: none;
border: none;
color: #fff;
cursor: pointer;
`