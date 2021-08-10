import React from 'react'

import * as global from './GlobalStyles.js';
import styled,{css} from 'styled-components';
import {device} from './Device';
import CardWithImage from './CardWithImage.js';
import Man from "./assets/images/vector-man.png";
import CoffeeHand from './assets/images/vector-coffee-hand.png'
import LogoBlack from './assets/images/logo-black.png';
import CoffeeWithLeaves from './assets/images/vector-coffee-leaves.png'
import BubbleDiv from './components/BubbleDiv';
import Button from './components/Button';

const LandingContent = styled.div`
    display: flex;
    width: 100%;
    padding: 0 10rem;

    @media ${device.mobile}{
        display: inline-block;
        text-align:center;
        padding: 0 3rem;
        z-index: 1;
    }
`;

const Main = styled.div`
    height: 100vh;
    width: 100vw;

    @media ${device.mobile}{
    // height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;

const Logo = styled.img`
    position: absolute;
    width: 6.1rem;
    height: 6.8rem;
    top: 4.1rem;

    @media ${device.mobile}{
        position: static;
        width: 4.1rem;
        height: 4.8rem;
        margin: 3rem auto;
      }
`;

const LeftContent = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
@media ${device.mobile}{
    align-items: flex-start;
    margin:0;

}

`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 57.8rem;

    @media ${device.mobile}{
        width: 100%;
    }
`;
const Title= styled.h1`
    font-weight: 600;
    font-size: 5.4rem;
    line-height: 5.9rem;
    width: 41.9rem;

    text-transform: uppercase;

    @media ${device.mobile}{
        font-size: 2rem;
        width: 100%;
        line-height: 1rem;
    }
`;
const Subtitle = styled.h1`
    font-weight: 500;
    font-size: 3.7rem;
    line-height: 5rem;
    letter-spacing: 0.09em;

    text-transform: uppercase;
    width: 46.4rem;

    @media ${device.mobile}{
        font-size: 1.5rem;
        width: 100%;
    }
`;


const Body=styled.p`
    margin-top: 4rem;
    font-size: 1.8rem;
    line-height: 2.5rem;
    font-weight: normal;
    background-color: rgba(255,255,255,0.3);
    @media ${device.mobile}{
        margin-top: 2rem;
        font-size: 1.3rem;
    }
`;


const Question = styled.p`
    text-transform: uppercase;
    margin-top: 4rem;
    @media ${device.mobile}{
        font-size: 1.5rem;
    }
`;


const Redirector = styled.div`
display: flex;
margin-top: 2.7rem;

@media ${device.mobile}{
    flex-direction: column;
}
`;

const ImageSection= styled.div`
display: flex;
justify-content: center;
align-items: center;

margin: 0 auto;
position: relative;
height: 100%;
width: 100%;

@media ${device.mobile}{
    display: none;
}
`;
const OuterDashedCircle = styled.div`
    height: 60.3rem;
    width: 60.3rem;

    border-radius: 50%;
    border-top: .2rem dashed #000000;
    border-right: .2rem dashed #000000;
    position: absolute;
    right: 1rem;
    display: flex;
    justify-content: center;
    z-index:-1;

`;


const ImageSharable = css`
height: 50.3rem;
    width: 56.7rem;
    border-radius: 50%; 
   
    position: absolute;
    overflow: hidden;
    bottom: .6rem;
    left: 2rem;
    & img{
        transform: scale(.8);
    }
    `;
const PersonImage = styled.div`
    ${ImageSharable}
`;
const CoffeeImage = styled.div`
    ${ImageSharable}
    display: none;
`;
const LeavesImage = styled.div`
    ${ImageSharable}
    display: none;
    & img{
        transform: scale(.6);
    }
`;

const Landing = () => {

    const handleHoverIn = (e) => {
            document.getElementById("farmerImage").style.display= e.innerHTML === "farmer"?"block": "none";
            document.getElementById("wholesellerImage").style.display= e.innerHTML === "wholeseller"? "block":"none";
            document.getElementById("consumerImage").style.display= e.innerHTML === "consumer"? "block":"none";
        }
   
    return (
        <Main>
<BubbleDiv>
    <LandingContent>
    <LeftContent>

    <Logo src={LogoBlack} alt="Farmore Logo"/>
    <Content>
        <Title>Far More Than Coffee</Title>
        <Subtitle>It's a movement</Subtitle>
        <Body>
            We are not just doing business, we are trying to change lives. When you are doing business with Farmore, 
            you are indirectly making an impact in hardworking farmers' lives. We present you with some high quality and highly demanded coffee.
        </Body>

        <Question>Who do you identify as?</Question>
    
        <Redirector>
            <Button id="farmerBtn" width="15rem" className="btn btn-primary btn-rectangle" to="/home" onMouseOver={(e)=> handleHoverIn(e.target)}>
                farmer
            </Button>
            <Button id="wholesellerBtn" width="25rem" className="btn btn-secondary btn-rectangle" to="/products" onMouseOver={(e)=> handleHoverIn(e.target)}>
                wholeseller
            </Button>
            <Button id="consumerBtn"  width="19rem" className="btn btn-secondary btn-rectangle" to="/home" onMouseOver={(e)=> handleHoverIn(e.target)}>
                consumer
            </Button>
        </Redirector>
    </Content>
    </LeftContent>

    <ImageSection>
        <OuterDashedCircle>
            <PersonImage id="farmerImage">
                <img src={Man} style={{objectFit: "cover", position: "absolute", bottom: ".1rem"}} alt="Farmer"/>
            </PersonImage>
            <CoffeeImage id="wholesellerImage">
                <img src={CoffeeHand} style={{objectFit: "cover", position: "absolute", bottom: ".1rem"}} alt="Wholeseller"/>
            </CoffeeImage>
            <LeavesImage id="consumerImage">
                <img src={CoffeeWithLeaves} style={{objectFit: "cover", position: "absolute", bottom: ".1rem"}} alt="Consumer"/>
            </LeavesImage>
        </OuterDashedCircle>
        
    </ImageSection>
    </LandingContent>
</BubbleDiv>
</Main>
    );
}

export default Landing
