import { Fragment, useState, useContext } from "react";
import Form from "../Form/Form";
import Movie from "../Movie/Movie"
import axios from "axios";
import { MoviesContext } from "../../Context/MoviesContext/MoviesContaxt";

function Index() {
    const movieContext = useContext(MoviesContext)
    const { state, saveValue, setMovies } = movieContext;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1c&query='${state}'`).then((res) => {
            setMovies(res.data.results)
        })
    } 
    return (
        <Fragment>
            <Form value={saveValue} handleSubmit={handleSubmit} />
            <Movie /> 
        </Fragment>
    )
}

export default Index;