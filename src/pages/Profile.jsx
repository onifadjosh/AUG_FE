import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
   const {username} = useParams()
   const [products, setproducts] = useState([])

   let token = localStorage.getItem('token')
   console.log(token)

   useEffect(() => {
     const fetchProducts = async () => {
       let response = await axios.get("https://aug-be.onrender.com/products/getProducts", 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
       console.log(response.data);
       setproducts(response.data);
     }
   

     fetchProducts();
    
   }, [])
   
  return (
    <div>
        <h1>Welcome {username}</h1>
    </div>
  )
}

export default Profile