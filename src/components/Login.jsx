import React from 'react'
import { useState } from 'react'

const Login = () => {
    const[user, setUser]= useState();
    const[pwd, setPwd]= useState();

    function handleusername(event){
        setUser(event.target.value); 
        console.log(user);
    }
    function handlepwd(event){
        setPwd(event.target.value); 
        console.log(pwd);
    }
    function handleSubmit(event){
        event.preventDefault();
    }

    const loginData = {
        username: user,
        password: pwd
    }
     fetch('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' value={user} onChange= {handleusername}/>
            <label htmlFor="pwd">Password</label>
            <input type="password" id='pwd' value={pwd} onChange={handlepwd}/>
        </form>
        <button type='submit'>Login</button>
    </div>
  )
}

export default Login