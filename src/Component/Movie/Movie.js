import React, { useContext } from "react";
import {  Container, Img, Items, Heading, Info, Rate, Date } from "./Styled";

function Movie(props) {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const { data } = props;
    return (
        <div className="movie">
            <Container className="container">
                {data?.map((item) => {
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
        </div>
    )
}

export default Movie;