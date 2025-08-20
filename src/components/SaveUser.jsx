import React, { useState } from 'react'

const SaveUser = ({handleSubmit}) => {
     const [firstName, setfirstName] = useState("");
      const [lastName, setlastName] = useState("");
      const [email, setemail] = useState("");
      const [password, setpassword] = useState("");
  return (
    <div>
        <input
        type="text"
        onChange={(e) => setfirstName(e.target.value)}
        placeholder="firstname"
      />
      <input
        type="text"
        onChange={(e) => setlastName(e.target.value)}
        placeholder="lastname"
      />
      <input
        type="text"
        onChange={(e) => setemail(e.target.value)}
        placeholder="email"
      />
      <input
        type="text"
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={()=>handleSubmit({ firstName, lastName, email, password })}>submit student</button>
    </div>
  )
}

export default SaveUser