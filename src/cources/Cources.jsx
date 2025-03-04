import React from 'react'
import Navabr from '../components/Navabr'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Cources(){
  return (
    <>
      <Navabr/>
      <div className='min-h-screen'>
      <Course />

      </div>
      <Footer/>
    </>
  )
}

export default Cources;
