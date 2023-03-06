import styled from "styled-components";

export const MoviesDiv = styled.div`
margin: 10px 15px;
padding: 10px 0;
`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 50px;
margin: 10px 15px;
`
export const Items = styled.div`
background-color: rgb(255 255 255 / 12%);
position: relative;
border-radius: 4px;
`
export const Img = styled.img`
width: 100%;
border-radius: 4px;
`
export const Heading = styled.h4`
text-align: center;
color: rgb(255, 87, 34);
margin: 10px;
`
export const Info = styled.p`
position: absolute;
top: 0;
left: 0;
color: #fff;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 0;
opacity: 0;
transition: 0.4s linear;
font-size: 14px;
:hover {
    opacity: 1;
}
`
export const Rate = styled.span`
position: absolute;
top: 10px;
right: 10px;
background: #f44336;
padding: 2px 5px;
border-radius: 4px;
color: #fff;
font-weight: bold;
`
export const Date = styled.span`
position: absolute;
top: 10px;
left: 10px;
background: #f44336;
padding: 2px 5px;
border-radius: 4px;
color: #fff;
font-weight: bold;
`
export const Button = styled.button`
padding: 10px;
margin: 20px auto;
width: 150px;
cursor: pointer;
background: #f44336;
color: #fff;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #f44336;
:hover {
    background-color: transparent;
    transition: 0.4s linear;
    color: #f44336;
}
`