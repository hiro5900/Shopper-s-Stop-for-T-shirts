import React from 'react'
import './HeaderCartButton.css'

const HeaderCartButton = (props) => {
  return (
    <div className='cart-button' onClick={props.onClick}>
     <div>Cart 3</div>
    </div>
  )
}

export default HeaderCartButton; 
