import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStateValue } from '../pages/utils/StateProvider';


const centerFlex = css`
    display: flex; 
    align-items:center;
    justify-content: center;
`;


const Image = styled.div` 
`;
const Content = styled.div`
    background-color: white;
    position: absolute;
    right: 4rem;
    bottom: 4rem;
    width: 50%;
    padding: 2rem;
    height: 29.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
const CoffeeImage = styled.img`
    display: block;
    max-height: 48.4rem;
    width: 100%;
    object-fit: cover;
    opacity: .4;
`;
const OwnerImage = styled.img`
display: none;
max-height: 48.4rem;
    width: 100%;
    object-fit: cover;
    opacity: .4;
`;

const Container = styled.div`
  position: relative;
  margin: 0 10rem;
    max-height: 49rem;
    height: 48.4rem;
    max-width: 48%;
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
const Name = styled.h2`
font-size: 2.5rem;
letter-spacing: 1.3px`;
const Owner = styled.p`
margin: 0;
font-size: inherit;
`;
const Rating = styled.div`
display: flex;
filter: hue-rotate(
    283deg
    );
    
`;
const Price = styled.p`
width: 100%`;
const Cart = styled.div`
${centerFlex}
    padding: 1rem .5rem ;
    background-color: #ddd;
    text-transform: uppercase;
    cursor: pointer;

`;
const More = styled.div`
${centerFlex}
    padding: 1rem .5rem ;
    background-color: #ddd;
    text-transform: uppercase;
    cursor: pointer;

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
const ButtonGroup = styled.div`
${centerFlex}
width: 100%;
justify-content: space-between;
`;
const FeaturedCoffee = ({id, coffeeImage, ownerImage, name, owner, rating, price, unit, more, addToCart}) => {
    
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
            </Image>
            <Content>
                <Top>
            <Name>{name}</Name>
            <Row>
            <Owner>- {owner}</Owner>
            <Rating>
            {Array(rating).fill().map((_, i)=>(
                   <p key={i}>⭐️</p> 
                    ))}
        
            </Rating>
            </Row>
            </Top>
            <Bottom>
            <Price>
                <small>$</small> 
                <strong>
                    {price} </strong>
                <small>per {unit}</small>
            </Price>
            <ButtonGroup>
            <Cart onClick = {addToBasket}>
                Add to Cart
                <FontAwesomeIcon icon={addToCart}/>
            </Cart>
            <More>
                Read More
                <FontAwesomeIcon icon={more}/>

            </More>
            </ButtonGroup>
            </Bottom>
            </Content>
        </Container>
    )
}

export default FeaturedCoffee
