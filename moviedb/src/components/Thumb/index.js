import React from "react";
//styles 
import { Image } from "./Thumb.styles";

const Thumb = (props) => (
    <div>
        <Image src={props.image} alt='movie-thumb'/>
    </div>
);

export default Thumb;