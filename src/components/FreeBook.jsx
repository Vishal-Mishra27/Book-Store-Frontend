import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from '../../public/list.json'
import Card from './Card';

function FreeBook() {
    const filterData = list.filter((data)=>data.category==='free')
    console.log(filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-xl'>Free Offered Course</h1>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius, alias obcaecati blanditiis itaque nulla odio nobis reiciendis, neque fugit doloremque placeat harum unde, praesentium dolores nostrum temporibus animi qui!</p>


      <div>
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Card key={item.id} item={item} />
       ))}
      </Slider>
    </div>
    </div>
    
    </>
  )
}

export default FreeBook
