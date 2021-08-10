import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {device} from "../Device";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media ${device.mobile}{
        width: 100%;
    align-items: center;
    text-align: center;
    }
`;
const Icon = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 4rem;
    margin: 3rem 0;
`;
const Title= styled.p`
    font-weight: bold;    
`;

const FeatureCard = ({icon, title, body, image}) => {
    return (
        <Container>
            <Icon>
                {image?<img src={image} alt="icon"/>:<FontAwesomeIcon icon={icon} style={{color: "white", stroke:'#F53396', strokeWidth:'1rem'}}/>}
            </Icon>
            <Title>{title}</Title>
            <p>{body}</p>
        </Container>
    )
}

export default FeatureCard
