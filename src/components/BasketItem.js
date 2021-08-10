import React from 'react'
import { useStateValue } from '../pages/utils/StateProvider';
import './BasketItem.css';
const BasketItem = ({id, ownerImage, coffeeImage, name, owner, rating, price, unit}) => {

    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
    //remove the item from the basket

        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }  
    return (
        <div className="container">
            <div className="container__image">
            <img className="image__coffee" src={coffeeImage} alt="Coffee Image"/> 
            <img className="image__owner" src={ownerImage} alt="Owner Image"/> 
            </div>
       <div className="container__info">
           <p className="name">{name} <span className="owner">({owner})</span></p>
           <p className="price">
               <small>$</small>
               <strong>{price} </strong>
               per {unit}
           </p>
           <p className="rating">
               {Array(rating).fill().map((_, i)=>(
                   <p className="star">⭐️</p> 
                   ))}
           </p>
           <button className="btn btn-primary" onClick={removeFromBasket}>
               Remove from Basket
           </button>
       </div>
        </div>
    )
}

export default BasketItem
