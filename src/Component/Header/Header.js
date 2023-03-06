import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBars } from "@fortawesome/free-solid-svg-icons";
import { HeaderDiv, Container, Icon, Links } from "./Styled";

const logoStyle = {
    color: "#ff5722",
    textDecoration: "none",
    fontSize: "20px"
}

function Header() {
    const header = useRef(null)
    window.onscroll = function () {
        if (window.scrollY >= 300) {
            header.current.style = "position: fixed; top: 0; width: 100%; z-index: 99999; transition: 0.4s linear; background-color: rgba(0, 0, 0, 9)"
            header.current.children[0].style = "background-color: transparent"
        } else {
            header.current.style = "";
            header.current.children[0].style = "background-color: #ffffff14"
        }
    }
    return (
        <HeaderDiv ref={header}>
            <Container >
                <Link to='/' style={logoStyle}> <FontAwesomeIcon icon={faPlay} /> Movies</Link>
                <Icon className="icon">
                    <FontAwesomeIcon icon={faBars}/>
                </Icon>
                <Links>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Movies'>Movies</NavLink>
                </Links>
            </Container>
        </HeaderDiv>
    )
}

export default Header;