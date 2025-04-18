import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import profile from '../assets/BG.jpg';
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import otp from '../assets/otp.jpg';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [submitError, setSubmitError] = useState('');
  const [role, setRole] = useState('');
  const [errorColor, setErrorColor] = useState('red');
  const [myOtp, setMyOtp] = useState([]);
  const [otpMessage, setOtpMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState('')

  useEffect(() => {
    if (!success) {
      setDisabled(!Email || !password || !role);
    } else {
      setDisabled(myOtp.length !== 6);
    }
  }, [Email, password, role, success, myOtp]);

  const handleOtp = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const myOtpNumber = myOtp.join("");
    const myVerify = role === 'Patient' 
      ? 'https://baho-healthcare.onrender.com/api/patient/verify' 
      : 'https://baho-healthcare.onrender.com/api/doctor/verify';
    
    fetch(myVerify, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Email, otp: myOtpNumber })
    })
    .then(response => {
      if (!response.ok) {
        const status = response.status;
        setOtpMessage(status === 400 ? 'Invalid or expired OTP code' : 'Bad request');
        setErrorColor('red');
        throw new Error(status === 400 ? 'Invalid OTP' : 'Bad request');
      }
      return response.json();
    })
    .then(data => {
        if(data)
      setOtpMessage('OTP verified successfully');
      setErrorColor('green');
      setTimeout(() => {
        setOtpMessage('');
        navigate('/patient');
        setSuccess(false);
      }, 4000);
    })
    .catch(error => {
      console.error('OTP verification failed:', error);
      setTimeout(() => setOtpMessage(''), 4000);
    })
    .finally(() => setIsSubmitting(false));
  };

  const resendOtp = (event) => {
    event.preventDefault();
    const resend = role === 'Patient' 
      ? 'https://baho-healthcare.onrender.com/api/patient/resendOtp' 
      : 'https://baho-healthcare.onrender.com/api/doctor/resendOtp';
    
    fetch(resend, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Email })
    })
    .then( function(response) {
      if (!response.ok){
        setOtpMessage('Failed to resend OTP')
        setErrorColor('red');
         throw new Error('Failed to resend OTP');
        }
         return response.json()
    })
    .then(function(data){
        if(data){
            setOtpMessage('OTP resent successfully');
            setErrorColor('green');
        }
    })
    .catch(error => {
      console.error('Resend OTP failed:', error);
      setOtpMessage('Failed to resend OTP');
      setErrorColor('red');
    })
    .finally(() => setTimeout(() => setOtpMessage(''), 4000));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const myApi = role === 'Patient' 
      ? 'https://baho-healthcare.onrender.com/api/patient/login' 
      : 'https://baho-healthcare.onrender.com/api/doctor/login';
    
    fetch(myApi, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
         Email: Email,
         Password: password 
        })
    })
    .then(response => {
      if (!response.ok) {
        if(response.status === 404){
          setSubmitError('invalid inputs')
          setErrorColor('red')
          setIsSubmitting(false);
          setTimeout(() => setSubmitError(''), 3000);
          throw new Error('Invalid inputs')
        }
        else if(response.status=== 400){
          setSubmitError('bad request')
        setErrorColor('red');
        setIsSubmitting(false);
        setTimeout(() => setSubmitError(''), 3000);
        throw new Error('bad request');
        }
        else if(response.status === 500){
          setSubmitError('Internal server error')
          setErrorColor('red')
          setIsSubmitting(false);
          setTimeout(() => setSubmitError(''), 3000);
          throw new Error('Internal sever error')
        }
      }
      return response.json();
    })
    .then(function(data) {

      if(data){
      const safeUserData = {
        id: data.user._id,
        firstName: data.user.firstName,
        lastName : data.user.lastName
      };
      const initials = 
      (safeUserData.firstName ? safeUserData.firstName[0] : '') + 
      (safeUserData.lastName ? safeUserData.lastName[0] : '');

    setUser(initials);
      
      localStorage.setItem('user', JSON.stringify(safeUserData));
      setUser(initials);
      localStorage.setItem('me', initials);
      setIsSubmitting(false);
      
      setSubmitError('Login successful');
      setErrorColor('green');
      setTimeout(() => navigate(role === 'Patient' ? '/patient' : '/doctor'), 1000);
      return
        }
      else{
        setSubmitError('not submitted')
        setErrorColor('red')
        setIsSubmitting(false);
        setTimeout(function(){
          setSubmitError('')
        },3000)
        return
      
      }})
    .catch(error => {
      console.error(`Login error for ${role}:`, error);
      setSubmitError(`An error occurred while logging in as ${role}`);
      setErrorColor('red');
      setIsSubmitting(false);
      setTimeout(() => setSubmitError(''), 3000);
    })
  };
