import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import './Header.css'

const Header = () => {
     return (
          <div className='header'>
               <nav className='header-title'>Shopper's Stop for T-shirts</nav>
               <HeaderCartButton />
          </div>
     )
}

export default Header; 
