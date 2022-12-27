import React from 'react'
import envelope from '../Images/envelope.png'

const FormSuccess = () => {
  return (
    <div className='success-content'>
      <div className='envelope-wrapper'>
      <button className='envelope-number'>1</button>
      <img src={envelope} alt='success img' className='succes-img' />
      </div>
      <h3 className='success-title'> Thank You!</h3>
      <p className='success-text'>I have received your message succesfully!</p>
    </div>
  )
}

export default FormSuccess