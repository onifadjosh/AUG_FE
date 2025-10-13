// // import { useState } from "react";
// // import Button from "./components/Button";
// // import SaveUser from "./components/SaveUser";
// // import DisplayUser from "./components/DisplayUser";

// function App() {

//   // const [allUsers, setallUsers] = useState([]);

//   //  const handleChange=(event)=>{
//   //   console.log(event.target.value)

//   //  }

//   // const [num, setnum] = useState(0);

//   // const increaseNum = () => {
//   //   setnum(num + 1);
//   //   console.log(num);
//   // };

//   // const handleSubmit = (user) => {
//   //   // let user = { firstName, lastName, email, password };
//   //   setallUsers([...allUsers, user]);

//   //   // let fruits = ['banana', 'mango', 'orange']
//   //   // let newFruits = [...fruits, 'grape', 'watermelon']
//   //   // console.log(newFruits)
//   // };

//   // const deleteUser=(i)=>{
//   //   console.log(i)
//   //   let newAllUsers= [...allUsers]
//   //   newAllUsers.splice(i,1)
//   //   console.log(newAllUsers)
//   //   setallUsers(newAllUsers)

//   // }

//   // const editUser=(i, user)=>{
//   //   let newAllUsers= [...allUsers]
//   //   newAllUsers.splice(i,1, user)
//   //   setallUsers(newAllUsers)
//   // }
//   // const callMe =()=>{
//   //   alert('sade called me')
//   // }

//   return (
//     <>

//       <SaveUser handleSubmit={handleSubmit}/>

//       {/* <Button  title='sade' color= 'btn-danger' namee='click me' func={callMe}/>
//       <Button  title='pampam' color= 'btn-success' namee='submit'/> */}
//       <hr />

//       <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import MakeRequest from "./pages/MakeRequest";
import Formm from "./pages/Formm";
import Signup from "./pages/SIgnup";
import Login from "./pages/Login";
import AuthGuard from "./Auth/AuthGuard";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path element/> */}

        {/* dynamic routing */}
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthGuard isAuthenticated={isAuthenticated}/>}>
          <Route path="/user/:username" element={<Profile />} />
          <Route path="/fetch" element={<MakeRequest />} />
          <Route path="/formik" element={<Formm />} />

          <Route path="/" element={<Layout />}>
            
            <Route path="/sp-contact" element={<Contact />} />
            <Route path="/contact" element={<Navigate to={"/sp-contact"} />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>

        {/* wild card routing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
