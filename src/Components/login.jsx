import React, { useState,useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import profile from '../assets/BG.jpg';
import { Eye, EyeOff,Mail, User } from "lucide-react";
import { Routes, Route, Link,useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from "react-icons/io5";
import otp from '../assets/otp.jpg';

const Login = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [rememberMe, setRememberMe] = useState('')
        const [Email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [disabled, setDisabled] = useState(true)
        const [submitError, setSubmitError] = useState('')
        const [submitColor, setSubmitColor] = useState('red')
        const [role,setRole] = useState('')

        const [errorColor, setErrorColor] = useState('red')
        const [myOtp, setMyOtp] = useState([]);
        const [otpMessage, setOtpMessage] = useState('')
        const [isSubmitting, setIsSubmitting] = useState(false);
        const navigate = useNavigate()
        const [success, setSuccess] = useState(false)

        useEffect(()=>{
            if(!success){
            if(!Email || !password || !role){
                setDisabled(true)
            }
            else{
                setDisabled(false)
            }}
            else if(success){
                if(myOtp.length !==6){
                    setDisabled(true)
                }
                else{
                    setDisabled(false)
                }
            }
        },[Email,password,disabled,role,success,myOtp])


            const handleOtp = function(event){
                event.preventDefault();
                setIsSubmitting(true);
                const myOtpNumber = myOtp.join("");
                const myVerify = role === 'Patient' ? 'https://baho-healthcare.onrender.com/api/patient/verify' : 'https://baho-healthcare.onrender.com/api/doctor/verify'
                fetch(myVerify,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Email: Email,
                        otp: myOtpNumber,
                    })
                })
                .then(function(response){
                    if(!response.ok){
                        if(response.status === 400){
                            setOtpMessage('invalid or expired otp code')
                            setErrorColor('red')
                            setIsSubmitting(false);
                            setTimeout(function(){
                                setOtpMessage('')
                            },4000)
                            throw new Error('Invalid or expired otp code')
                        }
                        else if(response.status === 404){
                            setOtpMessage('bad request')
                            setErrorColor('red')
                            setIsSubmitting(false);
                            setTimeout(function(){
                                setOtpMessage('')
                            },4000)
                            throw new Error('bad Request')
                        }
                        else{
                            console.log('the error code is:'+ response.status)
                        }
                    }
                    return response.json()
                })
                .then(function(data){
                    if(data){
                    setOtpMessage('otp Verified successfully')
                    setErrorColor('green')
                    setIsSubmitting(false);
                    setTimeout(function(){
                    setOtpMessage('')
                    navigate('/patient')
                    setSuccess(false)
                    },4000)
                    return;
                    }
                    else{
                        setOtpMessage('otp Verification not done')
                        setErrorColor('red')
                        setIsSubmitting(false);
                        setTimeout(function(){
                            setOtpMessage('')
                        },4000)
                        return
                    }
                })
                .catch(function(error){
                    console.error('Failed to verify otp code: ',error)
                    setOtpMessage('Failed to verify otp')
                    setErrorColor('red')
                    setIsSubmitting(false);
                    setTimeout(function(){
                        setOtpMessage('')
                    },4000)
                })
        
            }
        
            {/* Resend OTP code */}
        
            const resendOtp = function(event){
                event.preventDefault()
                const resend = role === 'Patient' ? 'https://baho-healthcare.onrender.com/api/patient/resendOtp' 
                :'https://baho-healthcare.onrender.com/api/doctor/resendOtp'
                fetch(resend,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Email: Email,
                    })
                })
                .then(function(response){
                    if(!response.ok){
                        if(response.status === 400){
                            setOtpMessage('otp not sent')
                            setErrorColor('red')
                            setTimeout(function(){
                                setOtpMessage('')
                            },4000)
                            throw new Error('otp not sent')
                        }
                        else if(response.status === 404){
                            setOtpMessage('bad request')
                            setErrorColor('red')
                            setTimeout(function(){
                                setOtpMessage('')
                            },4000)
                            throw new Error('bad Request')
                        }
                    }
                    return response.json()
                })
                .then(function(data){
                    if(data){
                    setOtpMessage('otp resent successfully')
                    setErrorColor('green')
                    setTimeout(function(){
                        setOtpMessage('')
                    },4000)
                    return;
                    }
                    else{
                        setOtpMessage('otp resend not done')
                        setErrorColor('red')
                        setTimeout(function(){
                            setOtpMessage('')
                        },4000)
                        return
                    }
                })
                .catch(function(error){
                    console.error('Failed resend otp code: ',error)
                    setOtpMessage('Failed to resend otp')
                    setErrorColor('red')
                    setTimeout(function(){
                        setOtpMessage('')
                    },4000)
                })
        
            }

        const handleLogin = function(event) {
            event.preventDefault();
            setIsSubmitting(true);
            const myApi = role === 'Patient' ? 'https://baho-healthcare.onrender.com/api/patient/login' 
            : 'https://baho-healthcare.onrender.com/api/doctor/login';
            fetch( myApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    Email: Email,
                    Password: password
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
                    else{
                        setSubmitError('Bad request');
                        setSubmitColor('red');
                        setIsSubmitting(false);
                    }
                    setTimeout(() => setSubmitError(''), 3000);
                    throw new Error(`Error ${response.status}`);
                }
                return response.json();
            })
            .then(function(data) {
                if (data) { 
                    setSubmitError('Login is successful');
                    setSubmitColor('green');
                    setIsSubmitting(false);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    setTimeout(function(){
                        setSubmitError('')
                        navigate('/patient')
                        return
                    })
                } else {
                    setSubmitError('Login failed');
                    setSubmitColor('red');
                    setIsSubmitting(false);
                    return
                }
                setTimeout(() => setSubmitError(''), 3000);
            })
            .catch(function(error) {
                if (role === 'Patient'){
                console.error('An error occurred while logging in for the Patient : ', error);
                setSubmitError('An error occurred while logging in for the Patient');
                }
                else if(role === 'Doctor'){
                    console.error('An error occurred while logging in For the Doctor: ', error);
                    setSubmitError('An error occurred while logging in For the Doctor');
                }
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
                    <FaStar size = {26} className={ 'text-orange-400'} />
                    <FaStar size = {26} className={'text-orange-400'} />
                    <FaStar size = {26} className={ 'text-orange-400'} />
                    <FaStar size = {26} className={'text-orange-400'} />
                    <FaStar size = {26} className = {'text-orange-400'} />
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
                    <form className={!success ? 'w-full text-start pl-[10%] p-[4.0%]  border rounded-[7px]' : 'hidden'} onSubmit={handleLogin}>
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
                        <label htmlFor='Role' className=' text-gray-600 mb-[17px]'>Role</label>
                        <select name='Role' value={role} onChange={function(e){
                            setRole(e.target.value)
                        }} className= 'w-full border border-gray-400  pl-[10px] p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'>
                            <option value='' disabled>Select role</option>
                            <option value='Patient'>Patient</option>
                            <option value='Doctor'>Doctor</option>
                        </select>
                        <div className='w-full mt-[20px] mb-[20px] flex gap-2'>
                            <input type='checkbox' name='rememberMe' value={rememberMe} onChange={function(e){
                                setRememberMe(e.target.value)
                            }} className='size-[20px] mt-[3px]'/> 
                            <p className='text-gray-600'>Always remember me</p>
                            <Link to='/' className='text-green-500 ml-[40.8%]'>Forgot password?</Link>
                        </div>
                        <button type='submit' disabled= {disabled} className={disabled || isSubmitting ? 'bg-[#a6ebcd] w-full text-center text-white font-bold p-[5px] mb-[7px] rounded-[5px] cursor-not-allowed' 
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

                     <form className={success ?  'absolute justify-self-center border self-center items-center w-[50%]  h-fit ml-[1%] p-[5.4%] mt-[1.0%] rounded-[7px] bg-cover bg-center': 'hidden'} 
                            style={{ backgroundImage: `url(${otp})` }} onSubmit={(handleOtp)}>
                                <div className='flex flex-col gap-7 self-center bg-white text-center rounded-[10px] p-[30px]'>
                                    <p style={{color : errorColor}}>{otpMessage}</p>
                                    <p className='text-gray-600'>Protecting your account is our priority!
                                    Please confirm your identity by providing the code sent to your email
                                    </p>
                                    <div className='w-full h-fit grid grid-cols-6 gap-4'>
                                    <input type='text' name='otp' value={myOtp[0]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[0] = (e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                    <input type='text' name='otp' value={myOtp[1]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[1] = (e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                    <input type='text' name='otp' value={myOtp[2]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[2] =(e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                    <input type='text' name='otp' value={myOtp[3]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[3] = (e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                    <input type='text' name='otp' value={myOtp[4]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[4] = (e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                    <input type='text' name='otp' value={myOtp[5]} maxLength={1} onChange={function(e){
                        const updatedOtp = [...myOtp];
                        updatedOtp[5] = (e.target.value).trim();
                        setMyOtp(updatedOtp);
                    }} className='w-full h-[60px] text-center text-[20px] text-white font-bold bg-gray-400 border-0 active:border-0'/>
                    
                         </div>
                         <p className='text-gray-600'>It may take a minute to receive verification message, Haven't received it yet? <button type='button' onClick={resendOtp} className='text-green-600'>
                             Resend
                             </button></p>
                         <div className='flex flex-row gap-[57%] w-full'>
                             <button type='button' className='text-center self-start rounded-[7px] font-bold pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500'>Cancel</button>
                             <button type='submit' disabled= {disabled}
                             className={isSubmitting || disabled ? 'text-center text-white rounded-[7px] self-end font-bold bg-[#a6ebcd] pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500 cursor-not-allowed' : 'text-center text-white rounded-[7px] self-end font-bold bg-emerald-600 pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500 cursor-pointer'}>
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
                </div>
      
    </div>
  )
}

export default Login
