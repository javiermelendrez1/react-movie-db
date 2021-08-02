import React from 'react';
import PropTypes from 'prop-types';
//styles 
import { Wrapper, Image } from './Actor.styles'

const Actor = (props) => (
    <Wrapper>
        <Image src={props.imageUrl} alt='actor-thumb' />
        <h3>{props.name}</h3>
        <p>{props.character}</p>
    </Wrapper>
);

// Actor.prototypes = {
//     name: PropTypes.string,
//     character: PropTypes.string,
//     imageUrl: PropTypes.string

// };

export default Actor;
