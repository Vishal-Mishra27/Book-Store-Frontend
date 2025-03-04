import React, { useEffect, useState } from 'react'
import list from '../../public/list.json'
import Card from './Card'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Course() {
  const  [book, setbook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try {
       const res = await axios.get(
         "https://product-management-system-mjfo.onrender.com/book"
       );
       console.log(res.data);
       setbook(res.data)
      } catch (error) {
        
      }
    }
  })
  
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <div className='max-w-screen-2xl mx-auto md:px-20 px-4 '>
        <div className='mt-0 pt-28 text-center items-center justify-center'>
          <h1 className='text-2xl  md:text-4xl'>we're delighted to have you <span className='text-pink-500 font-semibold'>Here! :)</span></h1>
          <hr className='md:hidden sm:block' />
          <p className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa magni reprehenderit consectetur, assumenda ad voluptatum, fugiat, quis alias quos possimus facere voluptas explicabo excepturi dolorem provident tempora at optio nesciunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus unde deserunt, nisi velit sapiente ipsam rem modi perferendis id quibusdam neque quae dolores quos at quod laudantium consequatur labore corporis!</p>

          <Link to={'/'}>
          <button className="btn btn-secondary mt-6 px-4 font-semibold hover:bg-pink-500 duration-200">Back</button>
          </Link>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      </div>
      
    </>
  )
}

export default Course
