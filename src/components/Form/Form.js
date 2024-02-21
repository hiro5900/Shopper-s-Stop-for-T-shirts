import React from 'react'
import './Form.css'

const Form = () => {
     return (
          <div className='div-form'>
               <form>
                    <label>T-shirt Name </label>
                    <input type='text' />
                    <br></br>
                    <label>Description </label>
                    <input type='text' />
                    <br></br>
                    <label>Price </label>
                    <input type='number'/>
                    <br></br>
                    <label>Quantity Available: </label>
                    <label>L </label>
                    <input type='number' className='div-form-input-size'/>
                    <label>M </label>
                    <input type='number' className='div-form-input-size'/>
                    <label>S </label>
                    <input type='number' className='div-form-input-size'/>
                    <br></br>
                    <button type='submit' className='div-form-button'>Add Product</button>
               </form>
          </div>
     )
}

export default Form; 
