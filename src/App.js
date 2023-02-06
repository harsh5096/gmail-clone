// import React from 'react';
// import { selectUser } from './features/userSlice';
// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import { useSelector } from 'react-redux';
// import {BrowserRouter,Routes,Route} from "react-router-dom";


// const App = () => {
//   const user = useSelector(selectUser);
//   return (
//     <BrowserRouter>    
// {
//   user && (
//     <div>
// <Header/>
// <Routes>
// <Route exact path='/' element={<Home/>}/>
// </Routes>
// </div>)
// } 
// : { 
// <Login/>
// } 
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { selectUser } from './features/userSlice';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useSelector } from 'react-redux';
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  const user = useSelector(selectUser);
{
  if (user) {
    return (
      <BrowserRouter>    
    <div>
<Header/>
<Routes>
<Route exact path='/' element={<Home/>}/>
</Routes>
</div>
</BrowserRouter>
    )
}else
 { 
return(<Login/>)
} 
}
}
export default App











