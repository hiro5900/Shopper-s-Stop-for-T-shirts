import React from 'react'
import './Items.css'

const Items = () => {
     return (
          <>
               <div className='div-item-container'>
                    <div className='div-item-container-details'>
                         <h3>Navy Blue T-shirt</h3>
                         <i>100% Cotton</i>
                         <b>Price: $1200</b>
                    </div>
                    <div className='div-item-container-buy-buttons'>
                         <button>Buy L (12)</button>
                         <button>Buy M (10)</button>
                         <button>Buy S (20)</button>
                    </div>
               </div>
          </>
     )
}

export default Items;