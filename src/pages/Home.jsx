import React from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import CardProduct from '../components/CardProduct'
import PopUpProductWindow from '../components/PopUpProductWindow'

const home = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
      <Carrousel/>
      <Menu/>
      <CardProduct/>
      <PopUpProductWindow/>
    </div>
  )
}

export default home
