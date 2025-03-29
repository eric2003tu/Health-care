import React,{useState} from 'react'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/300.css"; 
import "@fontsource/ubuntu/500.css"; 
import "@fontsource/ubuntu/700.css"; 
import { BrowserRouter as Navigate, Link } from 'react-router-dom';
import logo from '../logo.png'
import contact from '../contact.png'
import Emergency from '../Emergency.jpg'
import landing from '../home.jpg'
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { TfiClose } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const LogedHome = () => {
    const [iniputs,setInputs] = useState('')
    const [selectedSearch, setSelectedSearch] = useState('')
    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [category, setCateory] = useState("")
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState('')
  return (
    <motion.div>
    <nav className='flex flex-row z-[1000] h-fit w-full right-0 top-0  bg-[#FFFFFF] p-[10px] pt-[2px] sticky'>
        <Link to ='/' ><img src={logo} className='w-[75px] h-[75px] cursor-pointer'/></Link>
        <div className= 'flex h-fit w-fit  mt-[16px] justify-center ml-[90px] bg-[#D9D9D9] rounded-2xl'>
            <div className=' w-fit flex flex-row  '>
            <select  name='dropdown' title='Categories' value={selectedSearch} onChange={function(e){
                setSelectedSearch(e.target.value)
            }}
             className='w-fit p-[20px] active:border rounded-0 border-gray-300 active:border-gray-500 h-fit font-ubuntu text-[#000000] '>
                <option value='' disabled seleected>select category</option>
                <option value='Dental'> Dental</option>
                <option value='Optics'> Optics</option>
                <option value='Reproduction'> Reproduction</option>
                <option value='Canselling'> Canselling</option>
                <option value='Respiration'> Respiration</option>
                <option value='Accidents'> Accidents</option>
            </select>
            <input type='text' name='input' value={iniputs} onChange= {function(e){
                setInputs(e.target.value)
            }}
             className='h-full  ml-[20px] w-[90%]  border-2  border-[#D9D9D9] p-[17px] pb-[17px] active:border-l-white active:border-r-0 active:border-b-0' 
             placeholder='Search your needed support'/>
            </div>
            <div className='flex  justify-self-end flex-row gap-[20px] ml-[90px] mt-[13px] text-gray-900'>
                <TfiClose size={25} className={iniputs ? 'flex  justify-self-end mt-[5px] cursor-pointer' : 'hidden'} onClick={function(){
                    setInputs('')
                }}/>
                <IoIosSearch size={35} className='ml-[23px] cursor-pointer' />
            </div>
        </div>
        <div className='flex flex-row justify-between ml-[40px] gap-[15px] justify-self-end '>
            <GrLanguage size={35} className='text-green-600 mt-[23px] ml-[30px] cursor-pointer'/>
            <select name='dropdown' value={selectedLanguage} onChange={function(e){
                setSelectedLanguage(e.target.value)
            }} 
            className='bg-white w-fit h-full p-[10px] pl-[3px] ml-[4px] focus:border-white active:border-white cursor-pointer'>
                <option value='' disabled seleected>language</option>
                <option value = 'Kinyarwanda'>Kinyarwanda</option>
                <option value = 'English' >English</option>
                <option value = 'French'>French</option>
                <option value = 'Sahili'>Swahili</option>
                <option value = 'Deutch'>Deutch</option>
                <option value = 'Spanish'>Spanish</option>
            </select> 
            <FaCircleUser size={35} className=' text-green-600 mt-[23px] cursor-pointer'/>
            <IoMdNotificationsOutline size={35} className=' text-green-600 mt-[23px] cursor-pointer'/>
            <IoMenu size={45} className=' text-green-600 mt-[13px] cursor-pointer ml-[40px]'/>
        </div>
    </nav>
     <div 
      className="min-w-full min-h-screen flex items-center justify-center bg-cover bg-center sm:bg-center sm:bg-no-repeat"
      style={{ backgroundImage: `url(${landing})` }} 
    >
      <div className='bg-green-600 opacity-60 min-w-full min-h-screen p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center relative'>
        
        <h1 className='max-w-prose mx-auto break-words mt-[50px] font-bold text-white text-[40px] md:text-[58px] leading-tight'>
            Find the best Healthcare<br/> Services Near You
        </h1>

        <div className='max-w-full text-center overflow-x-auto pt-[40px] bg-opacity-60'>
          <p className="max-w-prose mx-auto break-words text-white text-lg md:text-[25px] leading-relaxed">
            Welcome to our website, where you can discover a wide range of healthcare 
            services to meet all your needs.
        </p>
        </div>
        </div>
        </div>
        <div className='grid grid-cols-[2fr_2fr_2fr] md:grid-cols-3 gap-5 w-full h-fit bg-white pt-[40px] pl-[20px] pr-[20px] pb-[50px]'>
            <div className='pl-[100px] flex flex-col gap-2.5  '>
            <h1 className="relative font-bold text-[35px]  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[4px] after:bg-[#20B573]">
             Clinics</h1>
             <p className='break-words leading-relaxed'>
                Explore our network<br/> of clinicks and specialists
             </p>
             <p className='m-[7px]'><Link to='/home' className='border-2 border-[#20B573] text-[#20B573] p-[15px]  rounded-[28px] text-center font-bold'>
             Explore all Clinics</Link></p>

            </div>
            <div className="min-w-fit max-h-fit h-[180px] flex items-center justify-center bg-cover bg-center shadow-[1px_2px_3px]"
            style={{ backgroundImage: `url(${Emergency})` }} >
                <div className='bg-green-300/30 font-bold text-[34px] text-white min-w-full min-h-full p-[7px] rounded-lg shadow-lg text-start flex flex-col items-start justify-center relative'>
                    <p className=''>
                        CHUK<br/>
                        KN 4 Ave, Kigali
                    </p>
                </div>     
            </div>
            <div className="min-w-fit max-h-fit h-[180px] flex items-center justify-center bg-cover bg-center shadow-[1px_2px_3px]"
            style={{ backgroundImage: `url(${Emergency})` }} >
                <div className='bg-green-300/30 font-bold text-[34px] text-white min-w-full min-h-full p-[7px] rounded-lg shadow-lg text-start flex flex-col items-start justify-center relative'>
                    <p className=''>
                        CHUK<br/>
                        KN 4 Ave, Kigali
                    </p>
                </div>     
            </div>
            <div className="min-w-fit max-h-fit h-[180px] flex items-center justify-center bg-cover bg-center shadow-[1px_2px_3px]"
            style={{ backgroundImage: `url(${Emergency})` }} >
                <div className='bg-green-300/30 font-bold text-[34px] text-white min-w-full min-h-full p-[7px] rounded-lg shadow-lg text-start flex flex-col items-start justify-center relative'>
                    <p className=''>
                        CHUK<br/>
                        KN 4 Ave, Kigali
                    </p>
                </div>     
            </div>
            <div className="min-w-fit max-h-fit h-full flex items-center justify-center bg-cover bg-center shadow-[1px_2px_3px]"
            style={{ backgroundImage: `url(${Emergency})` }} >
                <div className='bg-green-300/30 font-bold text-[34px] text-white min-w-full min-h-full p-[7px] rounded-[7px] shadow-lg text-start flex flex-col items-start justify-center relative'>
                    <p className=''>
                        CHUK<br/>
                        KN 4 Ave, Kigali
                    </p>
                </div>     
            </div>
            <div className="min-w-[180px] max-h-fit h-full flex items-center justify-center bg-cover bg-center shadow-[1px_2px_3px]"
            style={{ backgroundImage: `url(${Emergency})` }} >
                <div className='bg-green-300/30 font-bold text-[34px] text-white min-w-full min-h-full p-[7px] rounded-lg shadow-lg text-start flex flex-col items-start justify-center relative'>
                    <p className=''>
                        CHUK<br/>
                        KN 4 Ave, Kigali
                    </p>
                </div>     
            </div>
        </div>
        <h1 className='font-bold ml-[20px] text-[24px]'>Find a doctor in 3 easy steps</h1>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-4 gap-6 p-[20px] justify-between'>
            <div>
                <p>
                    Select speciallity <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <select name='dropdown' value='' className='border w-[100%] p-[7px] rounded-[7px]'>
                <option value='' disabled seleected>speciality</option>
                    <option value='cardiology'>cardiology</option>
                    <option value='cardiology'>cardiology</option>
                    <option value='cardiology'>cardiology</option>
                    <option value='cardiology'>cardiology</option>
                </select>
            </div>
            <div>
            <p className='ml-[35px]'>
                    Select date <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <input type='date' name='date' value='' className='border w-full p-[7px] rounded-[7px]'/>
            </div>
            <div>
            <p className='ml-[35px]'>
                    Prefered location <span className='text-red-500 ml-[4px]'>*</span>
                </p>
                <div className='w-full grid grid-cols-[8fr_1fr] border-[1.5px] rounded-[7px]'>
                    <input type='text' name='location' placeholder='Eg: Kimironko' className='w-full h-full p-[7px] placeholder:text-black rounded-l-[7px] focus:border-r-0'/>
                    <IoLocationOutline size={30}/>
                </div>
            </div>
            <button type='submit' className='w-full text-center bg-[#20B573] text-white rounded-[7px] text-[20px]'>Submit</button>
        </div>
        <h1 className='font-bold ml-[16px] text-[16px]'>Find a doctor by City</h1>
        <div className=' gap-1 p-[20px]  self-center'>
            <div className='w-[50%] grid grid-cols-[1fr_1fr] ml-[30%]'>
         <select name='dropdown' value={location} onChange={function(e){
            setLocation(e.target.value)
         }} className='w-[70%] h-fit p-[10px]'>
         <option value='' disabled selected>Location</option>
         <option value='Kimironko' >Kimironko</option>
         <option value='Nyarutarama'>Nyarutarama</option>
         <option value='Gisozi' >Gisozi</option>
         <option value='Kabuga'>Kabuga</option>
         <option value='Gikondo' >Gikondo</option>
         <option value='Kimisagara'>Kimisagara</option>
        </select>  
        <select name='dropdown' value={category} onChange={function(e){
            setCateory(e.target.value)
         }} className='w-[70%] h-fit p-[10px]'>
         <option value='' disabled>Category</option>
         <option value='cardiology' >cardiology</option>
         <option value='Dental services'>Dental services</option>
         <option value='cardiology' >Orphthamology</option>
         <option value='Dental services'>Respiration</option>
         <option value='cardiology' >Mental Rehab</option>
         <option value='Dental services'>Bio-Chekup</option>
        </select>
        </div>
        </div>
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
                <h1 className='font-bold text-[20px]'>
                    Kipharma Pharmacy
                </h1>
                <p className=''>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-green-700 rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            <div className='w-full flex-col'>
            <div className="w-full max-h-[50%] h-[180px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Emergency})` }} >     
            </div>
            <div className='w-full h-fit bg-white p-[10px] text-center'>
                <h1 className='font-bold text-[20px]'>
                    Kipharma Pharmacy
                </h1>
                <p className=''>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-green-700 rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            <div className='w-full flex-col'>
            <div className="w-full max-h-[50%] h-[180px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${Emergency})` }} >     
            </div>
            <div className='w-full h-fit bg-white p-[10px] text-center'>
                <h1 className='font-bold text-[20px]'>
                    Kipharma Pharmacy
                </h1>
                <p className=''>
                   Nyarugenge, KN 74 Street Kigali<br/>
                   +250791586237 
                </p>
                <button type='button'className='p-[20px] text-center font-white bg-green-700 rounded-[7px] w-full text-white font-bold'>For more info</button>
            </div>
            </div>
            </div>
        </div>
        <div className='grid grid-cols-[2fr_2fr] gap-5p w-full h-[310px] p-[20px] '>
            <div className='w-full h-fit flex flex-col'>
                <h1 className='font-bold text-[33px] text-black'>Ask anything about your health</h1>
                <p className='text-[23px] font-ubuntu'>Get trusted answers ddirectly from baho</p>
                <Link to ='/home' className='bg-green-700 p-[10px] text-center text-[27px] rounded-[7px] text-white'>Ask Baho ai</Link>
            </div>
            <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${contact})` }}>

            </div>
        </div>
        <div className='grid grid-cols-[3fr_1fr_1fr_1fr] gap-9 w-full h-fit z-[-1000] bottom-0 right-0 bg-[#3c7a5e] pt-[30px]'>
            <div className='w-full p-[20px]'>
                <h1 className='font-bold text-white text-[22px]'>
                    Join our Newsletter to receive updates on features and releases.
                </h1>
                <form className='grid grid-cols-[3fr_1fr] gap-4 w-full mt-[9px]'>
                <input type='email' name='email'  placeholder='Enter your email' className='border-2 w-full border-white text-white p-[10px] placeholder:text-gray-200 rounded-[7px]'/>
                <button type='submit' className='border-2 w-full border-white font-bold text-white p-[10px] rounded-[7px] bg-[#0be080] hover:bg-[#0be082]'> Subscribe</button>
                </form>
                <p className=' text-white text-[14px] mt-[13px]'>By subscribing, you agree to our Privacy policy and consent to receive updates from our company</p>
            </div>
            <div className='w-full text-center'>
                <h1 className='font-bold text-black text-[27px]'>Top specialist</h1>
                <ul className='w-full flex flex-col gap-5 text-white text-[15px]'>
                    <li>Dr Cyubahiro</li>
                    <li>DR. Emmanuel</li>
                    <li>Dr Tuyishime</li>
                    <li>DR Ruyanga</li>
                </ul>
            </div>
            <div className='w-full text-center'>
                <h1 className='font-bold text-black text-[27px]'>Top Clinics</h1>
                <ul className='w-full flex flex-col gap-5 text-white text-[15px]'>
                    <li>Kipharma</li>
                    <li>One-gate clinic</li>
                    <li>Healthy soul clinic</li>
                    <li>Ramba clinic</li>
                </ul>
            </div>
            <div className='w-full text-center'>
                <h1 className='font-bold text-black text-[27px]'>Folow Us</h1>
                <ul className='w-full flex flex-col gap-5 text-black text-[20px]  pl-[70px]'>
                    <li><FaSquareXTwitter size={35}/></li>
                    <li><IoLogoWhatsapp size={35}/></li>
                    <li><FaLinkedin size={35}/></li>
            
                </ul>
            </div>
        </div>
        </motion.div>
  )
}

export default LogedHome
