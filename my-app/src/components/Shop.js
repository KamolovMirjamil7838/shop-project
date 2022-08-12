import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Card from "./Card";
import Backetlist from "./Backetlist";


function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [border, setBorder] = useState([]);
  const [isbacketShov,setbacketShov] = useState(false)

  const addToBacket = (item) => {
    const itemIndex = border.findIndex(
      (borderItem) => borderItem.id === item.id
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setBorder([...border, newItem]);
    } else {
      const newBorder = border.map((borderItem, index) => {
        if (index === itemIndex) {
          return {
            ...borderItem,
            quantity: borderItem.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setBorder(newBorder)
    }


  };
 const hendleBacketShov = ()=>{
  setbacketShov(!isbacketShov)
}
const removeFromBasket =(itemID)=>{
 const newBorder = border.filter(item => item.id !==itemID)
 setBorder(newBorder)
}
const incrementQuantity =(itemID)=>{
  const newBorder = border.map(el => {
    if(el.id === itemID){
      const newQuantity = el.quantity +1;
      return{
       ...el,
       quantity : newQuantity ,
      }
    } else {
     return el 
    }
  })
  setBorder (newBorder)
}
const decrementQuantity =(itemID)=>{
  const newBorder = border.map(el => {
    if(el.id === itemID){
      const newQuantity = el.quantity -1;
      return{
       ...el,
       quantity : newQuantity >=0 ? newQuantity : 0 ,
      }
    } else {
     return el 
    }
  })
  setBorder (newBorder)
}

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content">
      <Card quantity={border.length} hendleBacketShov={hendleBacketShov} />
      {loading ? <Loader /> : <GoodList goods={goods} addToBacket={addToBacket} />}
      {isbacketShov && <Backetlist 
      removeFromBasket={removeFromBasket} 
      border={border}
      hendleBacketShov={hendleBacketShov} 
      incrementQuantity = {incrementQuantity}
      decrementQuantity = {decrementQuantity}
       />  }
    </div>
  );
}

export default Shop;
