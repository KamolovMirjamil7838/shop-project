import React from 'react';

function Card(props) {
  const {quantity = 0,hendleBacketShov=Function.prototype}= props
  return (
    <div className='Card blue white-text darken-4' onClick={hendleBacketShov}>
      <i className=' material-icons'>add_shopping_cart</i>
      {quantity ? <span className='card-quantity'>{quantity}</span> : null}
      
    </div>
  );
}

export default Card;