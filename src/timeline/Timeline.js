import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'
function Timeline() {

  const [post, setpost] = useState([
    {
      user: "Sheryar1.0",
      postImage: "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      likes: 100,
      timestamp: "1min"
    },
    {
      user: "Zeeshan_butti",
      postImage: "https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      likes: 12,
      timestamp: "10d"
    },
    {
      user: "Sexy_Pichaa",
      postImage: "https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      likes: 222,
      timestamp: "2d"
    },
    {
      user: "Faizan_shahxad",
      postImage: "https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      likes: 230,
      timestamp: "2d"
    },
  ])

  return (

    <div className='Timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {post.map(post => (
            <Post user={post.user} 
            postImage={post.postImage} 
            likes={post.likes}
             timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline