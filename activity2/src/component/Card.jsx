import React from 'react';
import Rating from './Rating';
const Card = ({imageUrl, title, price, rating })  => {
    return(
    <div className="card"> 
     <img src={imageUrl} alt={title} className="image" />
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p> 
       <button className = "button-card">Add to cart</button>
       <Rating value={rating}/>
    </div>
    );
};
export default Card;