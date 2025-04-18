import React, { useState,useEffect} from 'react'
import { FaStar } from "react-icons/fa";
import { Routes, Route, Link ,useNavigate} from 'react-router-dom';
import { Eye, EyeOff,Mail, User } from "lucide-react";
import profile from '../assets/BG.jpg';
import otp from '../assets/otp.jpg';
import { FaUpload } from "react-icons/fa";  // Upload Icon
import { FaCheckCircle } from "react-icons/fa"; // Up Tick (Checkmark)
import { MdKeyboardArrowUp } from "react-icons/md"; // Up Arrow
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";
import { CheckCircle } from "lucide-react";
import { IoIosClose } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { color } from 'framer-motion';

const Signup = () => {
    
    const [selectError, setSelectError] = useState('')
    const [step1, setStep1] = useState(false)
    const [role, setRole] = useState('')
    const [submiterror, setSubmitError] = useState('')
    const [errorColor, setErrorColor] = useState('red')
    const [myOtp, setMyOtp] = useState([ '', '', '', '', '', '']);
    const [otpMessage, setOtpMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    {/* Patient's form */}

    const [showPassword, setShowPassword] = useState(false);
    const [confPassword, setConfPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [checkPass, setCheckPass] = useState('')
    const [fName, setfName] = useState('')
    const [phone, setPhone] = useState('')
    const [lName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [dates, setDates] = useState('')
    const [pNext, setPNext] = useState(true)
    const [pStep1, setPStep1] = useState(false)
    const navigate = useNavigate();
    const [emailerror, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [phoneError, setPhoneError] = useState('')


    {/* Doctor's step 1 */}
    const [FirstName, setFirstName] = useState('')
    const [province, setProvince] = useState('')
    const [lastName, setLastName] = useState('')
    const [dEmail, setDEmail] = useState('')
    const [dPassword, setDPassword] = useState('')
    const [dConfirmPassword, setDConfirmPassword] = useState('')
    const [dOb, setDOb] = useState('')
    const [dNext1, setDNext1] = useState(true)
    const [dstep1, setDstep1] = useState(false)
    const [dPhone, setDPhone] = useState('')

    {/* Doctor step 2 */}

    const [specialization, setSpecialization] = useState('')
    const [employer, setEmployer] = useState('')
    const [graduationYear, setGraduationYear] = useState('')
    const [school, setSchool] = useState('')
    const [previousEmployer, setPreviousEmployer] = useState('')
    const [medicalLicence, setMedicalLicense] = useState(null)
    const [dNext2, setDNext2] = useState(true)
    const [dstep2, setDstep2] = useState(false)

     {/* Doctor Step 3 */}

    const [bio, setBio] = useState('')
    const [Languages , setLanguages] = useState([])
    const [id, setId] = useState(null)
    const [dnext3, setDdNext] = useState(true)
    const [dstep3, setDstep3] = useState(false)
    const [success, setSuccess] = useState(false)
    const [signed, setSigned] = useState(false)

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            // Add language to array
            setLanguages((prev) => [...prev, value]);
        } else {
            // Remove language from array
            setLanguages((prev) => prev.filter((lang) => lang !== value));
        }
    };


    {/*OTP handling */}

    const handleOtp = function(event){
        event.preventDefault();
        setIsSubmitting(true);
        const myOtpNumber = myOtp.join("");
        const myUrl = role === 'Patient' ? 'https://baho-healthcare.onrender.com/api/patient/verify' 
        : 'https://baho-healthcare.onrender.com/api/doctor/verify';

        fetch(myUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: Email || dEmail,
                Otp: myOtpNumber,
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
                if(role === 'Doctor'){
                    setSigned(true)
                }
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
        : 'https://baho-healthcare.onrender.com/api/doctor/resendOtp';

        fetch(resend,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: Email || dEmail,
            })
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 400){
                    setOtpMessage('otp invalid')
                    setErrorColor('red')
                    setTimeout(function(){
                        setOtpMessage('')
                    },4000)
                    throw new Error('otp invalid')
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
            setOtpMessage('Failed to verify otp')
            setErrorColor('red')
            setTimeout(function(){
                setOtpMessage('')
            },4000)
        })

    }

    {/* Sign up Forms validation */}


    useEffect(() => {
        if(dstep1){
        if ((!FirstName || !lastName || !dEmail || !dPassword || !dConfirmPassword || !dPhone || !dOb || !province || dPassword !== dConfirmPassword)) {
            setDNext1(true); // Disable button
        } else {
            setDNext1(false); // Enable button
        }}
        else if(dstep2){
        if(!specialization || !employer || !graduationYear || !school || !previousEmployer || !medicalLicence) {
            setDNext2(true); // Disable button
        } else {
            setDNext2(false); // Enable button
        }}
        else if(dstep3){
            if(!bio || Languages.length ===0 || !id) {
                setDdNext(true); // Disable button
            } else {
                setDdNext(false); // Enable button
            }
        }
        else if(pStep1){
            const isPasswordValid = (password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))
            const isPhoneValid = /^(?:\+?\d{1,3})?[-.\s]?\(?\d{1,4}\)?([-.\s]?\d{2,4}){2,3}$/.test(phone);

            const isCheckPassValid = (checkPass.length >= 8 && /[a-z]/.test(checkPass) && /[A-Z]/.test(password) && /[0-9]/.test(checkPass) && /[!@#$%^&*(),.?":{}|<>]/.test(checkPass));


            
            if(phone.length > 0 && !isPhoneValid){
                setPhoneError('Invalid phone number')
                setPNext(true)
                setEmailError('')
                setPasswordError('')
                setErrorColor('red')
                return
            }
            else if(isPhoneValid && phone.length >=10){
                setPhoneError('Valid phone number')
                setPNext(true)
                setEmailError('')
                setPasswordError('')
                setErrorColor('green')
                return
            }
            else if(!isPasswordValid && password.length >0){
                setPhoneError('')
                setPNext(true)
                setEmailError('')
                setPasswordError('Very week Password')
                setErrorColor('orange')
                return
            }
            else if(isPasswordValid){
                setPhoneError('')
                setPNext(true)
                setEmailError('')
                setPasswordError('Strong Password')
                setErrorColor('green')
                return
            }
             
            else if((isPasswordValid !== isCheckPassValid) && checkPass.length > 0 ){
                setPhoneError('')
                setPNext(true)
                setEmailError('')
                setPasswordError('The passwords do not match')
                setErrorColor('red')
                return
            }
            else if((isPasswordValid === isCheckPassValid) && isCheckPassValid){
                setPhoneError('')
                setPNext(true)
                setEmailError('')
                setPasswordError('Passwords match')
                setErrorColor('green')
                return
            }
            else if (
                !fName || !lName || !Email || !dates
              ) {
                setPNext(true); // Disable the button
              }
             else {
                setPNext(false); // Enable button
                setPhoneError('')
                setPNext(true)
                setEmailError('')
                setPasswordError('')
                return
            }
        }
    }, [FirstName, lastName, dEmail, dPassword, dConfirmPassword, dOb,dPhone, province,dstep1,specialization, employer, graduationYear, school, previousEmployer, medicalLicence,dstep2, bio,Languages,id,dstep3, fName,lName,Email,password,checkPass,dates,phone,pNext,pStep1]);


    {/* Patient Form Submission */}

    const handleSubmit = function(event){
        event.preventDefault();
        setIsSubmitting(true);
       
        fetch('https://baho-healthcare.onrender.com/api/patient/signup',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
                
            },
            credentials: 'include',
            body: JSON.stringify({
                Fname : fName,
                Lname : lName,
                Email : Email,
                Password : password,
                //BirthDate: dates,
                phone: phone
            }),
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setSubmitError('Invalid inputs')
                    setErrorColor('red')
                    setIsSubmitting(false);
                    setTimeout(function(){
                        setSubmitError('')
                    },4000)
                    throw new Error("Invalid inputs")
                }
                else if(response.status === 500){
                    setSubmitError('Internal server error')
                    setErrorColor('red')
                    setIsSubmitting(false);
                    setTimeout(function(){
                        setSubmitError('')
                    },4000)
                    throw new Error('Internal server error')
                }
                else if (response.status === 400) {
                    setSubmitError('Please check your inputs');
                    setIsSubmitting(false);
                    throw new Error('Please check your inputs')
                  }
            }
            return response.json()
        })
        .then(function(data){
            if(data){
                setSubmitError("Registration gone successfully!")
                setErrorColor('green')
                setIsSubmitting(false);
                setTimeout(function(){
                    setSubmitError('')
                    setSuccess(true)
                },4000)
                return;
            }
            else{
                setSubmitError('Registration not completed, try again')
                setErrorColor('red');
                setIsSubmitting(false);
                setTimeout(function(){
                    setSubmitError('')
                },4000)
            }
        })
        .catch(function(error){
            console.error('Failed to register, try again later: ', error)
            setSubmitError('Failed to register, try again later.')
            setErrorColor('red')
            setIsSubmitting(false);
            setTimeout(function(){
                setSubmitError('')
            },4000)
        })
    }

    {/* Doctor's form submission */}

    const doctorSignup = function(event){
        event.preventDefault()
        setIsSubmitting(true);
        fetch('https://baho-healthcare.onrender.com/api/doctor/signup', {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
               Fname: FirstName,
               Lname: lastName,
               Email: dEmail,
               Password: dPassword,
               BirthDate: dOb,
               province: province,
               Specialization: specialization,
               currentEmployer: employer,
               previousEmployer: previousEmployer,
               gradYear: graduationYear,
               medicalSchool: school,
               //LicenseImage: medicalLicence,
               Bio: bio,
               Language: Languages,
               //Idimage: id,
               phone: dPhone,
            })
        })
        .then(function(response){
            if(!response.ok){
                if(response.status === 404){
                    setSubmitError('Invalid inputs')
                    setErrorColor('red')
                    setIsSubmitting(false);
                    setTimeout(function(){
                        setSubmitError('')
                    },4000)
                    throw new Error("Invalid inputs")
                }
                else if(response.status === 500){
                    setSubmitError('Internal server error')
                    setErrorColor('red')
                    setIsSubmitting(false);
                    setTimeout(function(){
                        setSubmitError('')
                    },4000)
                    throw new Error('Internal server error')
                }
            }
            return response.json()
        })
        .then(function(data){
            if(data){
                setSubmitError("Doctor Registration gone successfully!")
                setErrorColor('green')
                setIsSubmitting(false);
                setTimeout(function(){
                    setSubmitError('')
                    setSuccess(true)
                },1000)
                return;
            }
            else{
                setSubmitError('Registration of doctor not completed, try again')
                setErrorColor('red');
                setIsSubmitting(false);
                setTimeout(function(){
                    setSubmitError('')
                },4000)
            }
        })
        .catch(function(error){
            console.error('Failed to register the doctor, try again later: ', error)
            setSubmitError('Failed to register the Doctor, try again later.')
            setErrorColor('red')
            setIsSubmitting(false);
            setTimeout(function(){
                setSubmitError('')
            },4000)
        })
    }
    

  return (
    <div>
    <div className='w-full min-h-screen h-screen right-0 grid grid-cols-2'>

        {/* left nav */}

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


            {/* Right Nav */}


        <div className = { success ? ' flex flex-col h-full w-full bg-blue-200/60 overflow-y-auto ' : 'overflow-y-auto h-full flex flex-col'}>
        <div className = { role === 'Doctor' ? 'w-full p-[15px] grid grid-cols-[0.2fr_4fr_0.2fr_4fr_0.2fr_4fr_0.2fr] gap-0' : 'w-full p-[15px] grid grid-cols-[0.2fr_4fr_0.2fr] gap-0'}>
        <div className = {!role ? 'h-fit w-fit  bg-gray-500 border-3  text-center rounded-full p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px] ' :  ' bg-[#1da857] h-fit w-fit border-3 text-center rounded-full p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px]'}>
                1
        </div>
        <div className={!step1 ? 'w-full h-[5px] bg-gray-600 mt-[30px] ' : 'w-full h-[5px] bg-[#1da857] mt-[30px] '}>

        </div>

            <div className = {pNext && dNext1 ? 'h-fit w-fit  bg-gray-500 border-3  text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px]' : ' bg-[#1da857] h-fit w-fit border-3 text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px]'}>
            2</div>
            <div className ={pNext && dNext2 && role ==='Doctor' ? 'w-full h-[5px] bg-gray-600 mt-[30px] ' : role ==='' || role === 'Patient' ? 'hidden' : 'w-full h-[5px] bg-[#1da857] mt-[30px]'}></div>
            <div className = {!success && dnext3 && role ==='Doctor' ? 'h-fit w-fit   bg-gray-500 border-3  text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px] ': role ==='' || role === 'Patient' ? 'hidden' : ' bg-[#1da857] h-fit w-fit border-3 text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px]'}>
            3</div>
            <div className = {role ==='Doctor' && dnext3 ? 'w-full h-[5px] bg-gray-600 mt-[30px] ' : role ==='Doctor' && !dnext3 ? 'w-full h-[5px] bg-[#1da857] mt-[30px]':  'hidden'}></div>
            <div className = { role ==='Doctor' && !success ? 'h-fit w-fit   bg-gray-500 border-3  text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px] ' : role ==='Doctor' && success ? ' bg-[#1da857] h-fit w-fit border-3 text-center rounded-[30px] p-[10px] pl-[20px] pr-[20px] text-white font-bold text-[20px]' : 'hidden'}>
            4</div>
        </div>
        <form className={!pStep1 && !dstep1 && !dstep2 && !dstep3 ?  'w-full h-fit self-center items-start text-center flex flex-col p-[5%] pl-[10%] pr-[10%]' : ':transition-transform duration-700 opacity-100 translate-x-full hidden'}>                <h1 className='font-bold text-black text-[27px] mb-[15px]  w-1/2 self-center'>User Role Selection</h1>
                <label htmlFor = 'role' className = 'text-[20px] self-start'>Role</label>
                <select name = 'role' value = {role} onChange = {function(e){
                    setRole(e.target.value)

                }} className='w-full p-[10px] border rounded-[7px] self-center'>
                <option value = '' disabled selected> Select role </option>
                <option value = 'Patient'> Patient</option>
                <option value = 'Doctor'>Doctor</option>
                </select>
                <p className='text-red-500'>{selectError}</p>
                 <div className='text-[20px] text-start items-start self-center flex-col mt-[25px] flex w-full'>
                    <Link to = '/login' className=' text-[#1da857] text-start self-start '>Sign in instead</Link>
                    <button type='button'onClick={function(){
                        if(role === 'Doctor'){
                        setStep1(true)
                        setDstep1(true)
                        setSelectError('')

                        }
                        else if(role === 'Patient'){
                            setPStep1(true)
                            setStep1(true)
                            setSelectError('')
                        }
                        else{
                            setStep1(false)
                            setPStep1(false)
                            setDstep1(false)
                            setSelectError('Please select role First')
                        }
                    }} className='text-white bg-[#1da857] pl-[20px] pr-[20px] p-[7px] rounded-[7px] cursor-pointer self-end mt-[-39px]'>Next</button>
                 </div>
            </form>

            {/* Patient Form */}

            <form className={ role === 'Patient' && pStep1 ?  'w-full h-fit self-center text-center flex flex-col pl-[30px] pr-[30px] p-[15px]':
                 ':transition-transform duration-700 opacity-100 translate-x-full hidden'} onSubmit={handleSubmit}>
                <h1 className='font-bold text-black text-center text-[30px] m-[7px]'>Patient's Personal info</h1>
                <p style={{color : errorColor}}>{submiterror}</p>

          <div className='grid grid-cols-[2fr_2fr] gap-3'>
          <div  className='relative flex flex-col'>
          <label htmlFor='Fist name' className=' text-gray-600 text-start'>First name</label>
          <input type='text' name='First name' autocomplete="new-password" value={fName} onChange={function(e){
            setfName(e.target.value)
          }} placeholder='First name' className='w-full border border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
           </button>
          </div>
          <div  className='relative flex flex-col'>
          <label htmlFor='last name' className=' text-gray-600 text-start'>Last name</label>
          <input type='text' name='last name' autocomplete="new-password" value={lName} onChange={function(e){
            setLName(e.target.value)
          }} placeholder='Last name' className='w-full border border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
         </button>
        </div>
        </div>
        <div className=' grid grid-cols-[2fr_2fr] gap-3'>
        <div className='relative flex flex-col'>
          <label htmlFor='Email' className=' text-gray-600 text-start'>Email address</label>
          <input type='Email' name='Email' value={Email} onChange={function(e){
            setEmail(e.target.value)
          }} placeholder='Your Email address' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <Mail/>
           </button>
           <p style={{color : errorColor}}>{emailerror}</p>
           </div>
           <div className='relative flex flex-col'>
           <label htmlFor='phone' className=' text-gray-600 text-start'>Phone number</label>
          <input type='tel' name='phone' value={phone} onChange={function(e){
            setPhone(e.target.value)
          }} placeholder='Your phone number' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <MdContactPhone size={20}/>
           </button>
           <p style={{color : errorColor}}>{phoneError}</p>
          </div>
          </div>
          <div className='grid grid-cols-2 w-full gap-3'>
            <div>
          <div className="relative flex flex-col">
          <label htmlFor='Password' className=' text-gray-600 text-start'>Password</label>
          <input type={showPassword ? "text" : "password"}  name='password' value={password} onChange={function(e){
            setPassword(e.target.value)
          }} placeholder='Create password' className= 'w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setShowPassword(!showPassword)}>
            {(!showPassword || !password) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          <p className='text-start' style={{color : errorColor}}>{passwordError}</p>
          </div>
          <div>
          <div className="relative flex flex-col">
          <label htmlFor='confirm assword' className=' text-gray-600 text-start'>confirm Password</label>
          <input type={confPassword ? "text" : "password"} name='confirm password' value={checkPass} onChange={function(e){
            setCheckPass(e.target.value)
          }} placeholder='Re-type your password' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setConfPassword(!confPassword)}>
            {(!confPassword || !checkPass) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          <p className='text-start' style={{color : errorColor}}>{passwordError}</p>
          </div>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='date' className=' text-gray-600 text-start'>Date of Birth</label>
          <input type='date' name='date' value={dates} onChange={function(e){
            setDates(e.target.value)
          }} placeholder='your birth date' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          </div>
          <div className='w-full text-[20px] self-end ml-[39px] mt-[25px] grid grid-cols-2 gap-16'>
                    <button className=' text-[#1da857] text-start' onClick={function(){
                        setPStep1(false)
                        setRole('')
                        setPNext(true)
                        setDdNext(true)
                        setStep1(false)
                    }}>Previous</button>
                    <button type='submit' disabled = {pNext} className={pNext || isSubmitting ? 'text-white bg-green-200 p-[7px] rounded-[7px] cursor-not-allowed disabled-true' : 'text-white bg-[#1da857] p-[7px] rounded-[7px] cursor-pointer'}>
                        {isSubmitting ? (
                  <div className="flex justify-center">
                    <div className="w-6 h-6 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  'Sign up'
                )}

                        </button>
                 </div>
        </form>
        <form onSubmit={doctorSignup}>


                                     {/* Doctor's Personal Info */}


        <div className={role === 'Doctor' && dstep1 ?  'w-full h-fit self-center text-center flex flex-col pl-[30px] pr-[30px] p-[15px]': ':transition-transform duration-700 opacity-100 translate-x-full hidden'} >
                <h1 className='font-bold text-black text-center text-[30px] m-[7px]'>Doctor's Personal info</h1>

          <div className='grid grid-cols-[2fr_2fr] gap-3'>
          <div  className='relative flex flex-col'>
          <label htmlFor='Fist name' className=' text-gray-600 text-start'>First name <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type='text' name='First name' value={FirstName} onChange={function(e){
            setFirstName(e.target.value)
          }} placeholder='First name' className='w-full border border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
           </button>
          </div>
          <div  className='relative flex flex-col'>
          <label htmlFor='last name' className=' text-gray-600 text-start'>Last name <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type='text' name='last name'  value={lastName} onChange={function(e){
            setLastName(e.target.value)
          }} placeholder='Last name' className='w-full border border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
         </button>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-3 w-full'>
        <div className='relative flex flex-col'>
          <label htmlFor='Email' className=' text-gray-600 text-start'>Email address <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type='Email' name='Email' value={dEmail} onChange={function(e){
            setDEmail(e.target.value)
          }} placeholder='Your Email address' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <Mail/>
           </button>
          </div>
          <div className='relative flex flex-col w-full'>
           <label htmlFor='phone' className=' text-gray-600 text-start'>Phone number</label>
          <input type='tel' name='phone' value={dPhone} onChange={function(e){
            setDPhone(e.target.value)
          }} placeholder='Your phone number' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <MdContactPhone size={20}/>
           </button>
          </div>
          </div>
          <div className='grid grid-cols-2 w-full gap-3'>
          <div className="relative flex flex-col">
          <label htmlFor='Password' className=' text-gray-600 text-start'>Password <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type={showPassword ? "text" : "password"} autoComplete="new-password"  name='password' value={dPassword} onChange={function(e){
            setDPassword(e.target.value)
          }} placeholder='Create password' className= 'w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setShowPassword(!showPassword)}>
            {(!showPassword || !password) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          <div className="relative flex flex-col">
          <label htmlFor='confirm-password' className=' text-gray-600 text-start'>confirm Password <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type={confPassword ? "text" : "password"} autoComplete="new-password" name='confirm password' value={dConfirmPassword} onChange={function(e){
            setDConfirmPassword(e.target.value)
          }} placeholder='Re-type your password' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setConfPassword(!confPassword)}>
            {(!confPassword || !checkPass) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='date' className=' text-gray-600 text-start'>Date of Birth <span className='text-red-500 ml-[3px]'> * </span></label>
          <input type='date' name='date' value={dOb} onChange={function(e){
            setDOb(e.target.value)
          }} placeholder='Your Email address' className='w-full border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          </div>
          <div className='flex flex-col'>
          <label htmlFor='date' className=' text-gray-600 text-start'>Province <span className='text-red-500 self-start ml-[3px]'> * </span></label>
          <select name='dropdown' value={province} onChange={function(e){
                    setProvince(e.target.value)
                 }} className='w-1/2 border border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'>
                    <option value='' disabled selected> Select your province of living</option>
                    <option value="kigali City">Kigali City</option>
                    <option value="Northern Province">Northern Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="Western Province">Western Province</option>
            </select>
            </div>
          <div className='w-full text-[20px] self-end ml-[39px] mt-[25px] grid grid-cols-2 gap-16'>
                    <button className=' text-[#1da857] text-start' onClick={function(){
                        setDstep1(false)
                        setRole('')

                    }}>Previous</button>
                    <button type='button' onClick={function(e){ 
                        e.preventDefault()
                        setDstep2(true)
                        setDstep1(false)
                        setDstep1(false)
                    }} 
                        disabled={dNext1} className={dNext1 ? 'text-white bg-green-200 p-[7px] rounded-[7px] cursor-not-allowed disabled-true' : 'text-white bg-[#1da857] p-[7px] rounded-[7px] cursor-pointer'} >Next</button>
                 </div>
        </div>


                                  {/* Doctor's Professional info */}


        <div className={dstep2?  'w-full h-fit self-center text-center flex flex-col pl-[30px] pr-[30px]': ':transition-transform duration-700 opacity-100 translate-x-full hidden'}>
        <h1 className='font-bold text-black text-center text-[30px] ml-[7px]'>Doctor's professional info</h1>
        <div className='grid grid-cols-[2fr_2fr] gap-3'>
            <div className='w-full flex flex-col'>
                <label htmlFor='specialization' className='text-gray-600 text-start'>Specialization <span className='text-red-500 ml-[3px]'> * </span></label>
                <select name='specialization' value={specialization} className='w-full p-[7px] border border-gray-400 rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' onChange={function(e){
                    setSpecialization(e.target.value)
                }}>
                    <option value="" disabled> speciatization</option>
                    <option value='cardiology'> cardiology</option>
                    <option value='respiration'>respiration</option>
                    <option value='reproduction'> reproduction</option>
                    <option value='digestion'>digestion</option>
                    <option value='consultation'>consultation</option>
                </select>
            </div>
            <div className='w-full flex flex-col'>
            <label htmlFor='employer' className='text-gray-600 text-start'>Current Employer <span className='text-red-500 ml-[3px]'> * </span></label>
            <input type='text' name='employer' placeholder='Current Employer' value={employer} onChange={function(e){
                setEmployer(e.target.value)
            }} className='wifull border border-gray-400 p-[7px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50'/>
            </div>
            <div className='w-full flex flex-col'>
                <label htmlFor='graduationYear' className=' text-gray-600 text-start'>Graduation Year<span className='text-red-500 ml-[3px]'> * </span></label>
                <select name='graduationYear' value={graduationYear} className='w-full border border-gray-400 rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50 p-[7px]' onChange={function(e){
                    setGraduationYear(e.target.value)
                }}>
                    <option value="" disabled> Graduation year</option>
                    <option value='2024'> 2024</option>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'> 2019</option>
                    <option value='2018'>2018</option>
                    <option value='2017'>2017</option>
                    <option value='2016'>2016</option>
                    <option value='2015'>2015</option>
                    <option value='below'>below</option>
                </select>
            </div>
            <div className='w-full flex flex-col'>
                <label htmlFor='school' className='text-gray-600 text-start'>Medical School<span className='text-red-500 ml-[3px]'> * </span></label>
                <select name='school' value={school} className='w-full p-[7px] border border-gray-400  rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' onChange={function(e){
                    setSchool(e.target.value)
                }}>
                    <option value="" disabled> Medical school</option>
                    <option value='University of Rwana'>University of Rwanda</option>
                    <option value='University of Kigali'>University of Kigali</option>
                    <option value='University of Byumba'>University of Byumba</option>
                    <option value='Mount Kenya University'>Mount Kenya University</option>
                    <option value='Mount Kigali University'>Mount Kigali University</option>
                </select>
            </div>
        </div>
        <div  className='relative flex flex-col'>
          <label htmlFor='previousEmployer' className=' w-full text-gray-600 text-start'>Previous employer <span className='text-red-500 ml-[3px]'> * </span> </label>
          <input type='text' name='previousEmployer' value={previousEmployer} onChange={function(e){
            setPreviousEmployer(e.target.value)
          }} placeholder='eg: CHUK' className='w-full border border-gray-400 p-[7px] pl-[2px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <MdLocalHospital size={30} className='text-green-400'/>
           </button>
          </div>
          <div  className='relative flex flex-col  w-full gap-2'>
          <label htmlFor='medicalLicence' className='text-start w-full text-gray-600'>Medical License<span className='text-red-500 ml-[3px]'> * </span> </label>
          <div className='border h-fit border-gray-400 w-full p-[30px] pt-[10px] pb-[10px] flex flex-col rounded-[7px]'>
            <FaCloudUploadAlt size={55} className='self-center text-[#20B573]'/>
          <input type='file' name='medicalLicense' value={medicalLicence} onChange={function(e){
            setMedicalLicense(e.target.value)
          }}  className='  self-center pr-[14%] pl-[33%] p-[10px] rounded-[3px] text-center  text-blue-950 focus:border-b focus:border-white placeholder:text-gray-400 ' />
          <button className='bg-[#20B573] self-center text-white font-bold p-[9px] pr-[15px] pl-[15px] text-[20px] rounded-[8px]'>Upload</button>
          </div>
          <div className='w-full grid grid-cols-2 pl-[40px] pr-[40px]'>
            <button className='self-start text-[#20B573] ml-[-99%] text-[20px]' type='button' onClick={function(){
                setDstep2(false)
                setDstep1(true)
                setDstep3(false)
            }}>Previous</button>
            <button className={dNext2 ? 'bg-green-200 ml-[85%] text-white font-bold p-[13px] pr-[19px] pl-[19px] text-[20px] rounded-[8px] w-fit text-end cursor-not-allowed disabled-true:' : 'bg-[#20B573] ml-[85%] text-white font-bold p-[13px] pr-[19px] pl-[19px] text-[20px] cursor-pointer rounded-[8px] w-fit text-end'} onClick={function(e){
                e.preventDefault()
                setDstep1(false)
                setDstep2(false)
                setDstep3(true)
        }} disabled={dNext2}>Next</button>
          </div>
          </div>
        </div>


                                 {/* Doctor's Additional info */}



        <div className={dstep3 ?  'w-full h-fit self-center text-center flex flex-col pl-[30px] pr-[30px]': ':transition-transform duration-700 opacity-100 translate-x-full hidden'}>
        <h1 className='font-bold text-black text-start text-[25px] '>Doctor's additional info</h1>
        <p style={{color : errorColor}}>{submiterror}</p>
            <div className='w-full flex flex-col items-start text-[15px]'>
                <label htmlFor='language' className='text-gray-600'>Languages <span className='text-red-500 ml-[3px]'> * </span></label>
                <div className='text-[16px]'><input type='checkbox' name='language' value='English' className='size-[16px]  mr-[9px]'  onChange={handleCheckboxChange}/> English</div>
                <div className='text-[16px]'><input type='checkbox' name='language' value='Kinyarwand' className='size-[16px] mr-[9px]'  onChange={handleCheckboxChange}/> Kinyarwanda</div>
                <div className='text-[16px]'><input type='checkbox' name='language' value='French' className='size-[16px] mr-[9px]'  onChange={handleCheckboxChange}/> French</div>
                <div className='text-[16px]'><input type='checkbox' name='language' value='Swahili' className='size-[16px] mr-[9px]'  onChange={handleCheckboxChange}/> Swahili</div>
                <label htmlFor='Bio' className='text-gray-600 text-[16px]'>Your Bio(in not more than 1700 characters) <span className='text-red-500 ml-[3px]'> * </span></label>
                <textarea  name='Bio' value={bio} placeholder='Type your Bio here!' onChange={function(e){
                  const wordArray = e.target.value; 
                  if (wordArray.length <= 1700) {
                      setBio(wordArray);  
                  } 
                }} className='p-[7px] border border-gray-400  placeholder:text-[16px] w-full h-fit text-ster rounded-[7px]'/>
                <p className="text-sm text-gray-500 mt-1">
                {bio.length > 0 && (
                <>
                You've written <span className="font-medium">{bio.length}</span> characters. 
                Remaining: <span className="font-medium">{1700 - bio.length}</span>
                {1700 - bio.length <= 0 && (
                <span className="text-red-500"> (Maximum reached)</span>
                )}
                </>
                )}
                </p>
                          
            <label htmlFor='nationalId' className=' w-full text-start mt-[7px] text-gray-600 text-[16px]'>National Id<span className='text-red-500 ml-[3px]'> * </span> </label>
          <div className='border border-gray-400 pl-[30px] pr-[30px] flex flex-col p-[4px] rounded-[7px] w-full'>
            <FaCloudUploadAlt size={55} className='self-center text-[#20B573]'/>
          <input type='file' name='nationalId' value={id} onChange={function(e){
            setId(e.target.value)
          }}  className='  self-center pr-[14%] pl-[33%] p-[7px] rounded-[3px] text-center  text-blue-950 focus:border-b focus:border-white placeholder:text-gray-400 placeholder:text-[16px]' />
          <button className='bg-[#20B573] self-center text-white font-bold p-[9px] pr-[15px] pl-[15px] text-[17px] rounded-[8px]'>Upload</button>
          </div>
          <div className=' grid grid-cols-2 w-full pr-[30px] mt-[10px] mb-[15px]'>
            <button className='self-start text-[#20B573] text-start text-[20px]' type='button' onClick={function(){
                setDstep2(true)
                setDstep1(false)
                setDstep3(false)
            }}>Previous</button>
            <button className={ dnext3 || isSubmitting ? 'bg-green-200 self-end  text-white font-bold p-[7px] pr-[19px] pl-[19px] text-[17px] rounded-[8px] w-full text-center cursor-not-allowed ' 
                : 'bg-[#20B573] text-white font-bold cursor-pointer p-[13px] pr-[19px] pl-[19px] text-[20px] rounded-[8px] w-full text-center'} 
                type='submit' disabled={dnext3} >
                    {isSubmitting ? (
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-blue-600 rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    'Submit'
                  )}</button>
          </div>
          
        </div>
        </div >
        </form>

       {/* otp validation */}
       
        <form className={success && !signed ?  'absolute justify-self-center border self-center items-center w-[50%]  h-fit ml-[3%] p-[3.4%] mt-[7.3%] rounded-[7px] bg-cover bg-center': 'hidden'} 
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
                    <button type='submit'
                    className={isSubmitting ? 'text-center text-white rounded-[7px] self-end font-bold bg-[#a6ebcd] pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500' : 'text-center text-white rounded-[7px] self-end font-bold bg-emerald-600 pl-[20px] pr-[20px] p-[10px] border-[1.7px] border-gray-500'}>
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

        {/* Successful registration */}

         <div className={success && signed ? 'absolute justify-self-center border  grid grid-rows-2 w-[35%] h-fit ml-[16%] mt-[8.3%] rounded-[7px]' : 'hidden'}>
            <div className='bg-[#0dab66] flex flex-col gap-2 w-full h-full text-center pb-[25px] rounded-t-[7px]'>
            <IoIosClose size={50} className='self-end text-white cursor-pointer' onClick={function(){
                setSuccess(false)
            }}/>
                <CheckCircle size={60} className='text-white self-center'/>
                <h1 className='text-white font-bold text-[30px]'>Success</h1>
            </div>
            <div className='w-full h-full bg-[white] text-gray-400 text-center pr-[11%] pl-[11%] p-[5%] rounded-b-[7px]'>
                <p className='text-gray-400 text-[15px] text-center flex flex-col'>
                    you can now log in. but full access is limited until verification is complete
                </p>
                <p className='text-gray-400 text-[15px] text-center mt-[5%]'>Verification takes 2 business days</p>
                <button type='button' className = 'bg-[#0dab66] w-full text-center text-[20px] text-white font-bold mt-[9%] p-[5px] rounded-[7px]' onClick={function(){
                    if(success)
                    {
                    navigate('/patient')
                    }
                }}on>
                    ok
                </button>
            </div>
        </div> 
        </div>
    </div>
    </div>
  )
}

export default Signup
