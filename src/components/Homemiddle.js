import React,{useState, useEffect} from 'react'
import Emaillist from "./Emaillist"
import "../components/css/Home_middle.css"
import "../components/css/Home.css"
import EmailSecondpart from './EmailSecondpart'
import Emailthirdpart from './Emailthirdpart'
import { db } from '../Firebase'
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from '../features/mailSlice';
import Compose from "./Compose"


const Homemiddle = () => {
  
  const [emails,setEmails] = useState([])
  
  useEffect(() => {
   db.collection("emails").onSnapshot(Snapshot=>{
    setEmails(Snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    })))
   })
  
  }, [])

  const isMessageopen = useSelector(selectsendMessageIsOpen)
  console.log(isMessageopen)

  return (
    <>
    <div className="home-middle" >
      <Emaillist/>
      <EmailSecondpart/>
      
      {
        emails.map(({id,data})=>{
          return  <Emailthirdpart  id="scrollspyHeading1" title={data.to} subject={data.subject} massage={data.message} time="12:00 AM"/>
        })
      }

   
    </div>
      {
isMessageopen && <Compose/>
}
</>
  )
}

export default Homemiddle