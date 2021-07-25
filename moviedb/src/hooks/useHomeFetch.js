import { useState, useEffect, useRef } from "react";
import API from "../API"

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
//this is a custom hook
 export const useHomeFetch = () => {
        //when you call useState you get a array back
    //first is state second is setter
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false); //initial state is false
    //before useState hook you need to create a class that was stated in React
    const [error, setError] = useState(false); //use if receive error from API

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);
            //now that you have movies set the state
            //return an object
            setState(prev => (
                {
                    ...movies,
                    results: 
                        page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                }
            ));
            setLoading(false);
        } catch(error){
            //set the state
            setError(true);
        }
    };

    //useEffect called with inline function
    //trigger this only when we mount the component 
    //can do it by specifying , []
    //when you specify it as an empty array it will onyl run once 

    //inital render
    useEffect( () => {
        fetchMovies(1);
    }, [])
    return {state, loading, error};

};
