import React from 'react';

const HamburgerMenu = () => {
    const handleClick = () =>{
        console.log('CLICKED')
    }
  return (
    <div>
      <div onClick={handleClick}> Option 1</div>
      <div onClick={handleClick}> Option 2</div>
      <div onClick={handleClick}> Option 3</div>
    </div>
  )
}

export default HamburgerMenu;