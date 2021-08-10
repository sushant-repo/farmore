import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import LogoBlack from './assets/images/logo-black.png';
import LogoWhite from './assets/images/logo-white.png';

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser,faSearch, faGlobe, faShoppingCart, faBars, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {device} from './Device';
import styled from 'styled-components';
import * as global from './GlobalStyles.js';
import { useStateValue } from './pages/utils/StateProvider';

library.add(fab, faUser,faGlobe, faBars,faSearch, faUpload, faShoppingCart);
dom.watch();



const NavWrapper = styled(global.FlexDiv)`
    justify-content: flex-start;
    padding: .4rem 0;
    line-height: 19.52px;
    width: 100%;
    height: 8rem;
    font-size: 1.7rem;
    z-index: 1;
    position: relative;

    @media ${device.mobile}{
        padding: 1rem;
        justify-content:space-between;
        // height: 5rem;
     }
    
   

`;
const NavImageWrapper = styled(global.FlexDiv)`
    width: 10%;
    @media ${device.mobile}{
        width: 33.333%;
    }
   
`;

const NavMenuWrapper = styled(global.FlexDiv)`
    width: 90%;  
    justify-content: center;

    @media ${device.mobile}{
        position: absolute;
        display: none;
    }
 
`;

const MenuWrapper = styled(global.FlexDiv)`
    justify-content: space-evenly;
    width: 50%;
    @media ${device.tabletP}{
        width: 75%;
    }
    @media ${device.tabletL}{
        width: 75%;
    }
    @media ${device.mobile}{
        flex-direction: column;
        position: absolute;
        top: 0;
     }
`;


const NavActionWrapper = styled(global.FlexDiv)`
justify-content: space-evenly;
width: 10%;
& a{
    color: black;
    font-size: 85%;
}

@media ${device.mobile}{
    width: 33.333;
}
`;
const Logo = styled.img`
    height: 7rem;
    width: 6.2rem;

    @media ${device.mobile}{
        height: 3rem;
        width: 3rem;
     }
`;
const mobileMenu = `
background-color: #e2e2e2;
    display: flex; 
    flex-direction: column; 
    color: black;
    height: 100vh;
    height: calc(100vh - 5rem);
    top: 5rem;
    width: 100vw;
    left: 0;
    line-height: 2;
    z-index: 1000;
    text-align: center;
    
    @media ${device.tabletP}{
        display: none;
    }
   
    `;


const NavMenu = styled(global.FlexDiv) `

    & a{
        color: inherit;
        font-size: inherit;
        font-weight: 300;
        
        &:active,
        &:hover{
            transform: scale(1.1);
            font-weight: 400;
        }
    }
    @media ${device.mobile}{
        width: 100%;
        justify-content: center;
    }
    @media ${device.tabletP}{
        font-size: 80%;
    }
`


const ItemCounter = styled(global.FlexDiv)`
background-color:  #F8F8F8;
border-radius: 50%;
border: 1px solid black;
height: 1.8rem;
width: 1.8rem;
color: black;

font-size: 70%;
position: absolute;
top: -1.8rem;
left: -1px;
transition: all .3s ease;

 @media ${device.tabletP}{
    height: 1rem;
    width: 1rem;
    top: -1.1rem;
    font-size: .6rem;
 }
 @media ${device.mobile}{
    height: .9rem;
    width: .9rem;
    top: -.9rem;
    font-size: .5rem;
 }
`;


const CartWrapper = styled(global.FlexDiv)`
justify-content: space-around;
position: relative;
transition: color .3s ease;


&:hover{
    color:#F53396 !important;
    }
    &:hover ${ItemCounter}{
        background-color:#F53396 !important;
        color: white; 
        border: none;

    }
}

@media ${device.mobile}{
font-size: 70%;
}
`;

const MenuIconWrapper  = styled(global.FlexDiv)`
font-size: 70%;

display: none;
cursor: pointer;
transition: color, transform .3s ease;

&:hover{
    color:#F53396 !important;
    }

@media ${device.mobile}{
    width: 33.3333%;
    display:flex;
}
`;


const Navigation = () =>{
    const [{basket}, dispatch] = useStateValue();


    const[isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        window.addEventListener("resize", () =>  {
            console.log(window.innerWidth);
        if(window.innerWidth > 600) {
            document.getElementById("navMenuWrapper").style.cssText = null;
        }
    }); 
    console.log("default" , isOpen);
    document.getElementById("menuBarIcon").style.transform = isOpen?"rotate(90deg)":"rotate(0)";
    document.getElementById("navMenuWrapper").style.cssText = isOpen?mobileMenu:null;
    })
   const closeMenu = () =>{
        setIsOpen(false);
   }
    return (
        <NavWrapper>
            <NavImageWrapper>
                <Link to="/">
                    <Logo src={LogoBlack} alt="FarMore Logo"/>
                </Link>
            </NavImageWrapper>

            <NavMenuWrapper id="navMenuWrapper">
                <MenuWrapper>
                    <NavMenu>
                        <Link to="/products" onClick={closeMenu}>Offerings</Link>
                    </NavMenu>
                    <NavMenu>
                        <Link to="/origins" onClick={closeMenu}>Origins</Link>
                    </NavMenu>
                    <NavMenu>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                    </NavMenu>
                    <NavMenu>
                        <Link to="/coffee-club" onClick={closeMenu}>coffee club</Link>
                    </NavMenu>
                    <NavMenu>
                        <Link to="/contact" onClick={closeMenu}>contact</Link>
                    </NavMenu>
                </MenuWrapper>

            </NavMenuWrapper>
            <NavActionWrapper>
            <a >
            <CartWrapper>
                    <FontAwesomeIcon icon={faSearch}/> 
            </CartWrapper>
            </a>
            <Link to="/login">

            <CartWrapper>
                    <FontAwesomeIcon icon={faUser}/> 
            </CartWrapper>
            </Link>
            <a>
            <CartWrapper>
                    <FontAwesomeIcon icon={faGlobe}/> 
            </CartWrapper>
            </a>
            <Link to="/product/upload">
            <CartWrapper>
                <FontAwesomeIcon icon={faUpload}/> 
            </CartWrapper>
            </Link>
            <Link to="/checkout">
                <CartWrapper>
                    <ItemCounter>{basket?.length}</ItemCounter>
                    <FontAwesomeIcon icon={faShoppingCart}/> 
                </CartWrapper>
            </Link>
           
            </NavActionWrapper>
            <MenuIconWrapper id="menuBarIcon" 
            onClick={(e) => {
                setIsOpen(!isOpen);
                }
                }>
                <FontAwesomeIcon  icon={faBars}/> 
            </MenuIconWrapper>
        </NavWrapper>
    )
}

 
export default Navigation;
