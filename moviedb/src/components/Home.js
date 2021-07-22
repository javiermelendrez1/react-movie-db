import React, {useState} from 'react';

//config 
//importing things from config file 
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
//components

//hook

//image 
import NoImage from '../images/no_image.jpg';

const Home = () => {
    //when you call useState you get a array back
    //first is state second is setter
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false); //initial state is false
    //before useState hook you need to create a class that was stated in React
    const [error, setError] = useState(false); //use if receive error from API


    return <div>Home Page</div>
};

export default Home;