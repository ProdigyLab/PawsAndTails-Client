"use client"
import { Button } from 'antd/es/radio'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const PrivateRoute = () => {
    const {data: session} = useSession()
    console.log(session?.user)
    useEffect(() => {
      if (!session?.user?.email) {
        // navigate to home page
        window.location.href = "/login"; // replace with your home page path
      } else {
        // display login page
        console.log("User is not logged in, displaying login page"); // replace with your login page component
      }
    }, [session?.user]);
  return (
    <div className='bg-black'>
      <p className='text-black'>private route</p>
      
    </div>
  )
}

export default PrivateRoute
