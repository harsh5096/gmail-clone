import React from 'react'
import { useDispatch } from 'react-redux';
import "../components/css/Login.css";
import { signin } from '../features/userSlice';
import { auth, provider } from '../Firebase';

const Login = () => {

const dispatch = useDispatch();

const login =()=>{
auth.signInWithPopup(provider).then(({user})=>{
dispatch(signin({
  displayName:user.displayName,
  photoUrl:user.photoURL,
  email:user.email
}))
}).catch(error=>{
  alert(error)
})
  }


  return (
    <div className="main-login">
    <div className= 'login' >
        <img src="./images/gmail-02.png" alt="" />
        <hr/>
       <button onClick={login} className='login-button'> Login with Email </button>
    </div>
    </div>
  )
}

export default Login
