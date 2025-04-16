import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import blood from '../assets/blood.png'
import Emergency from '../assets/Emergency.jpg'
import surgery from '../assets/sugery.png'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import profile from '../assets/BG.jpg';


const Doctor = () => {

    const [selectedSearch, setSelectedSearch] = useState('')
        const [iniputs,setInputs] = useState('')
            const [selectedLanguage, setSelectedLanguage] = useState('')
            const [speciality, setSpeciality] = useState('')
            const [location, setLocation] = useState('')
            const [facility, setfacility] = useState('')

            useEffect(()=>{
                setSpeciality(localStorage.getItem('speciality'))
                setLocation(localStorage.getItem('location'))
            },[speciality,location])
  return (
        <div>
    <nav className='grid grid-cols-[1.6fr_4fr] z-[1000] h-fit w-full right-0 top-0  bg-[#33b87c] p-[6px]  sticky shadow-[1px_2px_2px_gray]'>
        <div className='grid grid-cols-2 self-end w-fit'>
        <div className='w-full flex flex-row gap-3'>
        <IoMenu size={30} className=' text-[#33b87c] rounded-[5px] bg-white mt-[10px] cursor-pointer mr-[15px]'/>
            <div className='w-fit h-fit p-[0px] rounded-full bg-white mt-[7px]'>
            
            <Link to ='/patient/' ><img src={logo} className='w-[35px] cursor-pointer '/></Link></div></div>
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
        <div className='w-fit flex flex-rows gap-17  ml-[20px] m-[10px] sticky'>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> Find pharmacy</Link>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> Find doctors</Link>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> Donate</Link>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> Health records</Link>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> Find Hospitals</Link>
            <Link to='/doctor' className='font-bold text-[16px] hover:text-green-400'> community</Link>
        </div>
        <div className='w-full max-h-screen h-screen grid grid-cols-[1.5fr_5fr_2fr] pl-[20px]'>

            {/*  Left nav*/}

            <div className='w-full h-full overflow-y-auto flex border-r-2 border-gray-500 flex-col text-start pb-[35px] pl-[10px]'>
                <div className='flex gap-18 w-full ml-[7px]'>
                    <h1 className='font-bold text-[14px]'>Filters</h1>
                    <button className='text-[#4ef593] text-[14px] self-end cursor-pointer'  onClick={function(){
                        setSpeciality(localStorage.removeItem('speciality'))
                        setLocation(localStorage.removeItem('location'))
                    }}>Clear All</button>
                </div>
                <button className={ speciality ? 'self-start border-2 border-green-400 p-[4px] rounded-[10px] m-[7px] flex text-[14px]' : 'hidden'}>{speciality}<IoMdClose size={20} className='text-green-500 ml-[4px] cursor-pointer' onClick={function(){
                   setSpeciality(localStorage.removeItem('speciality'))
                }}/></button>
                <button className={location ? 'self-start border-2 border-green-400 p-[4px] rounded-[10px] m-[7px] flex text-[14px]' : 'hidden'}>{location}<IoMdClose size={20} className='text-green-500 ml-[4px] cursor-pointer' onClick={function(){
                   setLocation(localStorage.removeItem('location'))
                }}/></button>
                <hr className='text-gray-500 m-[4px]'/>
                <h1 className='font-bold text-[14px] m-[7px]'>Mode of the consult</h1>
                <div className='flex gap-3'>
                    <input type='checkbox' name='mode' value='clinic visit' className='size-4'/>
                    <p> Clinic visit</p>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' name='mode' value=' online consult' className='size-4'/>
                    <p> Online Consult</p>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' name='mode' value=' phone call' className='size-4'/>
                    <p> Phone call</p>
                </div>
                <h1 className='font-bold text-[14px] m-[7px]'>Experience (in Years)</h1>
                <div className='flex gap-3'>
                    <input type='radio' name='experience' value='0-5' className='size-4'/>
                    <p> 0-5</p>
                </div>
                <div className='flex gap-3'>
                    <input type='radio' name='experience' value='6-10' className='size-4'/>
                    <p> 6-10</p>
                </div>
                <div className='flex gap-3'>
                    <input type='radio' name='experience' value='11-16' className='size-4'/>
                    <p> 11-16</p>
                </div>
                <button className='text-green-600 flex'>+1 more</button>
                
                <h1 className='font-bold text-[14px] m-[7px]'>Fees (In Rwf)</h1>
                <div className='flex gap-3'>
                    <input type='radio' name='fees' value='1000-2000' className='size-4'/>
                    <p> 1000-2000</p>
                </div>
                <div className='flex gap-3'>
                    <input type='radio' name='fees' value='2000-10000' className='size-4'/>
                    <p> 2000-10000</p>
                </div>
                <div className='flex gap-3'>
                    <input type='radio' name='fess' value='10000+' className='size-4'/>
                    <p> 10000-above</p>
                </div>
                <h1 className='font-bold text-[14px] m-[7px]'>Gender</h1>
                <div className='flex gap-3'>
                    <input type='radio' name='gender' value='Male' className='size-4'/>
                    <p> Male</p>
                </div>
                <div className='flex gap-3'>
                    <input type='radio' name='gender' value='Female' className='size-4'/>
                    <p> Female</p>
                </div>
                <h1 className='font-bold text-[14px] m-[7px]'>Languages</h1>
                <div className='flex gap-3'>
                    <input type='checkbox' name='language' value='Kinyarwanda' className='size-4'/>
                    <p> Kinyarwanda</p>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' name='language' value=' english' className='size-4'/>
                    <p>English</p>
                </div>
                <div className='flex gap-3'>
                    <input type='checkbox' name='language' value='french' className='size-4'/>
                    <p>French</p>
                </div>
                <h1 className='font-bold text-[14px] m-[7px]'>Facilities</h1>
                <select name='facilities' value={facility} onChange={function(e){
                    setfacility(e.target.value)
                }} className='border rounded-[20px] p-[5px] w-fit'>
                    <option value='' disabled >Facility</option>
                    <option value='King faisal Hospital'>King Faisal</option>
                    <option value ='CHUK'>CHUK</option>
                    <option value='CHUB'>CHUB</option>
                    <option value='Kanombe Military Hospital'>Kanombe Hospital</option>
                </select>
            </div>

            {/* middle nav */}

            <div className=' relative flex h-full  overflow-y-auto'  ></div>

            {/* Right nav */}

            <div className=' w-full bg-center bg-cover overflow-y-auto h-full' style={{ backgroundImage: `url(${surgery})` }}>
                <div className='w-full h-full bg-green-700/54 overflow-y-auto'>
                    <div className='p-[17px]  w-full h-full text-white flex flex-col'>
                    <p>
                        Save  life today!, Every drop of blood you donate can be 
                        the difference between life and death for someone in needy.
                        Every small financial contribution can ease the burden of a struggling patient.
                        Donate Blood - Be a hero  <img src={blood} className='w-[84px] h-[94px] rounded-[20px] ml-[35%]'/>
                         by giving someone a second life.
                        Your kindness can bring hope and healing. Join us today and 
                        make an impact.
                    </p>
                    <div className='flex gap-3 mt-[10px]'>
                    <IoLocationOutline size={40} className='text-gray-200'/>
                    <p className='text-white font-bold'>{location}</p>
                    </div>
                    <p className='text-white font-bold'>
                        Hours 12:00 - 14:00 pm
                    </p>
                    <button className='text-center bg-white font-bold p-[8px] text-emerald-500 mt-[12px] mb-[20px] rounded-[10px]'>
                        Click here to support and save life
                    </button>
                    <div className='m-[10px] w-full p-[20px] h-fit bg-green-700/54 rounded-[30px]'>
                    <p>
                        Save  life today!, Every drop of blood you donate can be 
                        the difference between life and death for someone in needy.
                        Every small financial contribution can ease the burden of a struggling patient.
                        Donate Blood - Be a hero by giving someone a second life.
                        Your kindness can bring hope and healing. Join us today and 
                        make an impact.
                    </p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Doctor
