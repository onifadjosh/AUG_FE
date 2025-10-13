import React, { useEffect, useState } from 'react'

const About = () => {

  const [num, setnum] = useState(0)
  const [name, setname] = useState('pam')

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [third])

  // useEffect(()=>{
  //   // functions or statement will be here
  // },[dependency array])

  useEffect(()=>{
    console.log('Use effect just ran')
  },[num])

  //without dependency array, on load the use effect will run, when state changes it will run
  //with empty dependency array, on load will run, when state changes will not run
  //dependecy array with state, onload will run, when state inside dependency array changes it will run again



  
  return (
    <div>
        This is about us page

        <h1>{num}</h1>

        <button onClick={()=>setnum(num+1)}>increase</button>



        <h1>{name}</h1>

        <button onClick={()=>setname('Sade')}>change</button>
    </div>
  )
}

export default About