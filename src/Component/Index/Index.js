import { Fragment, useState, useEffect } from "react";
import Form from "../Form/Form";
import Movie from "../Movie/Movie"
import axios from "axios";

function Index() {
    const [state, setState] = useState('');
    const [data, setData] = useState([])
    const saveValue = (e) => {
        setState(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='${state}'`).then((res) => {
            setData(res.data.results)
        })
    } 
    return (
        <Fragment>
            <Form value={saveValue} handleSubmit={handleSubmit} />
            <Movie data={data} /> 
        </Fragment>
    )
}

export default Index;