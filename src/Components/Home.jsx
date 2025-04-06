
import React,{useState,useEffect} from 'react'
import '../App.css'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { Routes, Route, Link } from 'react-router-dom';
import landing from '../assets/patient.jpg'
import mask from '../assets/mask.jpg'
import testi from '../assets/testi.jpg'
import logo from '../assets/logo.png' 
import surgery from '../assets/experience.png'
import support from '../assets/support.png' 
import testimonial from '../assets/testimonial.png'
import pharma from '../assets/pharma.png'
import pharmacy from '../assets/pharmacy.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [menu, setMenu] = useState(false);
  const images = [landing, mask];
  const [bg, setBg] = useState(images[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setBg(images[i]);
      i = (i + 1) % images.length;
    }, 7000);

    return () => clearInterval(interval);
  }, [bg,images]);

  return (
    <>
    
      <nav className=' bg-white  z-[1000] top-0 right-0 w-full flex pt-[23px] pl-[10px] pb-[7px] sticky'>
        <div className='hidden sm:hidden md:flex lg:flex md:flex-row lg:flex-row'>
        <ul className='flex flex-row gap-8 text-[24px]'>
          <li className='flex sm:flex md:flex lg:flex cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'><img src={logo} className=' w-[65px]'/></Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Home</Link></li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Services</Link> </li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/'>Contact Us</Link> </li>
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/patient'>More</Link> </li>
        </ul>
        <ul className='absolute  flex flex-row gap-10 text-[24px]  right-5 justify-items-center'>
          <li className='border-2  border-green-400 p-1.5 pl-7 pr-7 hover:text-green-500 cursor-pointer'><Link to='login'> Log in</Link></li>
          <li className='border-2  border-green-400 p-1.5 pl-7 pr-7 hover:text-green-500 cursor-pointer'><Link to='signup'> Sign Up</Link></li>
          <li className='hidden sm:hidden md:hidden lg:flex border border-green-400 hover:bg-green-300  bg-emerald-500 p-1.5 pl-7 pr-7 text-white cursor-pointer'><Link type='button'> Learn More</Link></li>
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
          <li className='cursor-pointer hover:text-green-400 active:text-green-300'><Link to ='/patient'> More</Link> </li>
          <li className=' border-2 border-green-400 p-2.5 pl-7 pr-7 hover:text-green-500 cursor-pointer'><Link to ='/'> Sign Up</Link></li>
          <li className=' border border-green-400 hover:bg-green-300  bg-emerald-500 p-2.5 pl-7 pr-7 text-white cursor-pointer'><Link to='/'> Learn More</Link></li>
        </ul>
        </div>
        </nav>
        <div className="min-w-full min-h-screen flex items-center overflow-y-hidden justify-center bg-cover bg-center sm:bg-center sm:bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }} >
        <div className='bg-green-600/44 min-w-full min-h-screen p-8 rounded-lg shadow-lg text-center overflow-y-hidden flex flex-col items-center justify-center relative'>
        <h1 className='mt-[50px] font-bold text-white text-[40px] md:text-[58px] leading-tight'>
          
          {bg === landing ? 
          (
          <>
            Providing Quality Health<br/>Services for Everyone
          </>
          ) 
          :(
          <>
            We offer the best quality services <br /> to ensure healthy lives
          </>
          )
          }
        </h1>
        <div className='max-w-full text-center overflow-x-auto pt-[40px]  bg-opacity-60'>
        <p className="max-w-prose mx-auto break-words text-white font-bold text-lg md:text-[25px] leading-relaxed">
        {bg === landing ? `Welcome to our website, where we specialize in providing 
        top-notch health facilities and services. With a team of 
        experienced doctors and pharmacists, we are dedicated to
        ensuring the well-being of our patients.`
        : `At our website, we offer a wide range of services to cater to your healthcare needs.
        From specialist consultations to pharmacy services,
        we have you covered.`}
</p>

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

        {/* The division after the one with blue background */}

        <div className='w-full bg-cover bg-right h-fit pt-[40px] pb-[30px] pl-[25px] p-[15px] grid grid-cols-[1fr_1fr]' 
        style={{ backgroundImage: `url(${surgery})` }}>
          <div className='flex flex-col w-full h-fit'>
          <h1 className="font-bold text-[20px] text-black text-start self-auto after:content-['']   after:w-[190px] after:ml-[-300px] after:h-[8px] after:bg-[#20B573]">
            Quality
          </h1>
          <h1 className='font-bold text-[40px] mt-[10px] self-auto text-start flex '>
            Experience the Best in Health Services</h1>
            <div className='grid grid-cols-2 gap-3 w-full h-fit mb-[40px] mt-[20px] '>
            <div className='w-full h-full p-[30px] flex flex-col bg-emerald-600 shadow-[1px_2px_3px_gray] rounded-[7px]'>
              <h1 className='text-white font-bold'>Experienced Specialists</h1>
              <p className='text-white'>Our team of specialists is highly skilled
                 and dedicated to providing exceptional care.</p>
            </div>
            <div className='w-full h-full p-[30px] flex flex-col bg-gray-300 shadow-[1px_2px_3px_gray] rounded-[7px]'>
            <h1 className='text-green-600 font-bold'>State-of-the-Art facilities</h1>
              <p className='text-gray-700'>
                We have modern facilities equiped with the latest Medical 
                technology for accurate diagnoses and effective 
                treatments.
              </p>
            </div>
            <div className='flex flex-row gap-22 mt-[30px]'>
              <Link to ='/' className='text-white text-center bg-emerald-600 p-[8px] shadow-[1px_2px_3px_gray] rounded-[5px]'>
              Learn More</Link>
              <Link to='signup' className='text-gray-600 mt-[7px] text-[20px] flex gap-3'>Sign Up <AiOutlineRight size={23} className='mt-[6px]'/></Link>
            </div>
            </div>
          </div>
        </div>

        {/*  Mask division*/}

        <div className='w-full h-fit bg-cover' 
        style={{ backgroundImage: `url(${bg})` }}>
          <div className='w-full h-full self-center flex flex-col bg-green-700/34 pt-[40px] pb-[30px] pl-[25px] p-[15px]'>
          <div className='w-[40%] self-center'>
          <h1 className="font-bold self-center text-[20px] after:content[''] text-white after:w-[8px] after:h-[3px] after:bg-[green]">Discover</h1>
          <h1 className='self-center font-bold text-[34px]'>Quality Healthcare Services fol all Your needs </h1>
          <p className='text-gray-800'>At our website, we offer a wide range of services to cater to your healthcare needs.
             From specialist consultations to pharmacy services,
              we have you covered</p>
          </div>
          <div className='grid grid-cols-3 gap-9 mt-[20px]'>
          <div className='w-full h-full p-[30px] flex flex-col bg-emerald-600 shadow-[1px_2px_3px_gray] rounded-[7px]'>
            <img src={support} className='self-center h-[64px] w-[64px]'/>
              <h1 className='text-white font-bold self-center text-[24px]  mb-[8px]'>Specialist Consultations</h1>
              <p className='text-white self-center'>
                Our team of experienced specialists is here to provide 
                you with expert medical advice and personalized treatment 
                plans.
              </p>
            </div>
            <div className='w-full h-full p-[30px] flex flex-col bg-gray-300 shadow-[1px_2px_3px_gray] rounded-[7px]'>
            <img src={pharma} className='self-center h-[64px] w-[64px]'/>
            <h1 className='text-green-600 font-bold self-center text-[24px]  mb-[8px]'>Convenient Pharmacy Services</h1>
              <p className='text-gray-700 self-center'>
                Get your prescriptions filled quickly and easily at our on-site 
                pharmacy, ensuring you have access to the medications you need.
              </p>
            </div>
            <div className='w-full h-full p-[30px] flex flex-col bg-emerald-600 shadow-[1px_2px_3px_gray] rounded-[7px]'>
            <img src={pharmacy} className='self-center h-[64px] w-[64px]'/>
              <h1 className='text-white font-bold self-center text-[24px] mb-[8px]'>Comprehensive Health Facilities</h1>
              <p className='text-white self-centere'>
                Our stateof-the-art facilties are equiped with the latast 
                technology to provide you with comprehensive healthcare services
              </p>
            </div>
            </div>
            <div className='self-center w-fit h-fit flex flex-row gap-8 m-[30px]'>
            <button className='border pr-[20px] pl-[20px] p-[10px] text-center  bg-emerald-500  text-white font-bold rounded-md hover:bg-emerald-600 transition-all duration-300'>
              Sign up
            </button>
            <button className='border pr-[20px] pl-[20px] p-[10px]  bg-white text-emerald-600 font-bold rounded-md hover:bg-gray-200 transition-all duration-300'>
              Learn More
            </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col  w-ull h-fit'>
        <div className='w-full h-full pt-[7px] pb-[30px] bg-cover  bg-no-repeat mb-[50px]' style={{ backgroundImage: `url(${testimonial})` }}>
          <h1 className='font-bold text-[30px] self-center text-center'><span className='bg-blue-200'>Testi</span>monial</h1>
          <div className='w-[33%] h-fit grid grid-cols-[0.7fr_2fr] mt-[10%] m-[10px]'>
          <img src={testi} className='w-[67px] h-[67px]  rounded-[30px]'/>
          <p className='font-bold text-[18px]'>
          <i>
            "The treatment I received was exceptional. 
            I highly recommend this clinic".
          </i>
          </p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Home
