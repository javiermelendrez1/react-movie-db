import { useState, useEffect, useRef } from "react";
import API from "../API"
// Helpers
// import { IsPersistedState } from '../helpers';
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
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false); //initial state is false
    //before useState hook you need to create a class that was stated in React
    const [error, setError] = useState(false); //use if receive error from API
    const [searchTerm, setSearchTerm] = useState('');
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
        } catch (error) {
            //set the state
            setError(true);
        }
    };

    //useEffect called with inline function
    //trigger this only when we mount the component 
    //can do it by specifying , []
    //when you specify it as an empty array it will onyl run once 

    //inital render and search
    useEffect(() => {
        // if (!searchTerm) {
        //     const sessionState = isPersistedState('homeState');
      
        //     if (sessionState) {
        //       console.log('Grabbing from sessionStorage');
        //       setState(sessionState);
        //       return;
        //     }
        //   }
        //wipeout old state before you make a new search
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm])


    //load more 

    useEffect(() => {
        if (!isLoadingMore) return;
        //should only do something when we load more movies
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false); //return this back to false
        //we put is loading more in the array because this useEffect is dependent on wether use clicks that 

    }, [isLoadingMore, searchTerm, state.page])


  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
  }, [searchTerm, state]);

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };

};
