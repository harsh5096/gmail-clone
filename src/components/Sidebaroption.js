import React from 'react'
import "../components/css/Sidebar.css"

const Sidebaroption = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebaroption ${isactive && 'sidebbaroption--active'}`}>
   < div className="icon"> <Icon /> </div>
      <h2>{title}</h2>
      <p>{number}</p>
          </div>
  )
}

export default Sidebaroption
