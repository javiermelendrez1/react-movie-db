import React from "react";
//styles 
import { Wrapper, Content, Text } from "./HeroImage.styles";


//prop should never be changed inside a component 
//you can destruct prop with es6 syntax that way you dont have to keep typing prop
const HeroImage = (prop) => (
    <Wrapper image={prop.image}>
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p>{prop.text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;