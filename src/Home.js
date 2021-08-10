import React from 'react'
import styled,{css} from 'styled-components'
import BubbleDiv from './components/BubbleDiv'
import FeatureCard from './components/FeatureCard';
import Button from './components/Button';
import Fact from './components/Fact';
import WomenFarmer from './assets/images/image-women-farmer.png';
import HappyPeople from './assets/images/image-people-happy.png';
import DrawingMan from './assets/images/drawing-man.png';
import GlobeUser from './assets/images/icon-globe-user.svg';
import {device} from './Device'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUsers,faShoppingBag, faWeight, faHandshake, faStore} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faUsers,faShoppingBag, faWeight, faStore, faHandshake);
dom.watch();


const Main = styled.div`
    width: 100vw;
`;
const centerFlex= css`
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
`;


const Container = styled.div`
    ${centerFlex}
    margin: 2rem 0;
    padding: 0 10rem;

  
`;

const Container2x = styled.div`
    ${centerFlex}    
    margin: 8rem 0;
    padding: 0 10rem;

    @media ${device.mobile}{
        flex-direction: column;
        padding: 0;
        margin: 10rem 0;
        z-index: 1;
    }
    
    @media ${device.tabletP}{
        padding: 0 3rem;
    }
`;


const columnFlex = css`
    display: flex;
    flex-direction: column;
    width: 100%;

`;
const LeftContainer = styled.div`
    ${columnFlex}
    
   
    @media ${device.mobile}{
       font-size: 2rem;
       text-align: center;
       align-items: center;
       margin: auto 0;
    }
`;
const RightContainer = styled.div`
    ${columnFlex}

    z-index: 1;
    position: relative;

    @media ${device.mobile}{
      display: ${props => props.banner? "none":"flex"};
      text-align: center;
    }
`;

const ColoredWrapper = styled.div`
    ${centerFlex}
    background-color: ${props => props.color? props.color:"#EEEEEE"};
    border-radius: 1rem;
    justify-content: space-evenly;
    @media ${device.mobile}{
        flex-direction: column;
    }
    
`;
const Heading1 = styled.h1`
`;

const Heading2 = styled.h2``;

const HighlightedTitle = styled.span`
background-color: #FBB502;
transform: skew(-20deg);
display: inline-block;

@media ${device.mobile}{
    transform: skew(0);
}
`;
const Body = styled.p`
    font-weight: 300;
    margin: 5rem 0;
    
    @media ${device.mobile}{
        font-size: 2rem;
        line-height: 1.4;
    }
`;
const ButtonGroup = styled.div`
    display: flex;
    z-index: 4;
    justify-content: space-between;
    width: 70%;
    // margin: 0 auto;
    @media ${device.mobile}{
        flex-direction: column;
        z-index:0;
    }
`;
const Image1 = styled.img`
  max-width: 100%;
  display: block;
`;
const Image2 = styled.img`
    max-width: 100%;
    display: block;

    @media ${device.tabletL}{
        max-width: 80%; 
    }
`;


// --------------------------- Connecting People Section ------------------------------
const ConnectingPeople = styled.div`
display: block;
margin-top: 10rem;

&::before, &::after{
    content: "";
    background-color: #eee;
    width: 90%;
    height: .1rem;
    display: block;
    margin: 0 auto;
}

@media ${device.mobile}{
    margin-top: 5rem;
}

@media ${device.tabletP}{
    margin:0;
}
`;
const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 29rem;
@media ${device.mobile}{
    height: 15rem;
}
`;
const SmallText = styled.p`
    // font-weight: 200;
    // font-size: 2rem;
    @media ${device.mobile}{
        margin: 0;
        font-size: 1rem;
    }
`;
const BigText = styled.h1`
    text-transform: capitalize;
    @media ${device.mobile}{
        margin: 0;
        margin-top: -7px;
        font-size: 2rem;
    }
    `;


const ImageWrapper = styled.div`
    margin: 0 auto;
    display: block;

    @media ${device.mobile}{
    height: 270px;
    }
