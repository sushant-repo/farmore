import React from 'react'
import "./Checkout.css";
import Subtotal from './Subtotal';
import BasketItem from '../components/BasketItem';
import { useStateValue } from './utils/StateProvider';
const Checkout = () => {

    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div>
                    <h2 className="checkout__title"> Your Shopping Basket</h2>

                {basket.map((item, index) => (
                    <BasketItem key={index}
                    id={item.id}
                    ownerImage={item.ownerImage}
                    coffeeImage = {item.coffeeImage}
                    name={item.name}
                    owner= {item.owner}
                    price={item.price}
                    rating={item.rating}
                    unit = {item.unit}
                    />
                ))}
                </div>
            </div>
            <div className="checkout__right">
               <Subtotal/>
               
            </div>
        </div>
    )
}

export default Checkout
