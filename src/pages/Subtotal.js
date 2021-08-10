import React from 'react'
import styled from 'styled-components'
import { getBasketTotal } from './utils/reducer';
import { useStateValue } from './utils/StateProvider';

const Container = styled.div`
display: flex;
flex-direction: column; 
justify-content: flex-start;
width: 300px;
height: 100%;
padding: 20px;
background-color: #f3f3f3;
border: 1px solid #dddddd;
border-radius: 3px;
`;
const Gift = styled.small`
display: flex;
align-items: center;
font-size: 1.4rem;
margin-bottom: .5rem;

input{
    margin-right: .5rem;
}
`;

const Subtotal = () => {

    const [{basket}] = useStateValue();

    return (
        <Container>
            <p>
                Subtotal ({basket.length} items): $ <strong>{getBasketTotal(basket)}</strong>
            </p>
            <Gift>
                <input type="checkbox"/> This order contains a gift
                </Gift>
                <button className="btn btn-primary">Proceed to Checkout</button>
        </Container>
    )
}

export default Subtotal
