import React from 'react'
import styled from 'styled-components';
import {device} from '../Device';

const Frame= styled.div`
    display: grid;
    margin: auto 0;
   

    height: 90vh;
    width: 100vw;
    position: relative;

   
    overflow: hidden;
    
    
    @media ${device.mobile}{
        align-items: center;
        
    }

    @media ${device.tabletP}{
        height: 100%;
    }
`;

const YellowCircle = styled.div`
    height: 10.4rem;
    width: 10.4rem;

    background: rgba(251, 181, 2, 0.21);
    border-radius: 50%;

    position: absolute;
    top: -2.9rem;
    left: -3.2rem;
    `;
const BlueCircle = styled.div`
    position: absolute;
    right: -25rem;
    top: -55.8rem;

    
    width: 119.9rem;
    height: 119.9rem;
    

    background: rgba(50, 102, 227, 0.17);
    border-radius: 50%;

    @media ${device.mobile}{
        height: 100vh;
        width: 100vh;
        right:0;
        top:0;
        border-radius:0;
    }
    `;
const RedCircle = styled.div`
    position: absolute;
    left: 1.9rem;
    
    width: 26.4rem;
    height: 26.4rem;

    background: rgba(245, 51, 150, 0.08);               
    border-radius: 50%;
    `;
const BubbleDiv = ({children}, props) => {
    return (
        <Frame>
            {children}
            <YellowCircle></YellowCircle>
            <BlueCircle></BlueCircle>
            <RedCircle></RedCircle>
        </Frame>
    )
}

export default BubbleDiv
