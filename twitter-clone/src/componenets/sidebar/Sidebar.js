import { Bookmark, EmailOutlined,  HomeMax, ListAltOutlined, MoreHorizOutlined, NotificationsNone, PermIdentityOutlined, Search, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
        <Twitter className='sidebar_TwitterIcon'/>
        <SidebarOption active  Icon={HomeMax} text="Home"/>
        <SidebarOption   Icon={Search}  text="Explore"/>
        <SidebarOption   Icon={NotificationsNone} text="Notifications"/>
        <SidebarOption   Icon={EmailOutlined} text="Messages"/>
        <SidebarOption   Icon={Bookmark} text="Bookmarks"/>
        <SidebarOption   Icon={ListAltOutlined} text="List"/>
        <SidebarOption   Icon={PermIdentityOutlined} text="Profile"/>
        <SidebarOption   Icon={MoreHorizOutlined} text="More"/>

       <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>       
    </div>
  )
}

export default Sidebar