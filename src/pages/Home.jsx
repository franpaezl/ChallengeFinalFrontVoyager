import React, { useEffect } from 'react'
import Carrousel from '../components/Carrousel'
import Menu from '../components/Menu'
import "./Home.css"
import PopUpProductWindow from '../components/PopUpProductWindow'
import TimeInfoComponent from '../components/TimeInfoComponent'
import PublicityComponent from '../components/PublicityComponent'
import MapComponent from '../components/MapComponent'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../redux/actions/authAction'





const home = () => {
  const user = useSelector((store)=> store.authReducer.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(user.firstName == ""){
      dispatch(loadUser())
    }
  },[user,dispatch])
  return (
    <div className='bgBody flex flex-col min-h-screen'>
      <div className='flex flex-col gap-[50px] mb-[50px]'>
        <Carrousel />
        <Menu />
        <PopUpProductWindow/>
        <TimeInfoComponent/>
        <PublicityComponent/>
        <MapComponent/>
      </div>
    </div>
  )
}

export default home










