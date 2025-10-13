import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate()
    const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
      const [loading, setloading] = useState(false)


      const submit = async () => {
        try {
          setloading(true)
          let request = {  email, password };
          let response = await axios.post(
            
            "https://aug-be.onrender.com/users/login",
            request
          );
    
          console.log(request)
          console.log(response.data);
          localStorage.setItem('token', response.data.token)
          setloading(false)
          let username = response.data.person.fullname
          console.log(username)
          navigate(`/user/${username}`)
        } catch (error) {
          console.log(error);
          setloading(false)
        }
      };
  return (
    <div>
       
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      /> <br />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      /> <br />
      <button onClick={submit}>{loading? "Logging In ...": "Login"}</button>
    </div>
  )
}

export default Login