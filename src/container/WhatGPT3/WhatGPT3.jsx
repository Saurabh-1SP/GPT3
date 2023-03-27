import React from 'react'
import { Feature } from '../../components'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt__what section__margin ' id='wgpt'>
      <div className='gpt__what_feature'>
        <Feature tittle='What is GPT-3' id='top__feature' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
      </div>
      <div className='gpt__what-header'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__what-container">
        <Feature tittle='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
        <Feature tittle='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        <Feature tittle='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
      </div>
          </div>
  )
}

export default WhatGPT3