const forget = function(event){
    event.preventDefault()
    const myApi = role === 'Patient' 
    ? 'https://baho-healthcare.onrender.com/api/patient/forget' 
    : 'https://baho-healthcare.onrender.com/api/doctor/forget';
    fetch(myApi,{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            Email: Email
        }),
    })
    .then(response => {
        if (!response.ok) throw new Error('Failed to change');
        setSubmitError('password successfully');
        setErrorColor('green');
        setTimeout(() => setSubmitError(''), 3000);
      })
      .catch(error => {
        console.error('password failed:', error);
        setSubmitError('password failed');
        setErrorColor('red');
        setTimeout(() => setSubmitError(''), 3000);
      })
}

  return (
    <div className='w-full  h-screen max-h-screen right-0 grid grid-cols-2'>
      {/* Left Side */}
        <div className='relative w-full h-full   overflow-y-hidden   grid items-center grid-cols-1 gap-5 bg-[#0dab66] text-white '>
            <div className=' grid grid-cols-1   w-[70%] gap-6.5 text-start justify-items-start justify-self-center'>
            <div className='grid grid-cols-1 gap-27'>
            <div className='grid'>
            <Link to ='/'><IoArrowBackCircle size={40} className='text-white mb-[3%] mt-[10%]'/></Link>
            <h1 className='font-bold text-white text-[40px] leading-12 p-[5px]'>
                Welcome to Baho Health
            </h1>
            <p className='text-white p-[5px] font-poppins font-thin text-[19px]'>
                Where you can discover a wide range of healthcare
                 services to meet your needs
            </p>
            </div>
            <div className='grid '>
                <div className='flex flex-row gap-2.5'>
                    <FaStar size = {20} className = { 'text-orange-400'}/>
                    <FaStar size = {20} className = { 'text-orange-400'}/>
                    <FaStar size = {20} className = { 'text-orange-400'}/>
                    <FaStar size = {20} className = { 'text-orange-400'}/>
                    <FaStar size = {20} className = { 'text-orange-400'}/>
                </div>
            <p className = 'text-white p-[5px] pl-0 text-[19px] font-thin mt-[7px]'>
                <i>This is a good project cause it saved me a lot of times,
                 you are time saver. Very convenient to use.</i>
            </p>
            </div>
            </div>
            <div className='flex flex-row gap-4'>
                <img src={profile} className='w-[60px] h-[60px] rounded-full'/>
                <div className='ml-[0px]'>
                    <h1 className='font-bold text-[20px] font-poppins'>Devon Lane</h1>
                    <p className='text-[#dee2e6] text-[16px] font-bold font-poppins'>Patient</p>
                </div>
            </div>
            </div>
            </div>

      {/* Right Side */}
      <div className='w-full p-[10%] pt-[10%]  flex flex-col overflow-y-hidden   h-full'>
        {!success ? (
          <form className='w-full text-start pl-[10%] pr-[1%] p-[4.0%] pt-0 rounded-[7px]' onSubmit={handleLogin}>
            <h1 className='font-bold text-[30px] mb-[10px] text-[#0dab66]'>Login</h1>
            <p style={{color: errorColor}}>{submitError}</p>
            <p className='text-gray-400 mt-[5px] mb-[20px]'>
              Login with the credentials that you used while registering
            </p>
            
            <div className='relative flex flex-col gap-3'>
              <label htmlFor='Email' className='text-gray-600'>Email address</label>
              <input 
                type='Email' 
                name='Email' 
                value={Email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Type your Email address' 
                className='w-full border border-[#0dab66] pl-[10px] p-[7px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'
              />
              <button type="button" className="absolute right-3 top-3/4 transform -translate-y-1/2 text-sm text-gray-400">
                <Mail size={20}/>
              </button>
            </div>

            <div className="relative flex flex-col  mt-[10px]">
              <label htmlFor='Password' className='text-gray-600 mb-[17px]'>Password</label>
              <input 
                type={showPassword ? "text" : "password"}
                name='password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Type your password' 
                className='w-full border border-[#0dab66] pl-[10px] p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'
              />
              <button 
                type="button" 
                className="absolute right-3 top-17 transform -translate-y-1/2 text-sm text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
              </button>
            </div>

            <div className="relative flex flex-col gap-1 mt-[10px]">
            <label htmlFor='Role' className='text-gray-600 mb-[17px]'>Role</label>
            <select 
              name='Role' 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className='w-full border border-[#0dab66] pl-[10px] p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'
            >
              <option value='' disabled>Select role</option>
              <option value='Patient'>Patient</option>
              <option value='Doctor'>Doctor</option>
            </select>
            </div>

            <div className='w-full mt-[20px] mb-[20px] flex gap-2'>
              <input 
                type='checkbox' 
                name='rememberMe' 
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className='size-[20px] mt-[3px]'
              /> 
              <p className='text-gray-600'>Always remember me</p>
              <button type='button' onClick={forget} className='text-green-500 ml-[30.8%]'>Forgot password?</button>
            </div>

            <button 
              type='submit' 
              disabled={disabled || isSubmitting}
              className={`w-full text-center text-white font-bold p-[5px] mb-[7px] rounded-[5px] ${
                disabled || isSubmitting 
                  ? 'bg-[#a6ebcd] cursor-not-allowed' 
                  : 'bg-[#1aa569] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                <div className="flex justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                </div>
              ) : (
                'Login'
              )}
            </button>

            <p className='text-gray-600 mt-[20px]'>
              Don't have an account? <Link to='/signup' className='text-green-500'>Create free account</Link>
            </p>
          </form>
        ) : (
          <form 
            className='absolute justify-self-center border self-center items-center w-[50%] h-fit ml-[1%] p-[5.4%] mt-[1.0%] rounded-[7px] bg-cover bg-center' 
            style={{ backgroundImage: `url(${otp})` }} 
            onSubmit={handleOtp}
          >
            <div className='flex flex-col gap-7 self-center bg-white text-center rounded-[10px] p-[30px]'>
              <p style={{color: errorColor}}>{otpMessage}</p>
              <p className='text-gray-600'>
                Protecting your account is our priority! Please confirm your identity by providing the code sent to your email
              </p>
              <div className='w-full h-fit grid grid-cols-6 gap-4'>
                {[...Array(6)].map((_, i) => (
                  <input 
                    key={i}
                    type='text' 
                    name='otp' 
                    value={myOtp[i] || ''}
                    maxLength={1}
                    onChange={(e) => {
                      const updatedOtp = [...myOtp];
                      updatedOtp[i] = e.target.value.trim();
                      setMyOtp(updatedOtp);
                    }}
                    className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'
                  />
                ))}
              </div>
              <p className='text-gray-600'>
                Haven't received it yet? <button type='button' onClick={resendOtp} className='text-green-600'>Resend</button>
              </p>
              <div className='flex flex-row gap-[57%] w-full'>
                <button 
                  type='button' 
                  className='text-center self-start rounded-[7px] font-bold pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500'
                  onClick={() => setSuccess(false)}
                >
                  Cancel
                </button>
                <button 
                  type='submit' 
                  disabled={isSubmitting || disabled}
                  className={`text-center text-white rounded-[7px] self-end font-bold pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500 ${
                    isSubmitting || disabled 
                      ? 'bg-[#a6ebcd] cursor-not-allowed' 
                      : 'bg-emerald-600 cursor-pointer'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    'Verify'
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;