import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {device} from '../Device'
const Container = styled.div`
display: flex;
color: white;
@media ${device.mobile}{
width: 100%;
justify-content: center;
margin: 2rem 0;
flex-direction: column;
align-items: center;
}
`;
const LeftContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    width: 30%;
`;
const RightContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`;

const Counter = styled.p`
    font-weight: 600;
    margin: 0;
    font-size: 2.2rem;
`;
const Title = styled.p`
margin: 0;
line-height: 1.4;
font-size: 1.5rem;
text-align: center;
margin-top: -7px;
`;

const Fact = ({icon, title, counter}) => {
    return (
        <Container>
            <LeftContainer>
            <FontAwesomeIcon icon={icon}/>
            </LeftContainer>
            <RightContainer>
            <Counter>{counter}+</Counter>
            <Title>{title}</Title>
            </RightContainer>
        </Container>
    )
}

export default Fact
