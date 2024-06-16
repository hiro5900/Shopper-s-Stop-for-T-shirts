import React from "react";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  return (
    <div className="cart-button" onClick={props.onClick}>
      <div>Cart {props.items > 0 ? props.items : undefined}</div>
    </div>
  );
};

export default HeaderCartButton;
