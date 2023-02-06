import React from 'react'
import Sidebar from "./Sidebar"
import "../components/css/Home.css"
import Homemiddle from "./Homemiddle"
import Homeright from "./Homeright"


function Home() {
  return(
  <>
    <div className="home">
       <Sidebar/>
        <Homemiddle/>
       <Homeright/>      
      
    </div>
    </>
  )
}

export default Home
