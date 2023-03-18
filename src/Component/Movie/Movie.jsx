import React, { useContext, useState } from "react";
import { MoviesContext } from "../../Context/MoviesContext/MoviesContaxt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Container, Img, Items, Heading, Info, Rate, Love } from "./Styled";
import "./style.css"

function Movie() {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const movieContext = useContext(MoviesContext);
    const { movies, addToLove } = movieContext;
    return (
        <div className="movie">
            <Container className="container">
                {movies && movies.map((item) => {
                    return (
                        <Items className="item" key={item.id}>
                            <Img src={IMG_PATH + item.backdrop_path} alt='' />
                            <Heading>{item.original_title}</Heading>
                            <Rate>{item.vote_average}</Rate>
                            <Love
                                className="love-btn"
                                onClick={() => addToLove(item)}>
                                <FontAwesomeIcon icon={faHeart} />
                            </Love>
                        </Items>
                    )
                })}
            </Container>
        </div>
    )
}

export default Movie;