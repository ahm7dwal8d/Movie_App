import React, { useState, useEffect } from "react";
import axios from "axios";
import { MoviesDiv, Container, Img, Items, Heading, Info, Rate, Date, Button } from "./Styled";

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
    return (
        <MoviesDiv className="Movies">
            <Container className="container">
                {state?.map((item) => {
                    return (
                        <Items className="item" key={item.id}>
                            <Img src={IMG_PATH + item.backdrop_path} alt='' />
                            <Heading>{item.original_title}</Heading>
                            <Info>{item.overview}</Info>
                            <Rate>{item.vote_average}</Rate>
                            <Date>{item.release_date}</Date>
                        </Items>
                    )
                })}
            </Container>
            <Button onClick={generateMovies}>More Movies</Button>
        </MoviesDiv>
    )
}

export default Movies;