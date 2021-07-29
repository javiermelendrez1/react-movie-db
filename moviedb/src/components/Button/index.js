import React from 'react'
import {Wrapper} from './Button.style'

const Button = (props) => (

    <Wrapper type="button" onClick={props.callback}>
        {props.text}
    </Wrapper>
);
export default Button;