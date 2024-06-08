import React, { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Cart from "./components/Cart/Cart";

function App() {
  const [itemsArray, setItemsArray] = useState([
    {
      tShirtName: "Navy Blue T-shirt",
      description: "100% Cotton",
      price: `$${1200}`,
      sizeL: 12,
      sizeM: 10,
      sizeS: 30,
    },
    {
      tShirtName: "MotoGP T-shirt",
      description: "Blue and yellow, made of 100% Cotton",
      price: `$${5000}`,
      sizeL: 29,
      sizeM: 30,
      sizeS: 30,
    },
    {
      tShirtName: "PUBG Shirt",
      description: "PUBG White T-shirt made of 100% cotton",
      price: `$${120}`,
      sizeL: 29,
      sizeM: 66,
      sizeS: 21,
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  console.log("cartItems", cartItems);

  const [cartIsShown, setIsCartIsShown] = useState(false);

  const showCartHandler = () => {
    setIsCartIsShown(true);
  };

  const hideCartHandler = () => {
    setIsCartIsShown(false);
  };

  const submitHandler = (item) => {
    setItemsArray((prev) => {
      const _item = prev.find((i) => i.tShirtName === item.tShirtName);
      if (_item) {
        return [
          ...prev.map((i) => {
            if (i.tShirtName === item.tShirtName) {
              return item;
            }
            return i;
          }),
        ];
      }
      return [...prev, item];
    });
  };
  return (
    <>
      {cartIsShown && (
        <Cart
          onClose={hideCartHandler}
          items={cartItems}
          setCartItems={setCartItems}
        />
      )}
      <Header onShowCart={showCartHandler} items={cartItems.length} />
      <Form items={itemsArray} onSubmit={submitHandler} />
      <Main
        items={itemsArray}
        setCartItems={setCartItems}
        setItems={setItemsArray}
      />
    </>
  );
}

export default App;
