import React,{useState,useEffect} from 'react'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/300.css"; 
import "@fontsource/ubuntu/500.css"; 
import "@fontsource/ubuntu/700.css"; 
import logo from '../assets/logo.png'
import contact from '../assets/contact.png'
import Emergency from '../assets/Emergency.jpg'
import landing from '../assets/patient.jpg'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import profile from '../assets/BG.jpg';
import { TfiClose } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import mask from '../assets/mask.jpg'
import { LuMessageSquareText } from "react-icons/lu";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHospitalCross } from "react-icons/gi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { LiaFileSolid } from "react-icons/lia";
import { BiSolidDonateBlood } from "react-icons/bi";
import { GiHealing } from "react-icons/gi";
import { FaFileAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";

const LogedHome = () => {
    const [iniputs,setInputs] = useState('')
    const [selectedSearch, setSelectedSearch] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [category, setCateory] = useState("")
    const [Email, setEmail] = useState('')

    const [datess, setDatess] = useState(new Date());
    

{/* Speciality finding */}

    const [speciality, setSpecility] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [locations, setLocations] = useState('')
    const [submitDisabled, setSubmitDisabled] = useState(true)
      const navigate = useNavigate();

        const images = [landing, mask];
        const [bg, setBg] = useState(images[0]);

    useEffect(()=>{
        let i = 0;
        const interval = setInterval(() => {
          setBg(images[i]);
          i = (i + 1) % images.length;
        }, 7000);
    
        if(!date || !speciality || !location){
            setSubmitDisabled(true)
        }
        else{
            setSubmitDisabled(false)
        }
        return () => clearInterval(interval);
    },[images,bg,date,speciality,location,submitDisabled])


  return (
    <div>
    <nav className='grid grid-cols-[1.6fr_4fr] z-[1000] h-fit w-full right-0 top-0  bg-[#33b87c] p-[6px]  sticky shadow-[1px_2px_2px_gray]'>
        <div className='grid grid-cols-2 self-end w-fit'>
        <div className='w-full flex flex-row gap-3'>
        <IoMenu size={30} className=' text-[#33b87c] rounded-[5px] bg-white mt-[10px] cursor-pointer mr-[15px]'/>
            <div className='w-fit h-fit p-[0px] rounded-full bg-white mt-[7px]'>
            
            <Link to ='/' ><img src={logo} className='w-[35px] cursor-pointer '/></Link></div></div>
        <div className= 'flex h-fit w-fit   m-[5px]  self-center ml-[5px] bg-white rounded-[10px] '>
            <div className=' w-fit flex flex-row'>
            <select  name='dropdown' title='Categories' value={selectedSearch} onChange={function(e){
                setSelectedSearch(e.target.value)
            }}
             className='w-fit p-[10px] active:border-0 rounded-l-[10px]  active:border-gray-500 h-fit font-ubuntu text-[#000000] '>
                <option value='' disabled seleected>select category</option>
                <option value='Dental'> Dental</option>
                <option value='Optics'> Optics</option>
                <option value='Reproduction'> Reproduction</option>
                <option value='Canselling'> Canselling</option>
                <option value='Respiration'> Respiration</option>
                <option value='Accidents'> Accidents</option>
            </select>
            <div className='h-full w-[0.6px] bg-gray-500 '></div>
            <input type='search' name='input' value={iniputs} onChange= {function(e){
                setInputs(e.target.value)
            }}
             className='h-full  w-[400px]    border-[#D9D9D9] rounded-0 p-[7px pl-[20px]  focus:border-[1.5px]' 
             placeholder='Search your needed support'/>
            </div>
            <div className='flex  justify-self-end flex-row gap-[20px]  text-gray-900'>
                <div className='h-full self-center w-[0.6px] bg-gray-500 '></div>
                <IoIosSearch size={30} className='ml-[10px] mr-[10px] text-gray-600 cursor-pointer mt-[8px]' />
                
            </div>
        </div>
        </div>
        <div className='flex flex-row justify-between ml-[19.9%] justify-self-end gap-2'>
            <GrLanguage size={30} className='text-gray-200 mt-[10px] ml-[30px] cursor-pointer'/>
            <select name='dropdown' value={selectedLanguage} onChange={function(e){
                setSelectedLanguage(e.target.value)
            }} 
            className='text-white w-fit text-[17px] h-full p-[10px] pl-[3px] pt-[2px] ml-[10px] focus:border-white active:border-white focus:border-b cursor-pointer'>
                <option value='' disabled seleected className='text-gray-700'>language</option>
                <option value = 'Kinyarwanda' className='text-gray-700'>Kinyarwanda</option>
                <option value = 'English' className='text-gray-700' >English</option>
                <option value = 'French' className='text-gray-700'>French</option>
                <option value = 'Sahili' className='text-gray-700'>Swahili</option>
                <option value = 'Deutch' className='text-gray-700'>Deutch</option>
                <option value = 'Spanish' className='text-gray-700'>Spanish</option>
            </select> 
            <LuMessageSquareText size={30} className=' text-white mt-[10px] cursor-pointer ml-[15px]'/>

            <IoNotificationsOutline size={30} className='ml-[15px] text-white mt-[10px] cursor-pointer'/>
            <div className='w-[37px] h-[37px] bg-white rounded-full mt-[7px]'>
                <img src={profile} alt='profile' className='w-[35px] h-[35px] object-fill rounded-full'/>
            </div>
            <h1 className='text-[23px] text-green-600 font-bold mt-[20px]'>{localStorage.getItem('me')}</h1>
        </div>
    </nav>

    <div className='w-full h-fit bg-white pb-[100px]'>
        <div className='grid grid-cols-[1.5fr_4fr_1fr] bg-blue-100/20 w-full'>
            {/* left nav */}

            <div className='p-4 bg-white w-full flex flex-col gap-2 shadow-[2px_0_8px_0_rgba(0,0,0,0.1)]'>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <LuLayoutDashboard size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Dashboard</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <AiOutlineSchedule  size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Schedules</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <FaUserDoctor size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Find doctor</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <GiHospitalCross size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Hospitals</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <MdOutlineEventAvailable size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Consultations</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <LiaFileSolid size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Medical reports</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <BiSolidDonateBlood size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Donate now</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <GiHealing size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Buy medecine</p>
            </div>
            <div className='flex flex-row gap-3 hover:text-[#6bc76b] p-1.5 rounded-[4px] hover:bg-green-500/18'>
                          <FaFileAlt size={30} className='text-gray-600 hover:text-[#6bc76b]'/>
                          <p className='text-gray-600 text-[17px] cursor-pointer hover:text-[#6bc76b]'>Blogs and articles</p>
            </div>
            </div>

            {/* middle nav */}

            <div></div>

            {/* right nav */}

        <div className="flex  justify-center w-full h-full   bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-fit h-fit">
        <h2 className="text-2xl font-bold mb-4">Upcoming appointment</h2>
        <Calendar
          onChange={setDatess}
          value={datess}
          nextLabel={<span className="text-xl">❯</span>}
          prevLabel={<span className="text-xl">❮</span>}
          navigationLabel={({ date }) =>
            <div className="text-left font-semibold text-lg">
              {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
            </div>
          }
          formatShortWeekday={(locale, date) =>
            date.toLocaleDateString(locale, { weekday: 'short' }).toUpperCase().slice(0, 3)
          }
          tileClassName={({ date: tileDate, view }) => {
            if (view === 'month' && tileDate.toDateString() === datess.toDateString()) {
              return 'bg-green-500 text-white rounded-full';
            }
            return 'rounded-full hover:bg-green-100';
          }}
          className="border-0 w-full text-center [&_.react-calendar__navigation]:mb-2 
                     [&_.react-calendar__navigation__label]:text-left 
                     [&_.react-calendar__tile]:p-2 [&_.react-calendar__tile]:text-sm 
                     [&_.react-calendar__month-view__days__day--weekend]:text-black
                     [&_.react-calendar__month-view__weekdays]:text-xs [&_.react-calendar__month-view__weekdays]:text-gray-400"/>
      </div>
      </div>
      </div>
    </div>

                       {/* Find the Doctor*/}

        <form>
        <h1 className='font-bold ml-[20px] text-[24px]'>Find a doctor in 3 easy steps</h1>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-4 gap-6 p-[20px] justify-between'>
            <div>
                <p>
                    Select speciallity <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <select name='dropdown' value={speciality} onChange={function(e){
                    setSpecility(e.target.value)
                }} className='border w-[100%] p-[7px] rounded-[7px]'>
                <option value='' disabled seleected>speciality</option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
                </select>
            </div>
            <div>
            <p className=''>
                    Select date <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <input type='date' name='date' value={date} onChange={function(e){
                    setDate(e.target.value)
                }} className='border w-full p-[7px] rounded-[7px]'/>
            </div>
            <div>
            <p className=''>
                    Prefered location <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <div className='w-full grid grid-cols-[8fr_1fr] border-[1.5px] rounded-[7px]'>
                <select name='dropdown' value={location} onChange={function(e){
            setLocation(e.target.value)
         }} className='w-full h-full p-[10px]'>
         <option value='' disabled selected>Location</option>
         <option value='Kimironko' >Kimironko</option>
         <option value='Nyarutarama'>Nyarutarama</option>
         <option value='Gisozi' >Gisozi</option>
         <option value='Kabuga'>Kabuga</option>
         <option value='Gikondo' >Gikondo</option>
         <option value='Kimisagara'>Kimisagara</option>
        </select>
                </div>
            </div>
            <button type='button' disabled={submitDisabled} className={submitDisabled ? 'w-full text-center bg-[#a7e6c9] text-white rounded-[7px] text-[20px] cursor-not-allowed' 
                : 'w-full text-center bg-[#20B573] text-white rounded-[7px] text-[20px] cursor-pointer'} onClick={(e)=>{
                    e.preventDefault();
                    localStorage.setItem('speciality', speciality)
                    localStorage.setItem('location',location)
                    localStorage.setItem('date',date)
                    navigate('/patient/findDoctors')
                }}>
                Submit</button>
        </div>
        <h1 className='font-bold ml-[16px] text-[16px]'>Find a doctor by City</h1>
        <div className=' gap-1 p-[20px]  self-center'>
            <div className='w-full grid grid-cols-6 gap-2'>  
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kimironko</label>
        <select name='dropdown' value={category} onChange={function(e){
                setLocations('Kimironko')
                setCateory(e.target.value)
            
         }} className='w-full h-fit p-[5px] focus-within:border-0 border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Nyamirambo</label>
        <select name='dropdown' value={category} onChange={function(e){
                setLocations('Nyamirambo')
                setCateory(e.target.value)
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kimisagara</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kimisagara')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kicukiro</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kicukiro')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kacyiru</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kacyiru')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kimihurura</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kimihurura')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kabuga</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kabuga')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Kagugu</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Kagugu')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Gasanze</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Gasanze')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Gikondo</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Gikondo')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Nyarutarama</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Nyarutarama')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        <div className='m-[25px]'>
        <label htmlFor='city' className='text-[17px] font-bold text-black'>Gahanga</label>
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
            setLocation('Gahanga')
         }} className='w-full h-fit p-[5px] focus-within:border-0  border-gray-500 bg-[#fcfcfe] text-gray-800'>
            <option value='' disabled>Select speciality </option>
                    <option value='Cardiology'>Cardiology</option>
                    <option value='Physical'>Physical</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Orphthamology'>Orphthamology</option>
        </select>
        </div>
        </div>
        </div>


        </form>
        <div className='w-full bg-gradient-to-b from-[#20B573] via- to-[#FFFFFF] h-fit'>
            <div className=' w-full text-center'>
            <h1 className="relative font-bold text-[55px] after:content-[''] after:absolute  after:bottom-0 after:w-[190px] after:ml-[-300px] after:h-[8px] after:bg-[#20B573] font-ubuntu ">Pharmacies</h1>
            <p className='mt-[20px] font-ubuntu text-[18px]'>Explore our network of pharmacies and their services.<br/>
            And see near pharmacy and their medicament. 
            </p>
            </div>
            <div className='grid grid-cols-[2fr_2fr_2fr] gap-7 w-full h-fit p-[20px] mb-[50px]'>

            <div className='w-full flex-col'>
            <div className="w-full max-h-[50%] h-[180px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Emergency})` }} >     
            </div>
            <div className='w-full h-fit bg-white p-[10px] text-center'>
                <h1 className='font-bold text-[20px] text-start'>
                    Kipharma Pharmacy
                </h1>
                <p className='text-start'>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-[#33b87c] rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            <div className='w-full flex-col'>
            <div className="w-full max-h-[50%] h-[180px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Emergency})` }} >     
            </div>
            <div className='w-full h-fit bg-white p-[10px] text-center'>
                <h1 className='font-bold text-[20px] text-start'>
                    Kipharma Pharmacy
                </h1>
                <p className='text-start'>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-[#33b87c] rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            <div className='w-full flex-col'>
            <div className="w-full max-h-[50%] h-[180px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Emergency})` }} >     
            </div>
            <div className='w-full h-fit bg-white p-[10px] text-center'>
                <h1 className='font-bold text-start text-[20px]'>
                    Kipharma Pharmacy
                </h1>
                <p className='text-start'>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-[#33b87c] rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-[2fr_2fr] gap-5p w-full h-fit p-[20px] pb-[50px] '>
            <div className='w-full h-fit flex flex-col'>
                <h1 className='font-bold text-[30px] text-black'>Ask anything about your health</h1>
                <p className='text-[20px] font-ubuntu'>Get trusted answers directly from baho</p>
                <Link to ='/patient' className='bg-[#33b87c] w-1/2 p-[10px] text-center text-[27px] mt-[19px] rounded-[7px] text-white'>Ask Baho ai</Link>
            </div>
            <div className='w-full h-[260px] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${contact})` }}>

            </div>
        </div>
        <div className='grid grid-cols-[3fr_1fr_1fr_1fr] gap-9 w-full h-fit z-[-1000] bottom-0 right-0 bg-[#5bae89] pb-[40px] pt-[60px]'>
            <div className='w-full pl-[20px]'>
                <h1 className='font-bold text-white text-[30px]'>
                    Join our Newsletter to receive updates on features and releases.
                </h1>
                <form className='grid grid-cols-[3fr_1fr] gap-4 w-full mt-[9px]'>
                <input type='Email' name='Email'  placeholder='Enter your Email' className='border-2 w-full border-white text-white p-[10px] placeholder:text-gray-200 rounded-[7px]'/>
                <button type='submit' className='border-2 w-full border-white font-bold text-white p-[10px] rounded-[7px] '> Subscribe</button>
                </form>
                <p className=' text-white text-[12px] mt-[13px]'>By subscribing, you agree to our Privacy policy and consent to receive updates from our company</p>
            </div>
            <div className='w-full text-start ml-[70px]'>
                <h1 className='font-bold text-black text-[22px]'>Top specialist</h1>
                <ul className='w-full flex flex-col gap-5 text-white text-[15px]'>
                    <li>Dr Cyubahiro</li>
                    <li>DR. Emmanuel</li>
                    <li>Dr Tuyishime</li>
                    <li>DR Ruyanga</li>
                </ul>
            </div>
            <div className='w-full text-start'>
                <h1 className='font-bold text-black text-[22px]'>Top Clinics</h1>
                <ul className='w-full flex flex-col gap-5 text-white text-[15px]'>
                    <li>Kipharma</li>
                    <li>One-gate clinic</li>
                    <li>Healthy soul clinic</li>
                    <li>Ramba clinic</li>
                </ul>
            </div>
            <div className='w-full text-start ml-[-40px] items-start'>
                <h1 className='font-bold text-black text-[22px]'>Folow Us</h1>
                <ul className='w-full flex flex-col text-start self-start gap-5 text-black text-[20px]  '>
                    <li className='self-start text-start flex flex-row gap-1.5'><FaSquareXTwitter size={25} className='self-start'/><p className='text-white text-[15px]'>Twitter</p></li>
                    <li className='self-start text-start flex flex-row gap-1.5'><IoLogoWhatsapp size={25}/> <p className='text-white text-[15px]'>WhatsApp</p></li>
                    <li className='self-start text-start flex flex-row gap-1.5'><FaLinkedin size={25}/> <p className='text-white text-[15px]'>Linkedin</p></li>
                    <li className='self-start text-start flex flex-row gap-1.5'><IoLogoWhatsapp size={25}/> <p className='text-white text-[15px]'>WhatsApp</p></li>
            
                </ul>
            </div>
        </div>
        </div>
  )
}

export default LogedHome
