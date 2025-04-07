import React, { useState } from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'
import { IoIosSearch } from "react-icons/io";
import { Routes, Route, Link } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineHelpCenter } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineLeft, AiOutlineDown } from 'react-icons/ai';

const DoctorPage = () => {

  const [patients, setPatients] = useState(false)
  const [appointments, setAppointments] = useState(false)
  const [dashboard, setDashboard] = useState(true)
  const [schedules, setSchedules] = useState(false)
  const [emergency, setEmergency] = useState(false)
  const [homeVisit, setHomeVisit] = useState(false)
  const [consultation, setConsultation] = useState(false)
  const [records, setRecords] = useState(false)
  const [billings, setBillings] = useState(false)
  const [analitics, setAnalitics] = useState(false)
  const [help, setHelp] = useState(false)
  const [settings, setSettings] = useState(false)
  const [allSchedules, setAllSchedules] = useState(false)
  const [reschedule, setReshedule] = useState(false)

    const [search, setSearch] = useState('')
  return (
    <div className=' grid grid-cols-[2.5fr_10fr] w-full h-screen'>

      {/* Left Nav */}

      <div className='w-full flex flex-col gap-2 h-full overflow-y-auto bg-[#15ad6b] p-[10px] pt-[5px]'>
        <div className='flex w-fulll flex-row gap-4 sticky '>
            <Link to='/' className='w-fit h-fit p-[1px] bg-white rounded-full'><img src={logo} className='w-[65px] cursor-pointer' alt='logo'/></Link>
            <h1 className='text-white font-bold text-[20px] mt-[20px]'>Baho Health</h1>
        </div>
        <div className='relative w-full pr-[10px]'>
        <input type='search' name='search' value={search} onChange={function(e){
            setSearch(e.target.value)
        }} placeholder='Search' className='p-[5px] pl-[30px] border-2 bg-[#178f61] w-full border-gray-300 text-gray-200  placeholder:text-gray-300 placeholder:text-[20px] focus:border-gray-200 rounded-[5px]'/>
        <button type="button" className="absolute left-1 top-2/4 transform -translate-y-1/2 text-sm text-gray-200" >
        <IoIosSearch size={30} className='cursor-pointer text-gray-900' />
        </button>
        </div>
        <p className='text-gray-800 mt-[10px] mb-[10px]'>MAIN</p>
        <div className='flex flex-row gap-6'>
          <LuLayoutDashboard size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'onClick={function(){
            setDashboard(true)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>Dashboard</p>
        </div>
        <div className='flex flex-row gap-6'>
          <AiOutlineSchedule size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(true)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>Schedules</p>
        </div>
        <div className='flex flex-row gap-6'>
          <FaUserCircle size={30} className='text-white'/>
          <p className='text-white mr-[38px] text-[17px] cursor-pointer'>Patients</p> {!patients ? <IoMdArrowDropright size={30} className='text-white' onClick={function(){
            setPatients(true)
          }}/> : <IoMdArrowDropdown size={30} className='text-white' onClick={function(){
            setPatients(false)
          }}/>}
        </div>
        <ul className={patients ? 'text-gray-200 text-[17px] self-center flex flex-col' : 'hidden'}>
            <li>
            <button className='cursor-pointer' onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(true)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>Emergency</button>
            </li>
            <li>
            <button className=' cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(true)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>Home Visit</button>
            </li>
          </ul>
        <div className='flex flex-row gap-6'>
          <RiCalendarScheduleLine size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'>Appointment</p>{!appointments ? <IoMdArrowDropright size={30} className='text-white' onClick={function(){
            setAppointments(true)
          }}/> :<IoMdArrowDropdown size={30} className='text-white' onClick={function(){
            setAppointments(false)
          }}/>}
        </div>
        <ul className={appointments ? 'text-gray-200 text-[17px] self-center flex flex-col' : 'hidden'}>
            <li>
            <button className='cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(true)
            setReshedule(false)
          }}>All schedules</button>
            </li>
            <li>
            <button className='cursor-pointero'  onClick={function(){
            setDashboard(false)
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(true)
          }}>Reschedule</button>
            </li>
          </ul>
        <div className='flex flex-row gap-6'>
          <FaPersonWalkingDashedLineArrowRight size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(true)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>consultation</p>
        </div>
        <div className='flex flex-row gap-6'>
          <LuFileSpreadsheet size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(true)
            setAllSchedules(false)
            setReshedule(false)
          }}>Medical Records</p>
        </div>
        <div className='flex flex-row gap-6'>
          <RiSecurePaymentLine size={30} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(true)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }} > Billings & Payments</p>
        </div>
        <h1 className='text-gray-800 mt-[10px] mb-[10px]'>DATA VISUALIZATION</h1>
        <div className='flex flex-row gap-6'>
          <BsGraphUpArrow size={25} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(true)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}> Analytics & Earnings</p>
        </div>
        <h1 className='text-gray-800 mt-[10px] mb-[10px]'>SUPPORT</h1>
        <div className='flex flex-row gap-6'>
          <MdOutlineHelpCenter size={25} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(true)
            setSettings(false)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}> Help Center</p>
        </div>
        <div className='flex flex-row gap-6'>
          <IoSettingsOutline size={25} className='text-white'/>
          <p className='text-white text-[17px] cursor-pointer'  onClick={function(){
            setDashboard(false)
            setAnalitics(false)
            setBillings(false)
            setConsultation(false)
            setEmergency(false)
            setHomeVisit(false)
            setHelp(false)
            setSettings(true)
            setSchedules(false)
            setRecords(false)
            setAllSchedules(false)
            setReshedule(false)
          }}>Settings</p>
        </div>


      </div>

       {/* The right nav */}

       <div className='w-full flex flex-col h-full overflow-y-auto p-[20px]'> 
        <div className='flex flex-col'>
        <div className='flex flex-row gap-4 self-end right-0 top z-[1000] '>
          <IoSettingsOutline size={25} />
          <IoMdNotificationsOutline size={25} />
          <FaUserCircle size={25} className='text-green-600'/>
          <h1>Shema</h1>
          <AiOutlineDown size={20} />

        </div>
          <h1 className={dashboard ? 'self-start text-green-600 ' : 'hidden'} >Good Morning, Dr Shema</h1>
        </div>
        <div className={dashboard ? 'grid grid-cols-3 gap-4 p-8 w-full h-fit bg-cover' : 'hidden'} 
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
          <FaArrowRightLong size={30} className='text-white self-end ml-[30%]'/>
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
          <FaArrowRightLong size={30} className='text-white self-end ml-[30%]'/>
          </div>
          <hr className='h-[4px] text-white mt-[7px] mb-[10px]'/>
          <h1 className='text-center text-white text-[34px]'>10</h1>
          <h1 className='text-start text-white text-[20px]'>Upcoming Events</h1>
        </div>
        </div>

       </div>

    </div>
  )
}

export default DoctorPage
