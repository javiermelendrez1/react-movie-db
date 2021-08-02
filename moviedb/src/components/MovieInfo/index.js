import React from 'react';
//components
import Thumb from '../Thumb';
//config 
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
//image
import NoImage from '../../images/no_image.jpg';
//styles 
import { Wrapper, Content, Text } from './MovieInfo.styles';


const MovieInfo = (props) => (

    <Wrapper backdrop={props.movie.backdrop_path}>
        <Content>
            <Thumb image={
                props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : NoImage
            }
            clickable={false}
            />
            <Text>
                <h1>{props.movie.title}</h1>
                <h3>PLOT</h3>
                <p>{props.movie.overview}</p>
                <div className="rating-directors">
                    <div>
                    <h3>RATING</h3>
                    <div className="score">
                        {props.movie.vote_average}
                    </div>
                    <div className="director">
                        <h3>DIRECTOR{props.movie.directors.length > 1 ? 'S' : ''}</h3>
                        {props.movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
);

export default MovieInfo;