
import React,{useState} from 'react'
import '../App.css'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import landing from '../home.jpg'
import logo from '../logo.png' 

const Home = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
    
      <nav className=' bg-white  z-[1000] top-0 right-0 w-full flex pt-[23px] pl-[10px] pb-[7px] sticky'>
        <div className='hidden sm:hidden md:flex lg:flex md:flex-row lg:flex-row'>
        <ul className='flex flex-row gap-8 text-[24px]'>
          <li className='flex sm:flex md:flex lg:flex cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'><img src={logo} className=' w-[65px]'/></Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>About Us</Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Services</Link> </li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Contact Us</Link> </li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/home'>More</Link> </li>
        </ul>
        <ul className='absolute  flex flex-row gap-10 text-[24px]  right-5 justify-items-center'>
          <li className='border-2  border-green-400 p-1.5 pl-7 pr-7 hover:text-green-500 cursor-pointer'><button type='button'> Sign Up</button></li>
          <li className='hidden sm:hidden md:hidden lg:flex border border-green-400 hover:bg-green-300  bg-emerald-500 p-1.5 pl-7 pr-7 text-white cursor-pointer'><button type='button'> Learn More</button></li>
        </ul>
        </div>
        <Link to ='/'><img src={logo} className='absolute flex sm:flex md:hidden lg:hidden w-[65px] cursor-pointer'/></Link>
        <h1 className={ menu === true ? 'flex sm:flex md:hidden lg:hidden justify-self-end mr-[15px] text-[30px] text-center mb-[16px] cursor-pointer hover:text-green-400 hover:text-[33px] active:text-green-300' : 'hidden'} onClick={function(){
          setMenu(false)
        }}><IoMdClose size={45}/></h1>
                <h1 className={menu === false ? 'flex sm:flex md:hidden lg:hidden justify-self-end mr-[15px] text-[30px] text-center mb-[16px] cursor-pointer hover:text-green-400 hover:text-[33px] active:text-green-300' : 'hidden'} onClick={function(){
          setMenu(true)
        }}><CiMenuBurger size={45}/></h1>
        <div className={`fixed right-0 mt-[6px] p-[10px] h-screen bg-white w-fit flex flex-col sm:flex md:hidden lg:hidden transition-all duration-300 ${menu === true ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>

        <ul className='flex flex-col gap-8 text-[24px]'>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'> About Us</Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/' >Services</Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Contact Us</Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/home'> More</Link> </li>
          <li className=' border-2 border-green-400 p-2.5 pl-7 pr-7 hover:text-green-500 cursor-pointer'><Link to ='/'> Sign Up</Link></li>
          <li className=' border border-green-400 hover:bg-green-300  bg-emerald-500 p-2.5 pl-7 pr-7 text-white cursor-pointer'><Link to='/'> Learn More</Link></li>
        </ul>
        </div>
      </nav>
      <div 
  className="min-w-full min-h-screen flex items-center justify-center bg-cover bg-center sm:bg-center sm:bg-no-repeat"
  style={{ backgroundImage: `url(${landing})` }} 
>
  {/* Overlay */}
  <div className='bg-green-600 opacity-60 min-w-full min-h-screen p-8 rounded-lg shadow-lg text-center flex flex-col items-center justify-center relative'>
    
    {/* Heading */}
    <h1 className='mt-[50px] font-bold text-white text-[40px] md:text-[58px] leading-tight'>
      Providing Quality Health<br/>Services for Everyone
    </h1>

    {/* Description */}
    <div className='max-w-full text-center overflow-x-auto pt-[40px] bg-opacity-60'>
      <p className="max-w-prose mx-auto break-words text-white font-bold text-lg md:text-[25px] leading-relaxed">
        Welcome to our website, where we specialize in providing 
        top-notch health facilities and services. With a team of 
        experienced doctors and pharmacists, we are dedicated to
        ensuring the well-being of our patients.
      </p>

      {/* Buttons */}
      {/*<div className='flex flex-row gap-5 justify-center pt-[20px] mt-[20px] bg-opacity-100'>*/}
      <div className=' bottom-10 flex flex-row gap-5 justify-center text-center pt-[20px] mt-[20px]'>
        <button className='border p-[15px] md:p-[20px] bg-emerald-500  text-white font-bold rounded-md hover:bg-emerald-600 transition-all duration-300'>
          Sign up
        </button>
        <button className='border p-[15px] md:p-[20px] bg-white text-emerald-600 font-bold rounded-md hover:bg-gray-200 transition-all duration-300'>
          Learn More
        </button>
      </div>
      </div>

    </div>
  </div>
{/*</div>*/}
    </>
  )
}

export default Home
