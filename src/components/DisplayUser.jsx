import React, { useState } from "react";

const DisplayUser = ({ allUsers, deleteUser, editUser }) => {
    const [firstName, setfirstName] = useState("");
          const [lastName, setlastName] = useState("");
          const [email, setemail] = useState("");
          const [password, setpassword] = useState("");
          const [currentIndex, setcurrentIndex] = useState(0)
  return (
    <div>
      {allUsers.map((user, index) => (
        <div key={index}>
          <h1>{user.firstName + " " + user.lastName}</h1>
          <em>{user.email}</em>

          <div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setcurrentIndex(index)}>edit</button>
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(index)}
            >
              delete
            </button>
          </div>
        </div>
      ))}





<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>editUser(currentIndex, {firstName, lastName, email, password})}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default DisplayUser;
