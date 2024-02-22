import React from 'react'
import './Items.css'

const Items = (props) => {
     console.log(`This is from Items component`, props)
     return (
          <>
               <div className='div-item-container'>
                    <div className='div-item-container-details'>
                         <h3>{props.itemsDetails.tShirtName}</h3>
                         <i>{props.itemsDetails.description}</i>
                         <b>Price: {props.itemsDetails.price}</b>
                    </div>
                    <div className='div-item-container-buy-buttons'>
                         <button>Buy L ({props.itemsDetails.sizeL})</button>
                         <button>Buy M ({props.itemsDetails.sizeM})</button>
                         <button>Buy S ({props.itemsDetails.sizeS})</button>
                    </div>
               </div>
          </>
     )
}

export default Items;