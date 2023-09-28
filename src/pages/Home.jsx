import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    const tema=useSelector((state=>state));
    console.log(tema);
    
  return (
    <div>Home</div>
  )
}
