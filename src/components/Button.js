import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {device} from '../Device';


const Background = styled.div`
    display: flex;
    justify-content: center;
    height: 4.9rem;
    align-items: center;
    font-size: 2.4rem;
    line-height: 3.3rem;
    text-transform: uppercase;
    margin-right: 2.5rem;
    cursor: pointer;

   
    @media ${device.laptop}{
        font-size: 2rem;
        width: 100%;
    }
    
    @media ${device.tabletL}{
        font-size: 2rem;
        width: 100%;
    }
    @media ${device.tabletP}{
        font-size: 1.2rem;
        width: 100%;
    }

    @media ${device.mobile}{
        flex-direction: column;
        font-size: 20px;
        font-size: 1.4rem;
        height: 4rem;
        align-items: space-between;
        margin-bottom: 1rem;
        width: 100%;
    }
`;


const Button = ({id, width, className, children, ...restProps}) => {
    return (
        <Link to={restProps.to}>
        <Background onMouseOver={restProps.onMouseOver} className={className} width={width}>
          {children}
        </Background>
        </Link>
    )
}

export default Button
