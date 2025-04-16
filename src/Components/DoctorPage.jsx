import React, { useState } from 'react'
import logo from '../assets/logo.png'
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
import { SiGooglemessages } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineLeft, AiOutlineDown } from 'react-icons/ai';
import AddPatients from './AddPatients';
import Messages from './Messages';
import { IoMenu } from "react-icons/io5";

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
    <div className={!emergency ?  ' grid grid-cols-[2.5fr_10fr] w-full h-screen' : ' grid grid-cols-[0.4fr_10fr] w-full h-screen'}>

      {/* Left Nav */}

      <div className={!emergency ? 'w-fit flex flex-col gap-2 h-full overflow-y-auto bg-[#15ad6b] p-[10px] pt-[5px]' : 'w-fit flex flex-col gap-3.5 h-full overflow-y-auto bg-[#15ad6b] p-[10px] pt-[5px]'}>
        <div className='flex w-fulll flex-row gap-4 sticky '>
          { !emergency ? <Link to='/' className='w-fit h-fit p-[1px] bg-white rounded-full'><img src={logo} className='w-[45px] cursor-pointer' alt='logo'/></Link>
          : 
          <IoMenu size={35} className='text-white mb-[40px] cursor-pointer' onClick={function(){
            setEmergency(false)
            setDashboard(true)
          }}/>
          }
            { !emergency ?
             <h1 className='text-white font-bold text-[20px] mt-[10px]'>Baho Health</h1>
            :
            ''}
        </div>
        {!emergency ? 
        <div className='relative w-full pr-[10px]'>
        <input type='search' name='search' value={search} onChange={function(e){
            setSearch(e.target.value)
        }} placeholder='Search' className='p-[5px] pl-[30px] border-2 bg-[#178f61] w-full border-gray-300 text-gray-200  placeholder:text-gray-300 placeholder:text-[20px] focus:border-gray-200 rounded-[5px]'/>
        <button type="button" className="absolute left-1 top-2/4 transform -translate-y-1/2 text-sm text-gray-200" >
        <IoIosSearch size={30} className='cursor-pointer text-gray-900' />
        </button>
        </div> :
        <IoIosSearch size={35} className='cursor-pointer text-white ' />
        }
        <p className={!emergency ? 'text-gray-800 mt-[10px] mb-[10px]' : 'hidden'}>MAIN</p>
        <div className='flex flex-row gap-6'>
          <LuLayoutDashboard size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}onClick={function(){
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
          <AiOutlineSchedule size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
          <FaUserCircle size={30} className='text-white cursor-pointer'/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}>Patients</p> {!patients ? <IoMdArrowDropright size={30} className={!emergency ? 'text-white ml-[40px]' : 'hidden'} onClick={function(){
            setPatients(true)
          }}/> : <IoMdArrowDropdown size={30} className={!emergency ? 'text-white cursor-pointer ml-[40px]' : 'hidden'} onClick={function(){
            setPatients(false)
          }}/>}
        </div>
        <ul className={patients ? 'text-gray-200 text-[17px] self-center flex flex-col' : 'hidden'}>
            <li>
            <button className={!emergency ? 'cursor-pointer' : 'hidden'} onClick={function(){
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
          }}>Patients list</button>
            </li>
            <li>
            <button className={!emergency ? 'cursor-pointer' : 'hidden'}  onClick={function(){
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
          <RiCalendarScheduleLine size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}>Appointment</p>{!appointments ? <IoMdArrowDropright size={30} className={!emergency ? 'text-white cursor-pointer' : 'hidden'} onClick={function(){
            setAppointments(true)
          }}/> :<IoMdArrowDropdown size={30} className={!emergency ? 'text-white cursor-pointer' : 'hidden'} onClick={function(){
            setAppointments(false)
          }}/>}
        </div>
        <ul className={appointments ? 'text-gray-200 text-[17px] self-center flex flex-col' : 'hidden'}>
            <li>
            <button className={!emergency ? 'cursor-pointer' : 'hidden'} onClick={function(){
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
            <button className={!emergency ? 'cursor-pointer' : 'hidden'}  onClick={function(){
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
          <FaPersonWalkingDashedLineArrowRight size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
          <LuFileSpreadsheet size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
          <RiSecurePaymentLine size={30} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
        <h1 className={!emergency ? 'text-gray-800 mt-[10px] mb-[10px]' : 'hidden'}>DATA VISUALIZATION</h1>
        <div className='flex flex-row gap-6'>
          <BsGraphUpArrow size={25} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
        <h1 className={!emergency ? 'text-gray-800 mt-[10px] mb-[10px]' : 'hidden'}>SUPPORT</h1>
        <div className='flex flex-row gap-6'>
          <MdOutlineHelpCenter size={25} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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
          <IoSettingsOutline size={25} className='text-white cursor-pointer' onClick={function(){
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
          }}/>
          <p className={!emergency ? 'text-white text-[17px] cursor-pointer' : 'hidden'}  onClick={function(){
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

      

       <div className= 'w-full flex flex-col h-full overflow-y-auto p-[20px]'> 
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
        { dashboard ?

         <Messages/>
        : emergency ? 
        <AddPatients/>
        :''
       }


       </div>

    </div>
  )
}

export default DoctorPage
