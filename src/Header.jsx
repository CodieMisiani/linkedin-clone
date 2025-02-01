import React from 'react'
import  "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from './HeaderOption';
import { Business, BusinessCenter, Chat, ChatBubble, Home, NotificationAdd, Notifications } from '@mui/icons-material';
import { SupervisorAccount } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './store/redux'; // Import logout from redux.js

const Header = () => {
  
  const dispatch = useDispatch();
  const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut()
  }
  return (
    <div className='header'>
        

    <div className="header__left">
            {/* linkedIcon */}
            <LinkedInIcon sx={{fontSize:50, color:'blue'}}/>

        <div className="header__search">
            {/* SearchIcon */}
            <SearchIcon/>
            <input  type="text"/>
        </div>
    </div>

    <div className="header__right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={SupervisorAccount} title='My Network'/>
        <HeaderOption Icon={Business} title='Jobs'/>
        <HeaderOption Icon={ChatBubble} title='Messaging'/>
        <HeaderOption Icon={Notifications} title='Notifications'/>
        <HeaderOption  Icon={Avatar} title='Me' onClick={logoutOfApp}/>
    </div>

    </div>
  )
}

export default Header