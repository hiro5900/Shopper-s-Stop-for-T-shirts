import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [item, setItem] = useState({});

  // On change handlers
  const tShirtNameCHangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      tShirtName: event.target.value,
    }));
  };

  const descriptionChangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      description: event.target.value,
    }));
  };

  const priceChangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      price: event.target.value,
    }));
  };

  const sizeLChangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      sizeL: event.target.value,
    }));
  };

  const sizeMChangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      sizeM: event.target.value,
    }));
  };

  const sizeSChangeHandler = (event) => {
    setItem((prev) => ({
      ...prev,
      sizeS: event.target.value,
    }));
  };

  // On submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(item);
    setItem({});
  };
  return (
    <div className="div-form">
      <form onSubmit={onSubmitHandler}>
        <label>T-shirt Name </label>
        <input
          type="text"
          value={item.tShirtName || ""}
          onChange={tShirtNameCHangeHandler}
        />
        <br></br>
        <label>Description </label>
        <input
          type="text"
          value={item.description || ""}
          onChange={descriptionChangeHandler}
        />
        <br></br>
        <label>Price </label>
        <input
          type="number"
          value={item.price || ""}
          onChange={priceChangeHandler}
        />
        <br></br>
        <label>Quantity Available: </label>
        <label>L </label>
        <input
          type="number"
          className="div-form-input-size"
          value={item.sizeL || ""}
          onChange={sizeLChangeHandler}
        />
        <label>M </label>
        <input
          type="number"
          className="div-form-input-size"
          value={item.sizeM || ""}
          onChange={sizeMChangeHandler}
        />
        <label>S </label>
        <input
          type="number"
          className="div-form-input-size"
          value={item.sizeS || ""}
          onChange={sizeSChangeHandler}
        />
        <br></br>
        <button type="submit" className="div-form-button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
