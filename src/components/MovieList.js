import React from "react";
import AddFavorites from "./AddFavorites";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";
import App from "../App";

const MovieList = (props) => {
    const favoriteComponent = props.favoriteComponent;
    return (
        <div>
        {props.movies.map((movie, index) => ( 
        <div className='image-container d-flex justify-content-start m-3'> 
            <img src={movie.Poster} alt='movie'></img>
            <div onClick={ () => props.handleFavoritesClick ()} 
            className='overlay d-flex align-items-center justify-content-center'>
                <favoriteComponent /> 
                </div>
            </div>
        ))}
        </div>
    );
};

export default MovieList;