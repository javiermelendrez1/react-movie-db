import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (props) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);


                const movie = await API.fetchMovie(props.movieId);
                const credits = await API.fetchCredits(props.movieId);

                //get director only 

                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                })
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        fetchData();
    }, [props.movieId])
    return {state, loading, error};
}