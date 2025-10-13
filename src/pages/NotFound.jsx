import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
  const count = useSelector((state)=>state.count)
  let navigate = useNavigate()

  // const cynthia=()=>{

  // }
  return (
    <div>
      <h1>{count}</h1>
      <h1>EPP ME, EPP ME, USER DEY CARRY GO WHERE I NO KNOW</h1>
       <button className='btn btn-success' onClick={()=>navigate('/home')}>Go Home</button>
    </div>
  )
}

export default NotFound