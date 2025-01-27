import React from 'react'

const Botones = ({handleStart, handleStop, isRunning}) => {



  
  return (
    <div className='mt-5 d-flex justify-content-center'>
        <button 
        className='btn btn-success me-5' 
        onClick={handleStart}
        disabled={isRunning}
        >Start</button>
        <button 
        className='btn btn-danger' 
        onClick={handleStop}
        >Stop</button>
    </div>
  )
}

export default Botones