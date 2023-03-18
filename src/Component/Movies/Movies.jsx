import React, { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../../Context/MoviesContext/MoviesContaxt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { MoviesDiv, Container, Img, Items, Heading, Info, Rate, Date, Button } from "./Styled";
import "./style.css"


function Movies() {
    const [state, setState] = useState([]);
    const [count, setCount] = useState(1);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${count}`).then((res) => {
            setState(res.data.results)
        }).catch((err) => {
            return err
        })
    }, [count])
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const generateMovies = () => {
        setCount(count + 1)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    const movieContext = useContext(MoviesContext);
    const { addToLove } = movieContext;
    return (
        <MoviesDiv className="Movies">
            <Container className="container">
                {state?.map((item) => {
                    return (
                        <Items className="item" key={item.id}>
                            <Img src={IMG_PATH + item.backdrop_path} alt='' />
                            <Heading>{item.original_title}</Heading>
                            <Rate>{item.vote_average}</Rate>
                            <span
                                className="love-btn"
                                onClick={() => addToLove(item)}>
                                <FontAwesomeIcon icon={faHeart} />
                            </span>
                        </Items>
                    )
                })}
            </Container>
            <Button onClick={generateMovies}>More Movies</Button>
        </MoviesDiv>
    )
}

export default Movies;