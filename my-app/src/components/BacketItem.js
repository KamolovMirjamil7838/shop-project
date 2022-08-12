import React from 'react';

function BacketItem(props) {
  const {id,name, price, quantity, incrementQuantity , decrementQuantity} = props;
  return (
   <li className='collection-item'>

    {name} x{quantity} ={price * quantity} <b>$</b>
    <span className='secondary-content'>
      <a className="waves-effect waves-light btnq btn" onClick={()=> incrementQuantity(id) }>
        <i className="material-icons left">add</i>
        add
        </a>
        <a className="waves-effect waves-light btn btnq "  onClick={() => decrementQuantity(id)} style={{marginLeft:10  }} >
        <i className="material-icons left">remove</i>
        remove
        </a>
      <i onClick={()=>props.removeFromBasket(id)} className='material-icons basket-delete'>delete_forever</i>
      <i className='material-icons'>plus</i>
    </span>
   </li>
  );
}

export default BacketItem;