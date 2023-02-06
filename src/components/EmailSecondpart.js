import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import ForumIcon from '@mui/icons-material/Forum';
import SellIcon from '@mui/icons-material/Sell';
import InboxIcon from '@mui/icons-material/Inbox';
import "../components/css/Emaillist.css"

const EmailSecondpart = () => {
  return (
    
 <div className="second-middle ">

<div className="title title--active">  
     <InboxIcon className="icons icons--active"/> 
    <p className="para--active"> Primary </p>
    </div>

<div className="title">
    <SellIcon className="icons"/>
    <p>Promotions</p>
    </div>

<div className="title">
    <GroupIcon className="icons"/>
    <p>Social </p>
    </div>

<div className="title"> 
    <ForumIcon className="icons"/>
    <p> Forums</p>
    </div>



</div>


  )
}

export default EmailSecondpart
    