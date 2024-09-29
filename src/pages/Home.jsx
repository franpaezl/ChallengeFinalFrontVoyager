import React from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import CardProduct from '../components/CardProduct'

const home = () => {
  return (
    <div className='flex flex-col gap-[50px]'>
      <Carrousel/>
      <Menu/>
      <CardProduct/>
    </div>
  )
}

export default home
