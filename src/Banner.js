import React from 'react'
import styled from 'styled-components';
import * as global from './GlobalStyles';
import {device} from './Device';

const BannerWrapper = styled(global.FlexDiv)`
    color: black;
    width: 100vw;
    position: relative;
    background-color: ${props => props.background};
    height: 50vh;
    @media ${device.mobile}{
        // height: calc(100vh - 5rem);
    }
    // height: calc(100vh - 10rem);

`;

const BannerImageWrapper = styled(global.FlexDiv)`
height: inherit;
align-items: flex-end;
position: absolute;
right: 0;
bottom: 0;
`;

const TitleWrapper = styled(global.FlexDiv)`
flex-direction: column;
align-items: flex-start;
line-height: 1.3;
letter-spacing: 3px;
position: absolute;
width: 45%;
top: 10%;
left: 5%;
z-index: 10;
font-size: 9rem;
// font-family: "Impact", sans-serif;

@media ${device.tabletL}{
    font-size: 7rem;
    line-height: 1;
}
@media ${device.tabletP}{
    font-size: 5rem;
    line-height: 1;
}
@media ${device.mobile}{
    font-size: 4rem;
    line-height: 1;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;



const Image = styled.img`
    width: ${props => props.home==="home"?"85vw":"50rem"};
    height: ${props => props.home==="home"?"inherit":"auto"};
    object-fit: cover;
    object-position:bottom;  
    }
    @media ${device.tabletL}{
        width: ${props => props.home ==="home" ?"70rem":"50rem"};
    }
    @media ${device.tabletP}{
    width: ${props => props.home==="home"?"70rem":"30rem"};
    }
    @media ${device.mobile}{
        display: none;
    }
    `;

const BannerTitle1 = styled.h1`
display: block;

// font: ${props => props.home==="home"?"inherit":"8rem Impact"};


@media ${device.tabletP}{
    font: ${props => props.home==="home"?"inherit":"5rem Impact"};
}

@media ${device.mobile}{
    width: 100%;
    text-align: center; 
    font: ${props => props.home==="home"?"inherit":"3rem Impact"};

}

`;
const BannerTitle2 = styled.h1`
display: block;
font: inherit;

@media ${device.mobile}{
    width: 100%;
    text-align: center;    
}
`;


const BannerPaint = styled(global.FlexDiv)`
    position: absolute;
    bottom: 0;
    left: 5%;
`;

const Gesture = styled.img`
width: auto;
height: inherit;
object-fit: cover;
object-position:top;

@media ${device.tabletL}{
    position: absolute;
    left: 5%;
    bottom: 1rem;
    width: 30rem;
}

@media ${device.tabletP}{
    position: absolute;
    left: 5%;
    bottom: 1rem;
    width: 20rem;

}
@media ${device.mobile}{
    display: none;
}

`;

const Banner = ({page, image, paint, title1, title2, backgroundColor}) => {
    return (
        <BannerWrapper background ={backgroundColor} home={page}>
        <BannerImageWrapper>
            <Image src={image} home={page} alt="banner image"/>
        </BannerImageWrapper>
        <TitleWrapper>
            <BannerTitle1 home={page}>
                {title1}
            </BannerTitle1>
            <BannerTitle2>
            {title2}
        </BannerTitle2>
        </TitleWrapper>
       
        <BannerPaint>
        {paint?<Gesture src={paint} alt="gesture yellow"/>:""}
        </BannerPaint>
    </BannerWrapper>
    )
}

export default Banner
