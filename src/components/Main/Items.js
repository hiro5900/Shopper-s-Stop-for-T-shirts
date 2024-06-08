import React from "react";
import "./Items.css";

const Items = (props) => {
  function handleClick(size) {
    if (props.itemsDetails[`size${size}`] === 0) return;
    props.setItems((prev) =>
      prev.map((item) => {
        if (item.tShirtName === props.itemsDetails.tShirtName) {
          return {
            ...item,
            [`size${size}`]: item[`size${size}`] - 1,
          };
        }
        return item;
      })
    );
    props.setCartItems((prev) => {
      const item = prev.find(
        (item) =>
          item.name === props.itemsDetails.tShirtName && item.size === size
      );
      if (item) {
        return [
          ...prev.map((item) => {
            if (
              item.name === props.itemsDetails.tShirtName &&
              item.size === size
            ) {
              console.log("increasing quantity");
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          }),
        ];
      }
      return [
        ...prev,
        {
          name: props.itemsDetails.tShirtName,
          size: size,
          quantity: 1,
          price: props.itemsDetails.price,
          description: props.itemsDetails.description,
        },
      ];
    });
  }
  return (
    <>
      <div className="div-item-container">
        <div className="div-item-container-details">
          <h3>{props.itemsDetails.tShirtName}</h3>
          <i>{props.itemsDetails.description}</i>
          <b>Price: {props.itemsDetails.price}</b>
        </div>
        <div className="div-item-container-buy-buttons">
          <button onClick={() => handleClick("L")}>
            Buy L ({props.itemsDetails.sizeL})
          </button>
          <button onClick={() => handleClick("M")}>
            Buy M ({props.itemsDetails.sizeM})
          </button>
          <button onClick={() => handleClick("S")}>
            Buy S ({props.itemsDetails.sizeS})
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
