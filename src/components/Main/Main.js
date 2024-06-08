import React from "react";
import "./Main.css";
import Items from "./Items";

const Main = (props) => {
  return (
    <div className="main-container">
      {props.items.map((element) => (
        <Items
          key={element.tShirtName}
          itemsDetails={element}
          setCartItems={props.setCartItems}
          setItems={props.setItems}
        />
      ))}
    </div>
  );
};

export default Main;
