import React from 'react'
import "../components/css/Homeright.css"
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Homeright = () => {
  return (
    <div className="home-right">
    <img  className="img-1" src="./images/clender.png" alt="" />
    <img  className="img-2" src="./images/keep.png" alt="" />
    <img  className="img-3" src="./images/task.png" alt="" />
    <img  className="img-4"src="./images/contact.png" alt="" />
    <hr/>
   <AddIcon className="addicon"/> 
   <ChevronRightIcon className="righticon"/>
    </div>
  )
}

export default Homeright