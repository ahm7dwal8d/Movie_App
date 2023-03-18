import React, { useRef, useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBars, faSun } from "@fortawesome/free-solid-svg-icons";
import { HeaderDiv, Container, Icon, Links, ToggleIcon } from "./Styled";
import { MoviesContext } from "../../Context/MoviesContext/MoviesContaxt";
import "./style.css"

const logoStyle = {
    color: "#ff5722",
    textDecoration: "none",
    fontSize: "20px"
}

function Header() {
    const [state, setState] = useState(false)
        const themeContext = useContext(MoviesContext);
        const { theme, setTheme } = themeContext;
        const handleClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <HeaderDiv className="header">
            <Container >
                <Link to='/' style={logoStyle}> <FontAwesomeIcon icon={faPlay} /> Movies</Link>
                <div className="icon">
                    <ToggleIcon 
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faSun} />
                    </ToggleIcon>
                    <span
                        onClick={() => setState(!state)}>
                        <FontAwesomeIcon icon={faBars}/>
                    </span>
                </div>
                <Links className="links">
                    <ToggleIcon 
                        onClick={handleClick}>
                        <FontAwesomeIcon icon={faSun} />
                    </ToggleIcon>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Movies'>Movies</NavLink>
                    <NavLink to='/LoveMovies'>LoveMovies</NavLink>
                </Links>
            </Container>
            {state && (
                <div className="header-mobile">
                    <ul>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Movies'>Movies</NavLink>
                    <NavLink to='/LoveMovies'>LoveMovies</NavLink>
                    </ul>
                    <div
                        className="close-button"
                        onClick={() => setState(false)}>x</div>
                </div>
            )}
        </HeaderDiv>
    )
}

export default Header;