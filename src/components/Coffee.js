import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../pages/utils/StateProvider';


const centerFlex = css`
    display: flex; 
    align-items:center;
    justify-content: center;
`;

const ButtonGroup = styled.div`
    ${centerFlex}
    flex-direction: column;
    width: 50%;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: 0;
    font-size:1.9rem;

    transition: all .3s ease-in;

`;

const Container = styled.div`
    position: relative;
    margin: 0 10rem;
    max-height: 49rem;
    height: 48.4rem;
    max-width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;

    
`;
const CoffeeImage = styled.img`
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;

    transition: all .3s ease-in-out;

`;
const OwnerImage = styled.img`
    display: block;
    position: absolute;
    top: 0;

    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: .1;
    transition: all .3s ease-in-out;

`;
const Image = styled.div` 
position: relative;
height: 80%;
transition: all .3s ease-in-out;
    &:hover {
        ${OwnerImage}{
            z-index: 1;
            opacity: 1;
        }

        ${ButtonGroup}{
            opacity: 1;
        }
    } 
     
`;
const Content = styled.div`
   width: 100%;
    
`;

const Name = styled.h2`
font-size: 2rem;
letter-spacing: 1.3px;
line-height: 2;
`;

const Owner = styled.p`
font-size: 1.6rem;
`;
const Rating = styled.div`
position: absolute;
top: -2rem;
right: .4rem;
z-index: 10;
display: flex;
filter: hue-rotate(
    283deg
    );
    
`;
const Price = styled.p`
font-size: 1.6rem;
`;
const Cart = styled.div`
${centerFlex}
justify-content: space-evenly;
    padding: 1rem .5rem ;
    background-color: #ddd;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%; 
    margin: .5rem 0;

`;
const More = styled.div`
${centerFlex}
justify-content: space-evenly;

    padding: 1rem .5rem ;
    background-color: #ddd;
    text-transform: uppercase;
    cursor: pointer;
    width: 100%; 

    `;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 2.7rem;
    font-size:1.9rem;
    align-items: center;
    justify-content: space-between;
`;

const Top = styled.div`
${centerFlex}
flex-direction: column;
align-items: flex-start;
`;
const Bottom = styled.div`
${centerFlex}
justify-content: flex-start;
`;

const Coffee = ({id, coffeeImage, ownerImage, name, owner, rating, price, unit, more, addToCart}) => {
    const [{basket}, dispatch] = useStateValue();
    console.log("this is the basket" , basket);
    const addToBasket = () =>{
        console.log("clicked");
        //dispatch the item to the basket in data layer
        
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                name: name,
                owner: owner,
                price: price,
                unit: unit,
                rating: rating,
                coffeeImage: coffeeImage,
                ownerImage: ownerImage,
            }
        })
    }
   
    return (
        <Container>
            <Image>
                <CoffeeImage src={coffeeImage} alt="coffeeImage"/>
                {/* <CoffeeImage src="https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg" alt="coffeeImage"/> */}
                <OwnerImage src={ownerImage} alt="coffeeImage"/>
                {/* <OwnerImage src="https://eco-business.imgix.net/ebmedia/fileuploads/4932164676_69d92d2ed5_k.jpg?fit=crop&h=960&ixlib=django-1.2.0&w=1440" alt="coffeeImage"/> */}
                <Rating>
                {Array(rating).fill().map((_, i)=>(
                   <p key={i}>⭐️</p> 
                    ))}
            </Rating>
            <ButtonGroup>
            <Cart onClick={addToBasket}>
                Add to Cart
                <FontAwesomeIcon icon={addToCart}/>
            </Cart>
            <More>
                Read More
                <FontAwesomeIcon icon={more}/>

            </More>
            </ButtonGroup>
            </Image>
            <Content>
                
            <Name>{name}</Name>
            <Row>
            <Owner>{owner}</Owner>
            <Price>
                <small>$</small> 
                <strong>
                    {price} </strong>
                <small>per {unit}</small>
            </Price>
            </Row>
            
            </Content>
        </Container>
    )
}

export default Coffee
