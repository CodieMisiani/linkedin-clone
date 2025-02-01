import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './store/redux'
const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
    <span className="sidebar__recentItem">#</span>
    <p>{topic}</p>
    </div>
  );
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <img src="https://unsplash.com/photos/a-dimly-lit-entrance-to-a-building-at-night-0eq8QvTr9Eg" alt="Place an image here" />
        <Avatar src={user.photoUrl}  className='sidebar__avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2> 
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
       <div className="sidebar__stat">
        <p>Who viewed you?</p>
        <p className='sidebar__statNumber'>2,543</p>
       </div> 
       <div className="sidebar__stat">
       <p>Views on post</p>
       <p className='sidebar__statNumber'>2,448</p>
       </div> 
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Programming')}
        {recentItem('Softwareengineering')}
        {recentItem('Design')}
        {recentItem('Developer')}
      </div>
    </div>
  )
}

export default Sidebar