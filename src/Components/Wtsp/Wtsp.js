import React from 'react'
import WtspImg from '../../assets/wtsp-logo.png'
import './wtsp.css'

function Wtsp() {
  return (
    <>
    <a href='https://api.whatsapp.com/send?phone=3814010691' target='_blanck'>
      <img src={WtspImg} alt="WTSP logo" className='wtsp-logo' />
    </a>
    </>
  )
}

export default Wtsp