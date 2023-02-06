import React from 'react'
import "../components/css/Sidebar.css";
import {Button} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import Sidebaroption from "./Sidebaroption"
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
// import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

const Sidebar = () => {

const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <Button startIcon={<EditIcon/>} className="compose__btn"  onClick={()=>dispatch(openSendMessage())} >Compose</Button>
      <Sidebaroption Icon={InboxIcon} title="Inbox" number="234" isactive={true} />
      <Sidebaroption Icon={StarRateIcon} title="Starred" number="23" />
      <Sidebaroption Icon={WatchLaterIcon} title="Snoozed" number="34" />
      <Sidebaroption Icon={SendIcon} title="Draft" number="24" />
      {/* <Sidebaroption Icon={LabelImportantIcon} title="Draft" number="24" /> */}
      {/* <Sidebaroption Icon={LabelImportantIcon} title="Draft" number="24" /> */}
      {/* <Sidebaroption Icon={DeleteIcon} title="Draft" number="24" /> */}
      <Sidebaroption Icon={ExpandMoreIcon} title="More" number="24" />

      <div className='sidebar-label'>
        <h4>Label</h4>
           <AddIcon className="add-icon" > </AddIcon>
        </div>
        </div>
  )
}

export default Sidebar