`;

//--------------- WhyUs-------------
const WhyUs = styled.div`
margin: 0 10rem;
& ${Heading1}{
    font-size: 4rem;
}
`;

const Features = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 0 33.33333%;
    @media ${device.mobile}{
        flex-direction: column;
    }
`;

//-------------------------------Are You Ready-----------------\
const AreYouReady = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10rem;

    @media ${device.mobile}{
        margin: 0;
    }

    @media ${device.tabletP}{
        margin: 0;
    }
    @media ${device.tabletL}{
        margin: 0;
    }
`;


const Home = () => {
    return (
        <Main>
            <BubbleDiv>
                <Container2x>
                <LeftContainer>
                    <Heading1> far more is a  
                        <HighlightedTitle> revolution</HighlightedTitle>
                    </Heading1>
                    <Body>A simple fix to ever existing problem.
                         A simple, yet powerful platform to coffee business. 
                         Want to learn more about FarMoreCo? 
                    </Body>
                    <ButtonGroup>
                        <Button id="joinBtn" to="/register" width="18rem" className="btn btn-primary btn-rounded"> 
                            Join now
                        </Button>
                        <Button id="contactBtn" to="/contact" width="18rem" className="btn btn-secondary btn-rounded">
                            contact us
                        </Button>
                    </ButtonGroup>
                </LeftContainer>
                <RightContainer banner>
                    <div style={{width: "39rem"}}>
                    <Image1 src={WomenFarmer} alt="Women Farmer"/>
                    </div>
                    <div style={{width: "46rem",position: 'absolute', top: "62%",left: "20%"}}>
                    <Image2 src={HappyPeople} alt="Happy People"/>
                    </div>
                    
                </RightContainer>
            </Container2x>
            </BubbleDiv>
            <ConnectingPeople>
                <TextWrapper>
                    <SmallText> Trade | Communication | Education</SmallText>
                    <BigText>Connecting People</BigText>
                </TextWrapper>
            </ConnectingPeople>

            <Container2x>
                <LeftContainer>
                   <ImageWrapper>
                       <img src={DrawingMan} alt="Drawing Man" style={{maxHeight: "100%"}}/>
                   </ImageWrapper>
                </LeftContainer>
                <RightContainer>
                <Heading2>Get easy access anytime, anywhere to make most out of coffee business.</Heading2>
                    <Body>Explore a whole new way of doing business. </Body>

                    <p>Some Facts:</p>
                    <ColoredWrapper color="#54A8BB">
                        <Fact icon={faUsers} counter="800" title="Happy Customers"/>
                        <Fact icon={faShoppingBag} counter="1422" title="Bags of Coffee"/>
                        <Fact icon={faWeight} counter="87698" title="Kgs coffee sold"/>
                    </ColoredWrapper>
                </RightContainer>
            </Container2x>

            <WhyUs>
                <Heading2>Why Choose Us?</Heading2>
                <Features>
                    <FeatureCard
                        image={GlobeUser}
                        title="Strong network and supply chain."
                        body="Get connected to millions of consumers and vendors in real time."
                    /> 
                    <FeatureCard
                        icon={faHandshake}
                        title="Trusted by millions of users"
                        body="Our network consists of millions of customers including farmers, suppliers and coffee lovers."
                    /> 
                    <FeatureCard
                        icon={faStore}
                        title="Easy access to global market"
                        body="With online ecommerce service, you are just a click away from getting access to the global market."
                    /> 
                </Features>
            </WhyUs>

            <AreYouReady>
                    <ColoredWrapper>
                    <Container2x>
                <LeftContainer>
                        <Heading2>Are you ready to do business with us?</Heading2>
                </LeftContainer>
                <RightContainer>
                <ButtonGroup style={{width: "80%", margin: "0 auto", justifyContent:"space-evenly"}}>
                        <Button id="joinBtn" to="/register" width="18rem" className="btn btn-primary btn-rounded"> 
                            Sign up now
                        </Button>
                        <Button id="contactBtn" to="/contact" width="18rem" className="btn btn-secondary btn-rounded">
                            get in touch
                        </Button>
                    </ButtonGroup> 
               </RightContainer>
               </Container2x>
                    </ColoredWrapper>
            </AreYouReady>
        </Main>
    )
}

export default Home
