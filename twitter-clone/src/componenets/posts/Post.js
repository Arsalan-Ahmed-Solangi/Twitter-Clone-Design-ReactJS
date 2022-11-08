import {  ChatBubbleOutline, FavoriteBorderOutlined, PublishRounded, RepeatSharp, VerifiedUser,  } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
function Post({ displayName,username,verified,avatar,image,text }) {   
  return (
    <div className='post'>
        <div className='post_avatar'>
            <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'> 
                    <h3>Clever Programmer {""} <span className='post_headerSpecial'>
                    <VerifiedUser className='post_badge'/>
                    </span></h3>
                </div>
            </div>
            <div className='post_headerDescription'>
                <p>I challenge you to build a Twiiter Clone</p>
            </div>
            <img alt='' src='https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png'/>
        <div className='post_footer'>
            <ChatBubbleOutline fontSize='small'/>
            <RepeatSharp fontSize="small"/>
            <FavoriteBorderOutlined fontSize='small'/>
            <PublishRounded fontSize='small'/>
        </div>
        </div>
       
    </div>
  )
}

export default Post