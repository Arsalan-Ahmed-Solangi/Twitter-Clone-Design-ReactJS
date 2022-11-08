import { SearchOffOutlined, SearchOutlined } from '@mui/icons-material';
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "./Widget.css";
function Widget() {
  return (
    <div className='widget'>
        <div className='widgets_input'>
            <SearchOutlined className='widgets_SearchIcon'/>
            <input placeholder='Search Twitter' type="text"/>
        </div>

        <div className='widgets_widgetContainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={"1589720879482949633"}/>    
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="saurabhnemade"
            options={{height: 400}}
            />

            <TwitterShareButton
        
                url={'https://facebook.com/saurabhnemade'}
                options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
        </div>
    </div>
  )
}

export default Widget