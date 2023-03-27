import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className="gpt__header section__padding">
      <div className="gpt__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt__header-content_input">
          <input type="email" name="" id=""  placeholder='your email address'/>
          <button>Get Started</button>
        </div>
        <div className="gpt__header-content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt__header-img'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header