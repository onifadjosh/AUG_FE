import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseByNum, increaseCount } from '../redux/appslice'




const Contact = () => {
  const count  = useSelector((state)=>state.count)
  const [num, setnum] = useState(0)
  const [cartItem, setcartItem] = useState('')
  let dispatch = useDispatch()
  return (
    <div>

      {/* <button onClick={()=>setnum(num+8)}>click me</button> */}
      <input type="number"  onChange={(e)=>setnum(e.target.value)}/>
      <h1>This is the contact page</h1>
      <h1>{count}</h1>

      <button onClick={()=>dispatch(increaseCount())}>increase count</button>
      <button onClick={()=>dispatch(increaseByNum(Number(num)))}>increase</button> <br /><br />



      <input type="text"  onChange={(e)=>setcartItem(e.target.value)}/>

      <button onClick={()=>dispatch(addToCart(cartItem))}>add item to cart</button>
    </div>
  )
}

export default Contact