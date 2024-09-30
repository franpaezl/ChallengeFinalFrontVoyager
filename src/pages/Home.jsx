import React from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import "./Home.css"
import PopUpProductWindow from '../components/PopUpProductWindow'


const home = () => {
  return (
    <div className='bgBody flex flex-col min-h-screen'>
      <div className='flex flex-col gap-[50px] mb-[50px]'>

        <Carrousel />
        <Menu />
        <PopUpProductWindow/>
      </div>
    </div>
  )
}

export default home
