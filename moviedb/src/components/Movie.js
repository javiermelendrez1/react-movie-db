import React from 'react';
import { useParams } from 'react-router-dom';
//config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//componets
import Grid from './Grid';
import Spinner from './Spinner';
//hook 
import { useMovieFetch } from '../hooks/useMovieFetch';
//image
import NoImage from '../images/no_image.jpg';
import { useHomeFetch } from '../hooks/useHomeFetch';

const Movie = () => {

    const {movieId} = useParams();

    const [state, loading, error] = useHomeFetch(movieId);
    return (
        <>
        <div>Movie</div>
        </>
    )
};

export default Movie;