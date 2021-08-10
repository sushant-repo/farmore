import React from 'react';
import styled from 'styled-components';
import * as global from './GlobalStyles';
import { device } from './Device';
const CardWrapper = styled(global.FlexDiv)`
    justify-content: flex-start;
    flex-direction: ${props => props.position? "row": "row-reverse"};
    margin: 5rem auto;
    width: 100%;
    column-gap: 5rem;

    @media ${device.mobile}{
        flex-direction: column;
    }
`;

const Image = styled.img`
width: 50%;
@media ${device.mobile}{
    width: 100%;
}
`;
const Content = styled(global.FlexDiv)`
justify-content: center;
align-items: flex-start;
flex-direction: column;
flex-grow: 1;

@media ${device.mobile}{
    margin-top: 3rem;
}
`;
const Description = styled.p`
`;
const Button = styled.button(({theme}) =>`

    font: inherit;
    color: ${theme};
    border:none;
    background: none;

`);
const CardWithImage = (props) => {
    return (
        <CardWrapper position = {props.imageFirst}>
                <Image src={props.image} alt={`${props.title}`}/>
            <Content>
                <h2>
                    {props.title}
                </h2>
                <Description>
                    {props.description}
                    <Button theme={props.buttonColor}>
                    {props.button} 
                    {props.button?<span style={{fontSize: "4rem"}}>&nbsp;&rarr;</span>:""}
                    </Button>
                </Description>
            </Content>
        </CardWrapper>
    )
}

export default CardWithImage
