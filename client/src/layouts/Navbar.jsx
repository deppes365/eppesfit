import React from 'react'
import {IoMdSettings} from 'react-icons/io';

function Navbar({showSettings, setShowSettings}) {
  return (
    <div className='navBar bg-primary'>
        <h1>Eppes<span><em>Fit</em></span></h1>
        <IoMdSettings className={`icon ${showSettings ? 'active' : ''}`} onClick={() => setShowSettings(prevState => !prevState)}/>
    </div>
  )
}

export default Navbar