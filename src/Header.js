import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
        <img
          src="https://AymenGadri.github.io/eventify-website-favicon-color.png"
          alt=""
        />
        <div className='header__input'>
            <SearchIcon />
            <input type="text" placeholder='Search for Events'/>
        </div>
        </div>

        <div className='header__center'>
            <div className='header__option header__option--active'>
                <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
              <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
              <SupervisedUserCircleIcon fontSize="large" />
            </div>
        </div> 

        <div className='header__right'>
            <div className="header__info">
                <Avatar //src={user.photoURL} 
                /> 
            </div>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <ExpandMoreIcon />
            </IconButton>
        </div>

    </div>
  )
}

export default Header