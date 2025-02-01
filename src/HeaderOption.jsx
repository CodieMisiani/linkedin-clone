import React from 'react'
import  "./HeaderOption.css";

const HeaderOption = ({avatar,Icon,title, onClick}) => {
  
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <Avatar className="headerOption__icon"
        src={avatar}>
          {user?.email[0]}
        </Avatar>
        }
        <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption