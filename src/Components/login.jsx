import React, { useState,useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import profile from '../assets/BG.jpg';
import { Eye, EyeOff,Mail, User } from "lucide-react";
import { Routes, Route, Link } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";

const Login = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [rememberMe, setRememberMe] = useState('')
        const [Email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [disabled, setDisabled] = useState(true)
        const [submitError, setSubmitError] = useState('')
        const [submitColor, setSubmitColor] = useState('red')
            const [isSubmitting, setIsSubmitting] = useState(false);

        useEffect(()=>{
            if(!Email || !password){
                setDisabled(true)
            }
            else{
                setDisabled(false)
            }
        },[Email,password,disabled])

        const handleLogin = function(event) {
            event.preventDefault();
            setIsSubmitting(true);
            fetch('http://localhost:5000/api/patient/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer <your-token-here>',
                },
                credentials: 'include',
                body: JSON.stringify({
                    Email: Email,
                    password: password
                }),
            })
            .then(function(response) {
                if (!response.ok) {
                    if (response.status === 404) {
                        setSubmitError('Invalid inputs');
                        setSubmitColor('red');
                        setIsSubmitting(false);
                    } else if (response.status === 500) {
                        setSubmitError('Internal server error');
                        setSubmitColor('red');
                        setIsSubmitting(false);
                    }
                    setTimeout(() => setSubmitError(''), 3000);
                    throw new Error(`Error ${response.status}`);
                }
                return response.json();
            })
            .then(function(data) {
                if (data.success) { 
                    setSubmitError('Login is successful');
                    setSubmitColor('green');
                    setIsSubmitting(false);
                } else {
                    setSubmitError('Login failed');
                    setSubmitColor('red');
                    setIsSubmitting(false);
                }
                setTimeout(() => setSubmitError(''), 3000);
            })
            .catch(function(error) {
                console.error('An error occurred while logging in: ', error);
                setSubmitError('An error occurred while logging in');
                setSubmitColor('red');
                setIsSubmitting(false);
                setTimeout(() => setSubmitError(''), 3000);
            });
        };
        

  return (
        <div className='w-full min-h-screen right-0 grid grid-cols-[1fr_2fr]'>
            <div className='w-full h-full flex flex-col bg-[#0dab66] text-white p-[30px] pb-[10px] pt-[10px]'>
                <Link to ='/'><IoArrowBackCircle size={40} className='text-white'/></Link>
                <h1 className='font-bold text-white text-center text-[47px] p-[10px]'>
                    Welcome to Baho Health
                </h1>
                <p className='text-white text-center p-[10px] text-[20px]'>
                    Where you can discover a wide range of healthcare
                     services to meet your needs
                </p>

                <div className='grid grid-cols-6 gap-0'>
                    <FaStar size = {30} className={ 'text-orange-400'} />
                    <FaStar size={30} className={'text-orange-400'} />
                    <FaStar size = {30} className={ 'text-orange-400'} />
                    <FaStar size = {30} className={'text-orange-400'} />
                    <FaStar size = {30} className = {'text-orange-400'} />
                </div>
                <p className = 'text-white text-center p-[10px] text-[20px] mt-[30px]'>
                    <i>This is a good project cause it saved me a lot of times,
                     you are time saver. Very convenient to use.</i>
                </p>
                <div className='w-fit grid grid-cols-2 gap-0'>
                    <img src={profile} className='w-[60px] h-[60px] rounded-full'/>
                    <div className='ml-[-25px]'>
                        <h1 className='font-bold text-[20px]'>Devon Lane</h1>
                        <p className='text-gray-700 text-[16px] font-bold'>Patient</p>
                    </div>
                </div>
                </div>

                {/* Right Nav */}

                <div className='w-full  p-[10%] pt-[3.5%] pb-[3.5%] flex flex-col'>
                    <form className='w-full text-start pl-[10%] p-[6.5%]  border rounded-[7px]' onSubmit={handleLogin}>
                        <h1 className='font-bold text-[25px] mb-[10px]'>Login</h1>
                        <p style={{color : submitColor}}>{submitError}</p>
                        <p className='text-gray-400 mt-[5px] mb-[20px]'>Login with the credentials that you used while registering</p>
                        <div className='relative flex flex-col gap-3'>
                        <label htmlFor='Email' className=' text-gray-600'>Email address</label>
                         <input type='Email' name='Email' value={Email} onChange={function(e){
                            setEmail(e.target.value)
                            }} placeholder='Type your Email address' className='w-full border border-gray-400  pl-[10px] p-[7px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
                        <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
                        <Mail/>
                        </button>
                        </div>
                        <div className="relative flex flex-col gap-1 mt-[10px]">
                        <label htmlFor='Password' className=' text-gray-600 mb-[17px]'>Password</label>
                        <input type={showPassword ? "text" : "password"}  name='password' value={password} onChange={function(e){
                            setPassword(e.target.value)
                            }} placeholder='Type your password' className= 'w-full border border-gray-400  pl-[10px] p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
                        <button type="button" className= "absolute right-3 top-17 transform -translate-y-1/2 text-sm text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}>
                        {(!showPassword || !password) ? <EyeOff/> : <Eye/>}
                        </button>
                        </div>
                        <div className='w-full mt-[20px] mb-[20px] flex gap-2'>
                            <input type='checkbox' name='rememberMe' value={rememberMe} onChange={function(e){
                                setRememberMe(e.target.value)
                            }} className='size-[20px] mt-[3px]'/> 
                            <p className='text-gray-600'>Always remember me</p>
                            <Link to='/' className='text-green-500 ml-[40.8%]'>Forgot password?</Link>
                        </div>
                        <button type='submit' disabled= {disabled} className={disabled? 'bg-[#a6ebcd] w-full text-center text-white font-bold p-[5px] mb-[7px] rounded-[5px] cursor-not-allowed' 
                            : 'bg-[#1aa569] w-full text-center text-white font-bold p-[5px] mb-[7px] rounded-[5px] cursor-pointer'} >
                                                                    {isSubmitting ? (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Login'
                )}
                            </button>
                        <p className='text-gray-600 mt-[20px]'>Do not have an account? <Link to ='/signup' className='text-green-500'>Create free account</Link></p>
                    </form>
                </div>
      
    </div>
  )
}

export default Login
