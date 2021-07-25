import React from 'react';
//styles 

import { Wrapper, Content} from './Grid.styles';

const Grid = (props) => (
    <Wrapper>
        <h1>{props.header}</h1>
        <Content>{props.children}</Content>
    </Wrapper>
);

export default Grid;