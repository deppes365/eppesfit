import React from 'react'
import {IoMdSettings} from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSettings } from '../redux/app/appSlice';

function Navbar() {
  const dispatch = useDispatch()

  const {showSettings} = useSelector(state => state.app)

  return (
    <div className='navBar bg-primary'>
        <h1>Eppes<span><em>Fit</em></span></h1>
        <IoMdSettings className={`icon ${showSettings ? 'active' : ''}`} onClick={() => dispatch(setShowSettings())}/>
    </div>
  )
}

export default Navbar