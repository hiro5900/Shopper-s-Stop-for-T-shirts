import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <nav className="header-title">Shopper's Stop for T-shirts</nav>
      <HeaderCartButton onClick={props.onShowCart} items={props.items} />
    </div>
  );
};

export default Header;
