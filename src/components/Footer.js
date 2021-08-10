import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';
import LogoBlack from "../assets/images/logo-black.png";
import {device} from '../Device';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button';

library.add(fab, faFacebook, faInstagram, faLinkedinIn, faTwitter);
dom.watch();

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(50, 102, 227, 0.17);

    margin-top: -1rem;
    padding-top: 6rem;
`;

const Top = styled.div`   
    margin: 0 10rem;
    display: flex;
    align-items: flex-start;

    @media ${device.mobile}{
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;

    }

`;

const subdivStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 24%;
`;

const Heading = styled.h3`
font-weight: bold;
font-size: 22px;
line-height: 30px;

display: flex;
align-items: center;
color: black;
`;

const Logo = styled.div`
    ${subdivStyles}
    height: inherit;
    width: 24%;

    @media ${device.mobile}{
        width: 100%;
        align-items: center;
    }
`;

const mobileMargins = css `
    @media ${device.mobile}{
        width: 100%;
        margin-top: 3rem;
    }
`;
const Account = styled.div`
    ${subdivStyles}
    
   ${mobileMargins}
`;
const Legal = styled.div`
    ${subdivStyles}
    ${mobileMargins}

`;
const Contact = styled.div`
    ${subdivStyles}
    ${mobileMargins}
    
`;

const Socials = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Bottom = styled.div`
    margin: 2rem 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${device.mobile}{
        margin: 2rem 3rem;
    }
`;

const Title = styled.h2`
    text-transform: capitalize;
    display: block;
    margin-top: 5rem;
    margin-bottom: 2rem;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.mobile}{
        flex-direction: column;
        width: 100%;
    }
`;

const Email = styled.input`
    height: 4.9rem;
    width: 44rem; 
    @media ${device.mobile}{
        width: 100%;
    }
`;
const Copyright = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #00986A;

    height: 5.7rem;
    font-size: 15px;
    line-height: 20px;
    @media ${device.mobile}{
        text-align: center;
    }

`;
const Footer = () => {

    const[email, setEmail] = useState("");

    return (
        <Container>
            <Top>
            
            <Logo>
                <img src={LogoBlack} alt="Farmore Logo Footer" style={{maxWidth: "100%", width: "30%"}}/>
            </Logo>
            <Account>
                <Heading>Account</Heading>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Create Account</Link>
                    </li>
                    <li>
                        <Link to="/product">Offerings</Link>
                    </li>
                    <li>
                        <Link to="/origin">Origins</Link>
                    </li>
                </ul>
            </Account>
            <Legal>
            <Heading>Legal</Heading>

            <ul>
                    <li>
                        <Link to="/terms-of-use">Terms of Use</Link>
                    </li>
                    <li>
                        <Link to="/terms-and-conditions">Terms &#38; Conditions</Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>
            </Legal>
            <Contact>
            <Heading>Contact Us</Heading>

            <ul>
                    <li>
                        info@farmore.co
                    </li>
                    <li>
                    (+61) 432 251 948
                    </li>
                    <li>
                       <Socials>
                           <Link to ="#">
                                <FontAwesomeIcon icon={faFacebook}/>
                           </Link>
                           <Link to ="#">
                                <FontAwesomeIcon icon={faInstagram}/>
                           </Link>
                           <Link to ="#">
                                <FontAwesomeIcon icon={faTwitter}/>
                           </Link>
                           <Link to ="#">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                           </Link>
                       </Socials>
                    </li>
                </ul>
            </Contact>
            </Top>
            <Bottom>
                <Title>Join our mailing list</Title>
                <InputContainer>
                    <Email type="email" placeholder="EmailAddress" onChange={(e) => setEmail(e.target.value)} value={email}></Email>
                    <Button to="/api/subscription" className="btn btn-subscription" width="400px">Join</Button>
                </InputContainer>
            </Bottom>
           

            <Copyright>
                Copyright &copy; 2021/22 Farmore Holdings. All Right Reserved. Designed by Sushant Thapa.
            </Copyright>
        </Container>
    )
}

export default Footer
