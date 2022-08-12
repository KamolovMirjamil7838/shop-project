import React from "react";

function GoodItem(props) {
  const { id, name, price, description, full_background,addToBacket } = props;
  return (
    <div className="card" key={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card_content nav">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action ">
        <button onClick={() => addToBacket({id,name,price})} className="btn">Buy</button>
        <span
          className="rigth"
          style={{ fontSize: "1.8rem", marginLeft: "7rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}

export default GoodItem;
