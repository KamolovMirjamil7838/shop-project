import React from "react";
import BacketItem from "./BacketItem";

function Backetlist(props) {
  const { border, incrementQuantity , decrementQuantity } = props;
  const totalPrice = border.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bsk">
      <ul className="collection backetlist">
        <li className=" collection-item active">Backet</li>;
        {border.length ? (
          border.map((item) => {
            return (
              <BacketItem
                key={item.id}
                {...item}
                removeFromBasket={props.removeFromBasket}
                incrementQuantity ={incrementQuantity}
                decrementQuantity= {decrementQuantity}
              />
            );
          })
        ) : (
          <li className="collection-item">Backet is empty</li>
        )}
        <li className="active collection-item">
          Total Price : {totalPrice} <b>$</b>
        </li>
        <i
          className="material-icons basket-close"
          onClick={props.hendleBacketShov}
        >
          close
        </i>
      </ul>
    </div>
  );
}

export default Backetlist;
