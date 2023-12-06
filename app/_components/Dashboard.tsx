"use client"
import React from 'react'
import LeftHomePage from './LeftHomePage'
import RightHomePage from './RightHomePage'

const dashboard:React.FC = () => {
  return (
    <div className="flex w-screen h-screen">
        <LeftHomePage/>
    </div>
  )
}

export default dashboard