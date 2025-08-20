import { useState } from "react";
import Button from "./components/Button";
import SaveUser from "./components/SaveUser";
import DisplayUser from "./components/DisplayUser";

function App() {
 
  const [allUsers, setallUsers] = useState([]);

  //  const handleChange=(event)=>{
  //   console.log(event.target.value)

  //  }

  // const [num, setnum] = useState(0);

  // const increaseNum = () => {
  //   setnum(num + 1);
  //   console.log(num);
  // };

  const handleSubmit = (user) => {
    // let user = { firstName, lastName, email, password };
    setallUsers([...allUsers, user]);

    // let fruits = ['banana', 'mango', 'orange']
    // let newFruits = [...fruits, 'grape', 'watermelon']
    // console.log(newFruits)
  };


  const deleteUser=(i)=>{
    console.log(i)
    let newAllUsers= [...allUsers]
    newAllUsers.splice(i,1)
    console.log(newAllUsers)
    setallUsers(newAllUsers)
    
  }


  const editUser=(i, user)=>{
    let newAllUsers= [...allUsers]
    newAllUsers.splice(i,1, user)
    setallUsers(newAllUsers)
  }
  const callMe =()=>{
    alert('sade called me')
  }

  return (
    <>
      

      <SaveUser handleSubmit={handleSubmit}/>

      {/* <Button  title='sade' color= 'btn-danger' namee='click me' func={callMe}/>
      <Button  title='pampam' color= 'btn-success' namee='submit'/> */}
      <hr />

      <DisplayUser allUsers={allUsers} deleteUser={deleteUser} editUser={editUser}/>
    </>
  );
}

export default App;
