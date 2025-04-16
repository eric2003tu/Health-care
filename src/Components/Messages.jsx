import React from 'react'
import hero from '../assets/hero.png'
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

const Messages = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-8 w-full h-fit bg-cover' 
    style={{ backgroundImage: `url(${hero})` }}>
    {/* appointments */}
    <div className='flex flex-col h-fit w-full p-5 bg-[#15ad6b] rounded-[15px]'>
      <div className='flex flex-row gap-2 '>
      <RiCalendarScheduleLine size={30} className='text-white'/> 
      <h1 className='text-white text-[17px]'>Appointments</h1>
      <FaArrowRightLong size={30} className='text-white self-end ml-[30%]'/>
      </div>
      <hr className='h-[4px] text-white mt-[7px] mb-[10px]'/>
      <h1 className='text-center text-white text-[34px]'>10</h1>
      <h1 className='text-start text-white text-[20px]'>Today's Appointments</h1>
    </div>

    {/* Messages */}

    <div className='flex h-fit flex-col w-full p-5 bg-[#502687] rounded-[15px]'>
      <div className='flex flex-row gap-2 '>
      <SiGooglemessages size={30} className='text-white'/> 
      <h1 className='text-white text-[17px]'>Messages</h1>
      <FaArrowRightLong size={30} className='text-white self-end ml-[53%]'/>
      </div>
      <hr className='h-[4px] text-white mt-[7px] mb-[10px]'/>
      <h1 className='text-center text-white text-[34px]'>10</h1>
      <h1 className='text-start text-white text-[18px]'>You have 10 unread messages</h1>
    </div>

        {/* Upcomming Events */}

    <div className='flex flex-col w-full p-5 bg-[#ad4315] rounded-[15px]'>
      <div className='flex flex-row gap-2 '>
      < FaUsers size={30} className='text-white'/> 
      <h1 className='text-white text-[17px]'>Events</h1>
      <FaArrowRightLong size={30} className='text-white self-end ml-[53%]'/>
      </div>
      <hr className='h-[4px] text-white mt-[7px] mb-[10px]'/>
      <h1 className='text-center text-white text-[34px]'>10</h1>
      <h1 className='text-start text-white text-[20px]'>Upcoming Events</h1>
    </div>
    </div>
  )
}

export default Messages
