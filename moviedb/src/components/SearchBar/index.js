import React, {useState, useEffect, useRef} from "react";

//image 
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = (props) => {
    const [state, setState] = useState('');
    const initial = useRef(true); 
    //use Effect renders once when the component loads but we only want this 
    //to load when user begins to type in searchBar
    
    useEffect(() => {
        if(initial.current){
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            props.setSearchTerm(state);
        }, 500);
        return () => clearTimeout(timer);
    }, [props.setSearchTerm, state])
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input type='text' placeholder='search movie' onChange={event => setState(event.currentTarget.value)} value={state}/>
            </Content>
        </Wrapper>
    );
};

export default SearchBar;