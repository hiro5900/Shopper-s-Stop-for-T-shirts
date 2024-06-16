import React, {useState} from 'react'
import './Form.css'

const Form = (props) => {
     const [tShirtName, setTShirtName] = useState();
     const [description, setDescription] = useState();
     const [price, setPrice] = useState();
     const [sizeL, setSizeL] = useState();
     const [sizeM, setSizeM] = useState();
     const [sizeS, setSizeS] = useState();

     // On change handlers
     const tShirtNameCHangeHandler = (event) => {
          setTShirtName(event.target.value)
          console.log('T shirt name change handler', tShirtName)
     }

     const descriptionChangeHandler = (event) => {
          setDescription(event.target.value);
     }

     const priceChangeHandler = (event) => {
          setPrice(event.target.value)
     }

     const sizeLChangeHandler = (event) => {
          setSizeL(event.target.value)
     }

     const sizeMChangeHandler = (event) => {
          setSizeM(event.target.value)
     }

     const sizeSChangeHandler = (event) => {
          setSizeS(event.target.value)
     }

     // On submit handler
     const onSubmitHandler = (event) => {
          event.preventDefault();
          let formItemsDetails = {
               tShirtName: tShirtName,
               description: description,
               price: `$${price}`,
               sizeL: sizeL,
               sizeM: sizeM,
               sizeS: sizeS
          }

          props.onSubmit(formItemsDetails)
     }
     return (
          <div className='div-form'>
               <form onSubmit={onSubmitHandler}>
                    <label>T-shirt Name </label>
                    <input type='text' onChange={tShirtNameCHangeHandler}/>
                    <br></br>
                    <label>Description </label>
                    <input type='text' onChange={descriptionChangeHandler}/>
                    <br></br>
                    <label>Price </label>
                    <input type='number'onChange={priceChangeHandler}/>
                    <br></br>
                    <label>Quantity Available: </label>
                    <label>L </label>
                    <input type='number' className='div-form-input-size' onChange={sizeLChangeHandler}/>
                    <label>M </label>
                    <input type='number' className='div-form-input-size'onChange={sizeMChangeHandler}/>
                    <label>S </label>
                    <input type='number' className='div-form-input-size'onChange={sizeSChangeHandler}/>
                    <br></br>
                    <button type='submit' className='div-form-button'>Add Product</button>
               </form>
          </div>
     )
}

export default Form; 
