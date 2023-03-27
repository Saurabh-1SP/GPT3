import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresdata = [
  {
    head:'Improving end distrusts instantly ',
    para:'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    head:'Become the tended active',
    para:'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    head:'Message or am nothing',
    para:'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    head:'Really boy law county',
    para:'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
]

const Features = () => {
  return (
    <div className='gpt__features section__padding'>
        <div className="gpt__features-text ">
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt__features-container">
          {featuresdata.map((head,index)=>{
            return(<Feature
             tittle={head.head} text={head.para} key={index}
             />)
          })}
        </div>
    </div>
  )
}

export default Features