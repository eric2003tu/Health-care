import React, { useEffect, useState } from 'react'
import { IoMdCloudCircle } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { Eye, EyeOff,Mail, Phone, User } from "lucide-react";
import { IoMdClose } from "react-icons/io";
import otp from '../assets/otp.jpg';

const AddPatients = () => {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [add, setAdd] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword,setConfPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [picture, setPicture] = useState(null)
    const [signUpError, setSignUpError] = useState('')
    const [errorColor, setErrorColor] = useState('red')
    const [role, setRole] = useState('')
    const [disabled, setDisabled] = useState(true)    
  useEffect(() => {
    // Fetch the users once the component mounts
    fetch('https://employee-management-app-ghrg.onrender.com/api/user/users')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        setUsers(data); // Store the fetched users in the state
      })
      .catch(function(error) {
        console.error('Network issue: ', error);
      });

      if(add){
        if(!firstName || !lastName || !email || !password || !picture || !address || confPassword !== password || !mobile)
        {
          setDisabled(true)
        }
        else if (picture.type !== 'application/pdf' && picture.type !== 'image/jpeg') {
          setSignUpError('File must be a PDF or JPG only!');
          setErrorColor('yellow');
          setDisabled(true);
        }
        else{
          setDisabled(false)
          setSignUpError('')
        }
      }
  }, [firstName,lastName,email,password,role,disabled,add,picture,address,confPassword,mobile,signUpError,errorColor]); 


  const handleAdd = function(event){
    event.preventDefault()
    fetch('https://employee-management-app-ghrg.onrender.com/api/user/add',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Fname: firstName,
        Lname: lastName,
        email: email,
        password: password,
        Phone: mobile,
        picture: picture,
        address: address,
        dob: dob,
      })
    })
    .then(function(response){
      if(!response.ok){
        if(response.status === 404){
          setSignUpError('Bad request, check your inputs')
          setErrorColor('red')
          setTimeout(function(){
            setSignUpError('')
          },4000)
          throw new Error('Bad request,check your inputs')
        }
        else if(response.status === 500){
          setSignUpError('Internal server Error')
          setErrorColor('red')
          setTimeout(function(){
            setSignUpError('')
          },4000)
          throw new Error('Internal server error')

        }
        else if(response.status === 400){
          setSignUpError('Invalid inputs')
          setErrorColor('red')
          setTimeout(function(){
            setSignUpError('')
          },4000)
          throw new Error('Invalid inputs')
        }
        else{
          setSignUpError('another error occured'+ response.status)
          setErrorColor('red')
          setTimeout(function(){
            setSignUpError('')
          },4000)
          throw new Error('another error occured'+ response.status)
        }
      }
      return response.json()
    })
    .then(function(data){
      if(data){
        setSignUpError('User was successfully registered')
        setErrorColor('green')
        setTimeout(function(){
          setSignUpError('')
          setAdd(false)
        },4000)
        return
      }
      else{
        setSignUpError('User not added')
        setErrorColor('red')
        setTimeout(function(){
          setSignUpError('')
        },4000)
        return
      }
    })
    .catch(function(error){
      console.error('Failed to register the user, check your internet connections: ',error)
      setSignUpError('Failed to register the user, check your internet connections')
      setErrorColor('red')
      setTimeout(function(){
        setSignUpError('')
      },4000)
    })
  }


  return (
    <div>
        <div className={'h-full w-full overflow-auto p-[10px] bg-white'} >
    <div className=' flex flex-col w-full p-[20px] mt-[20px] pt-[7px]'>
      <button type='button' onClick={function(){
        setAdd(true)
      }} className=' text-center self-end bg-[#15ad6b] text-white text-[17px] font-bold pr-[25px] pl-[25px] p-[3px] cursor-pointer rounded-[5px]'>
        Add New
        </button>
        <h1 className='text-green-500 flex flex-row font-bold text-[18px] mt-[-40px]'>Patients <FaAngleRight size={17} className='text-gray-500 mt-[7px]'/><span className='text-gray-500 font-normal'>Patients list</span></h1>
    </div>
    <div className=' flex flex-col w-full p-[10px] mt-[15px]'>
      <div className='self-end flex flex-row gap-1'>
        <h1 className='text-gray-500 text-[17px] mt-[5px]'>Search</h1>
        <input type='text' name='search' placeholder='Search patients' className='text-gray-500 placeholder:text-gray-500 p-[5px] rounded-[5px] border border-gray-400 w-[200px] mr-[130px] pr-[10px] bg-white'/>
        </div>
        <div className='  flex flex-row gap-2 mt-[-34px]'>
        <h1 className='text-gray-500 text-[17px] mt-[5px]'>Display</h1>
          <select name='role' className='bg-white w-fit p-[5px] border  border-y-gray-400 rounded-[5px] text-gray-600'>
            <option  value=''selected disabled>number</option>
            <option value='Employee' className=''>12</option>
            <option value='Employer' className=''>10</option>
          </select>
          <h1 className='text-gray-500 text-[17px] mt-[5px]'>Records per page</h1>
        </div>
    </div>
    <table className='w-full h-fit mt-[10px] '>
      <thead className='p-[10px]'>
        <tr className='text-gray-500 border-b border-t bg-[#f1f1f4] border-r border-l'>
          <th>Name</th>
          <th>Ward No.</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Date</th>
          <th>Start hour</th>
          <th>Mode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
          {/* Render table rows dynamically using the users state */}
          {users.length === 0 ? (
            <tr>
              <td colSpan="8" className='text-center text-[18px]'>No users available</td>
            </tr>
          ) : (
            users.map((value, index) => (
              <tr key={index} className='bg-white 203260 text-[#040454] border-r border-l border-b border-t'>
                <td>{value.name}</td>
                <td>{value.wardNo}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.date}</td>
                <td>{value.hour}</td>
                <td>{value.mode}</td>
                <td><RiDeleteBinLine size={35} className='text-red-500'/></td>
              </tr>
            ))
          )}
        </tbody>
    </table>

     {/* Add new user */}
    <div className={add ?'absolute self-center  top-0 items-center text-center bg-gray-700/70 bg-cover bg-center h-screen w-[53%] ml-[20%] p-7 rounded-[5px]' : 'hidden'} style={{ backgroundImage: `url(${otp})` }}>


    <form className={add ? '  w-full h-full overflow-y-auto flex flex-col gap-4 top-[11%] self-center rounded-[5px]  shadow-[1px_2px_6px_gray]  pr-[50px] sm:p-[50px] md:p-[50px] lg:p-[20px] bg-[white]' : 'hidden'} onSubmit={handleAdd}>
      <IoMdClose size={35} onClick={function(){
        setAdd(false)
      }} className='absolute self-end mt-[-16px] mr-[-10px] text-red-400 cursor-pointer'/>
          <h1 style={{color: errorColor}}>{signUpError}</h1>

          <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
          <div  className='relative flex flex-col'>
          <label htmlFor='Fist name' className=' text-gray-600 self-start'>First name</label>
          <input type='text' name='First name' placeholder='First name' value={firstName} onChange={function(e){
            setFirstName(e.target.value)
          }} className='w-full border-b border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
           </button>
          </div>
          <div  className='relative flex flex-col'>
          <label htmlFor='Last name' className=' text-gray-600 self-start'>Last name</label>
          <input type='text' name='Last name' placeholder='Last name' value={lastName} onChange={function(e){
            setLastName(e.target.value)
          }} className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <User/>
           </button>
          </div>
          </div>
          <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
          <div  className='relative flex flex-col'>
          <label htmlFor='mobile' className=' text-gray-600 self-start'>Mobile</label>
          <input type='tel' name='mobile' placeholder='Mobile number' value={mobile} onChange={function(e){
            setMobile(e.target.value)
          }} className='w-full border-b border-gray-400 p-[10px] rounded-[3px] text-blue-950 focus:border-b placeholder:text-gray-400 bg-gray-100/50' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <Phone/>
           </button>
          </div>
          <div  className='relative flex flex-col'>
          <label htmlFor='email' className=' text-gray-600 self-start'>Email</label>
          <input type='email' name='email' placeholder='Email address' value={email} onChange={function(e){
            setEmail(e.target.value)
          }} className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400' />
          <button type="button" className="absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600" >
            <Mail/>
           </button>
          </div>
          </div>
          <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
          <div  className='relative flex flex-col'>
          <label htmlFor='password' className=' text-gray-600 self-start'>Password</label>
          <input type={showPassword ? "text" : "password"} name='password' value={password} onChange={function(e){
            setPassword(e.target.value)
          }} placeholder='Create password' className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setShowPassword(!showPassword)}>
            {(!showPassword || !password) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          <div  className='relative flex flex-col'>
          <label htmlFor='checkPass' className=' text-gray-600 self-start'>Confirm password</label>
          <input type={showConfPassword ? "text" : "password"} name='password' value={confPassword} onChange={function(e){
            setConfPassword(e.target.value)
          }} placeholder='Create password' className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>
          <button type="button" className= "absolute right-3 top-2/3 transform -translate-y-1/2 text-sm text-gray-600"
          onClick={() => setShowConfPassword(!showConfPassword)}>
            {(!showConfPassword || !password) ? <EyeOff/> : <Eye/>}
           </button>
          </div>
          </div>
          <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className='relative'>
          <label htmlFor='date' className=' text-gray-600 self-start'>Date of birth</label>
          <input type='date' name='date' placeholder='Your Birth date' value={dob} onChange={function(e){
            setDob(e.target.value)
          }} className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400'/>
          </div>
          <div className="relative">
          <label htmlFor='address' className=' text-gray-600 self-start'>Address</label>
          <input type='text' name='address' placeholder='Your address' value={address} onChange={function(e){
            setAddress(e.target.value)
          }}  className=' w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b'/>
         
          </div>
          </div>
          <div className='w-full grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3'>
          <div className="relative">
          <label htmlFor='picture' className=' text-gray-600 self-start'>Picture</label>
          <input type='file' name='Picture' value={picture} onChange={function(e){
            setPicture(e.target.value)
          }} placeholder='Create password' className='w-full border-b border-gray-400  p-[10px] rounded-[3px] bg-gray-100/50 text-blue-950 focus:border-b placeholder:text-gray-400 focus:ring-blue-500'/>

          </div>
          </div>

          <button type='submit' disabled={disabled} className={disabled ? 'self-end text-center text-white bg-green-300 pl-[40px] pr-[40px] text-[25px] rounded-[5px] cursor-not-allowed' 
            : 'self-end cursor-pointer text-center text-white bg-[#15ad6b] pl-[40px] pr-[40px]  text-[25px] rounded-[5px]'}>
              Add
              </button>
        </form>
        </div>
  </div>
    </div>
  )
}

export default AddPatients
