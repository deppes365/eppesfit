import React from 'react'
import { FaTimes } from 'react-icons/fa'

const WeighInModal = ({setShowModal}) => {
  return (
    <div className='weighInModal bg-primary rgba'>
        <FaTimes className='icon' onClick={() => setShowModal(p => !p)}/>

        <form className='bg-primary'>
            <h3>Add Today's Weight</h3>
        </form>
    </div>
  )
}

export default WeighInModal