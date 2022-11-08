import React from 'react'
import Post from '../posts/Post'
import TweetBox from '../tweet-box/TweetBox'
import "./Feed.css"
function Feed() {
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed_header'>
            <h3>Home</h3>
        </div>
        {/* TweetBox */}
        <TweetBox/>
        {/* Posts */}
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed