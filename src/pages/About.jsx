import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quis rem animi! Possimus quas quibusdam illum! Laborum qui vel, placeat, itaque quos consequuntur vero laudantium pariatur architecto ipsam cupiditate quod!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, veniam quisquam. Autem facere possimus quisquam nulla aspernatur obcaecati modi consequatur qui optio porro! Qui illum et facere eveniet ab! Ex consequatur fugiat incidunt assumenda in laboriosam, voluptatem explicabo veritatis saepe.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque placeat nisi cum eveniet necessitatibus obcaecati consequuntur sed provident. Et.</p>
          
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, placeat!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, repellat?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.</p>
        </div>
      </div>
    </div>
    
  )
}

export default About