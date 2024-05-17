import Link from 'next/link'
import React, { useState } from 'react'
import { elastic as Menu } from 'react-burger-menu'

const MobileMenu = () => {

  var styles = {
    bmBurgerButton: {
      
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
      
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '130px',
      width: '30px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top:'95px',
      height: '100%',
     
    },
    bmMenu: {
      background: '#020D19',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#020D19'
    },
    bmItemList: {
      color: '#fff',
      padding: '0.8em',
      display:'flex',
      flexDirection:'column',
      gap:'40px'
      
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);  
  };

  return (
 
  
   
      <Menu styles={styles} isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)}>
        <Link href="#home" onClick={handleLinkClick}>Home</Link>
        <Link href="#destinations" onClick={handleLinkClick}>Destinations</Link>
        <Link href="#plan" onClick={handleLinkClick}>Activities</Link>
        <Link href="#trips" onClick={handleLinkClick}>Organized Trips</Link>
        <Link href="#discover" onClick={handleLinkClick}>Discover</Link>
      </Menu>
    
   )
}

export default MobileMenu