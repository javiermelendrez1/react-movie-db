import React from 'react';
//helper functions
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper , Content } from './MovieInfoBar.styles';

const MovieInfoBar = (props) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running Time: {calcTime(props.time)}</p>
            </div>
            <div className="column">
                <p>Budget: {convertMoney(props.budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(props.revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;