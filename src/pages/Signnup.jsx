import axios from 'axios';
import React, { useState } from 'react'

const Signnup = () => {
    const [image, setimage] = useState(null);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false)
  
    const getFile = (e) => {
      let photo = e.target.files[0];
  
      console.log(photo);
  
      let pickedPhoto = new FileReader();
      pickedPhoto.onload = () => {
        let changedPhoto = pickedPhoto.result;
        setimage(changedPhoto);
      };
  
      let imagee = pickedPhoto.readAsDataURL(photo);
      setimage(imagee);
  
      // console.log(image);
    };
  
    const submit = async () => {
      try {
        setloading(true)
        let request = { firstName, lastName, email, password, profilePicture:image };
        let response = await axios.post(
          "https://aug-be.onrender.com/users/signup",
          request
        );
  
        console.log(request)
        console.log(response.data);
        localStorage.setItem('token', response.data.token)
        setloading(false)
      } catch (error) {
        console.log(error);
        setloading(false)
      }
    };
  
    return (
      <div>
        <img src={image} alt="" width={200} height={200} />
        <input type="file" name="" id="" onChange={(e) => getFile(e)} /> <br />
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setfirstName(e.target.value)}
        /> <br />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setlastName(e.target.value)}
        /> <br />
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
        <button onClick={submit}>{loading? "Registering ...": "Register account"}</button>
      </div>
    );
  };

export default Signnup