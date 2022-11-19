import React from 'react'
import { useState } from 'react'

const botones = () => {
    
  return (
    <div className='mt-5 d-flex justify-content-center'>
        <button className='btn btn-success me-5'>Start</button>
        <button className='btn btn-danger'>Stop</button>
    </div>
  )
}

export default botones