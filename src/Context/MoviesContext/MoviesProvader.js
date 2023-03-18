import React, { useState } from "react";
import { MoviesContext } from "./MoviesContaxt";

function MoviesProvader({ children }) {
    const [movies, setMovies] = useState('');
    const [state, setState] = useState('');
    const [theme, setTheme] = useState('light');
    const [love, setLove] = useState([])
    const saveValue = (e) => {
        setState(e.target.value)
    }
    let height;
    if (movies.length === 0 && theme === 'dark' && love.length === 0) {
        height = "100vh";
    } else {
        height = "100%"
    }
    const addToLove = (item) => {
        setLove((prev) => [...prev, item])
    }
    const removeFromLove = (id) => {
        const remove = love.filter((item) => {
            return item.id !== id
        })
        setLove(remove)
    }
    return (
        <MoviesContext.Provider value={{
            movies,
            setMovies,
            saveValue,
            state,
            theme,
            setTheme,
            height,
            love,
            setLove,
            addToLove,
            removeFromLove
            }}>
            {children}
        </MoviesContext.Provider>
    )
}
export default MoviesProvader;
