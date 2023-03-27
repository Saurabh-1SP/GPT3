import React from 'react'
import { Articles } from '../../components'
import './blog.css'
import {blog1, blog2 , blog3, blog4, blog5} from './import'

const Blog = () => {
  const blogdata = [
    {
      img: blog2,
      date:'Sep 26, 2021',
      tittle:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img:blog3,
      date:'Sep 26, 2021',
      tittle:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img:blog4,
      date:'Sep 26, 2021',
      tittle:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    },
    {
      img: blog5,
      date:'Sep 26, 2021',
      tittle:'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    }
  ]
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-head'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Articles img={blog1} date='Sep 26, 2021' tittle='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt__blog-container_groupB">
          {blogdata.map((data,index)=>{
            return(
            <Articles img={data.img} date={data.date} tittle={data.tittle} key={index}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog