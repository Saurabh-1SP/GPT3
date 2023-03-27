import React from 'react'
import './articles.css'

const Articles = ({img,date,tittle}) => {
  return (
    <div className='gpt__blog-container_articles'>
      <div className="gpt__blog-container_articles_img">
        <img src={img} alt="" />
      </div>
      <div className="gpt__blog-container_articles_text">
        <div><p>{date}</p>
        <h3>{tittle}</h3>
        </div>
        <p>Read more</p>
      </div>
    </div>
  )
}

export default Articles