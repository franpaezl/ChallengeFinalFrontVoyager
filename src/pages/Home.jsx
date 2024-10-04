import React from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import "./Home.css"
import PopUpProductWindow from '../components/PopUpProductWindow'

import Prueba4 from '../components/Prueba4'






const home = () => {
  return (
    <div className='bgBody flex flex-col min-h-screen'>
      <div className='flex flex-col items-center gap-[50px] mb-[50px]'>
        <Carrousel />
    
        <Menu />
        <PopUpProductWindow/>
        <Prueba4/>

      </div>
    </div>
  )
}

export default home
