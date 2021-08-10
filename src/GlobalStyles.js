import { createGlobalStyle } from "styled-components";
import AndaleMono from './assets/fonts/AndaleMono.ttf';
import Impact from './assets/fonts/impact.ttf';
import styled from "styled-components";
import {device} from './Device';


export const FlexDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BodyPadding = "2rem 8rem";
export const BodyPaddingMobile = "2rem 3rem";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

*, 
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// --navigation-height: 6rem;

@font-face{
    font-family: 'AndaleMono';
    font-style: normal;
    font-weight: normal;
    src: url('${AndaleMono}') format('truetype');
}

@font-face{
    font-family: 'Impact';
    font-style: normal;
    font-weight: normal;
    src: url('${Impact}') format('truetype');
}

html, 
body{
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 62.5%; // equivalent to 1 rem
    // padding: 0 5em;

    
    @media ${device.mobile}{
        font-size: 50%; //1rem = 8px, 8/16 = 50%

    }
    @media ${device.tabletP}{
        font-size: 50%; //1rem = 8px, 8/16 = 50%

    }
    @media ${device.tabletL}{
        font-size: 56.25%; //1rem = 9px, 9/16 = 56.25%

    }
    @media ${device.desktop}{
        font-size: 75%; //1rem  = 12px, 12/16 = 75%
    }
}

a{
    text-decoration: none;
    text-transform: uppercase;
    transition: color .3s ease;

    &:hover{
        color: #F53396 !important;
    }

    @media ${device.mobile}{
        width: 100%;
    }
}

h1{
    font-size: 5.4rem;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 5;

    @media ${device.mobile}{
        z-index:0;
        font-size: 2.5rem;
    }
}

h2{
    font-size: 3.2rem;
    font-weight: 600;
    text-transform: capitalize;

    @media ${device.mobile}{
        text-align: center;
        font-size: 2.2rem;
        margin: 3rem 0;
    }
}

h3{
    font-size: 2.4rem;
    text-transform: capitalize;
    font-weight: bold;

}

p{
    font-size: 2rem;
    line-height: 150%;
    font-weight: 100;
    margin: 2rem 0;
}

.btn-primary{
    background: #00986A;
    color: white;
}

.btn{
    padding: 2rem 3rem;
    transition: all .3s ease-in-out;
}

.btn:hover{
    color: white;
    background: #00986A;

}
.btn-secondary{
    background-color: none;
    border: 2px solid #00986A;
    color: #00986A;
}

.btn-rounded{
    border-radius: 3rem;
}
.btn-subscription{
    background: rgba(245, 51, 150, 0.08);
    border: 2px solid #F53396;

    color: #F53396;
}

.btn-subscription:hover{
    color: white;
    background:#F53396;
}

ul{
    list-style: none;
    font-size: 1.8rem;
    line-height: 3rem;
}

li a{
    text-transform: capitalize;
    text-decoration: none;
    color: black;
}
`;


export default GlobalStyle;