import React from 'react'
import './feature.css'

const Feature = ({tittle, text ,id}) => {
  return (
    <div className='gpt__feature-container' id={id}>
      <div className='gpt__feature-container_tittle'>
        <div></div>
        <h1>{tittle}</h1>
      </div>
      <div className='gpt__feature-container_text'>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature