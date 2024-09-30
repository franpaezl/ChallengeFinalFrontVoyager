import React from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import "./Home.css"


const home = () => {
  return (
    <div className='bgBody flex flex-col min-h-screen'>
      <div className='flex flex-col gap-[50px] mb-[50px]'>

        <Carrousel />
        <Menu />
      </div>
    </div>
  )
}

export default home
