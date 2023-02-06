import React from 'react';
import "../components/css/Header.css";
import { IconButton ,  Avatar} from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';

const Header = () => {
  return (
    <div className="heading">
  <div className="heading_left">
    <IconButton >
   <ReorderIcon></ReorderIcon>
   </IconButton>
    <img src="../images/gmail.webp" alt="" />
  </div>
  <div className="heading-midlle">
    <div className="Search_mail">
  <IconButton className="hover">
<SearchIcon className="search-button"></SearchIcon>
</IconButton>
<input type="text" placeholder="Search mail" />
<IconButton>
<TuneIcon className='tune-button'></TuneIcon>
</IconButton>
  </div>
  </div>
  <div className="heading_right">
    <IconButton>
    <HelpIcon></HelpIcon>
    </IconButton>

    <IconButton>
<SettingsIcon></SettingsIcon>
    </IconButton>

    <IconButton>
<AppsIcon></AppsIcon>
    </IconButton>

    <Avatar className='avatr'></Avatar>
  </div>
  
    </div>
  )
}

export default Header
