import React,{useState} from 'react'
import "../components/css/Compose.css";
import {Button} from "@mui/material"
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockClockIcon from '@mui/icons-material/LockClock';
import ModeIcon from '@mui/icons-material/Mode';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import {closeSendMessage} from '../features/mailSlice';
import {db}  from '../Firebase';
// import firebase from "firebase";


const Compose = () => {

  const [to, setTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

const formsubmit =(e)=>{
  e.preventDefault();
  if(to===""){
    return alert("to is reqired")
  }
    
  if(subject===""){
    return alert("subject is reqired")
  }
    
  if(message===""){
    return alert("message is reqired")
  }

db.collection("emails").add({
  to,
  subject,
  message
})
setTo("");
setSubject("");
setMessage("");

 alert ("Succesfull")
  dispatch(closeSendMessage( ))
}
const dispatch = useDispatch();

return(
    <div className="compose">
      <div className="compose__header">
      <div className="compose__header-left">New Massage</div>
      <div className="compose__header-right">
<RemoveIcon className='header-icon-1'/>
< OpenInFullIcon className='header-icon-2'/>
<CloseIcon className='header-icon-3' onClick={()=>dispatch(closeSendMessage( ))} />
      </div>
      </div>
      <form  onSubmit={formsubmit}   >
      <div className="compose__body">
       <div className='compose__input'> To <input value={to} id="to" onChange={(e)=>setTo(e.target.value)}/> Cc Bcc </div>
       <hr/>
       <div className='compose__input' > Subject <input value={subject} id="subject" onChange={(e)=>setSubject(e.target.value)} /> </div>
       <hr/>
      <textarea  value={message} onChange={(e)=>setMessage(e.target.value)} id="message" className='compose__message'/>
      </div>
      <div className="compose__footer">
      <Button type="submit" className="compose__btn" >Send <ArrowDropDownIcon className='compose__btn-icon'/></Button>
        < FormatColorTextIcon className="footer-icon"/>
        < AttachFileIcon className="footer-icon"/>
        < InsertLinkIcon className="footer-icon"/>
        <InsertEmoticonIcon  className="footer-icon"/>
        <InsertDriveFileIcon className="footer-icon"/>
        <InsertPhotoIcon className="footer-icon"/>
        <LockClockIcon className="footer-icon"/>
        <ModeIcon className="footer-icon"/>
        <MoreVertIcon className="footer-icon"/>
        <DeleteForeverIcon  className="footer-icon-delete"/>
      </div>
      </form>

    </div>
  )
}

export default Compose