import React, { useState } from 'react';
import img from '../image/p.svg'
import Language from '../image/Language.svg'
import avatar from '../image/avatar.svg'
import hidden from '../image/hidden pass.svg'
import axios from "axios"
import Cookies from "universal-cookie"
import eye from "../image/eye.svg"
// import {  } from "react-router-dom"
// import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigateTo = useNavigate();
    const [UserName,setUsername]=useState('')
    const [errorBorder,setErrorBorder]=useState(true)
    const [Password,setPassword]=useState('')
    const [type, setType] = useState('password');
     const [icon, setIcon] = useState(hidden);
     

     const handleToggle =()=>{
       if (type==='password'){
           setIcon(eye);
           setType('text')
        } else {
           setIcon(hidden)
           setType('password')
        }
   }
    console.log(UserName,Password);
    const handelSubmit=async (event)=>{
        event.preventDefault()
        setPassword(''),
        setUsername(''),
        setErrorBorder(true)
        try{
            const response= await axios.post("https://backendrahad.pythonanywhere.com/Login/",{
                UserName,
                Password
            },  {headers:{
                "Content-Type":'application/json'
            }
    })
    if(response.status===200){
        const tokens=response.data
        const token=tokens.data.Authorization
        const cookie=new Cookies()
        cookie.set("token",token)
        navigateTo('/home')
    }
        }catch(error){
            console.log("ارور:  ", error);
            if(error.response && error.response.status===400){
                setErrorBorder(false)
            }
        }
    }
    return (
        <div>
            <div className='sm:h-full h-[800px] px-[8px] sm:p-1  m-auto sm:max-w-[1280px] min-w-[360px] items-center  flex  sm:justify-around justify-center   '>
              <div className="flex " >
              <div className='w-[74px] flex items-center gap-2 justify-center mt-2 h-[40px]  border border-[#AAAAAA] fixed rounded-[8px] left-[309px] sm:left-[1199px] sm:top-[24px] top-[18px]'>
                <h4 className='text-[18px]'>PR</h4>
                <img src={Language} className='w-[24px] h-[24px]'/>
                </div>
              </div>
                <div className=''>
                    <h3 className='hidden sm:block  w-[390px] h-[38px] text-[#003666] font-[800px] mr-10 text-[26px] mt-[134px]'>به نرم افزار هتلداری رها خوش آمدین</h3>
                    <div className='flex items-center justify-center flex-col'>

                    <img src={img} className='sm:hidden  text-[#2393B0]  text-center text-[60px] w-[145px] h-[145px]'/>
                    <h2 className=' w-full  mb-[50px] mt-4 text-center font-[500px] text-[18px] text-[#294046] sm:text-[#003666]  leading-[27px]'>اطلاعات حساب کاربری خود را وارد کنید</h2>
                    </div>
                    <form action="" className='mt-8  sm:ml-0 flex flex-col sm:max-w-[1280px] w-full m-auto items-center justify-center  '>
                        <div className='sm:max-w-[420px] h-[85px] relative  m-auto'>
                            <label className='text-[16px] text-[#003666] mr-4'>نام کاربری</label>
                            <input 
                            type='text'
                            value={UserName}
                            onChange={(e)=>setUsername(e.target.value)}
                            className={`border ${errorBorder ?"border-[##C2C7CC]":"border-red-500"}
                            border-[##C2C7CC] outline-none  
                            mt-1 min-w-[100%] sm:w-[420px] h-[52px] px-2
                             rounded-[10px] placeholder:text-[12px] text-[16px] pr-8 placeholder:text-[#A2AFB8]`}
                       placeholder='نام خود را وارد نمایید' />
                            <img src={avatar} className='  top-10 left-4 absolute'/>
                        <p className={` ${errorBorder ?"hidden":"block"} text-[#FB2047] w-[200px]  mt-1 sm:mr-4  text-[12px]`}>نام کاربری یا رمز عبور اشتباه است</p>
                        </div>
                      

                        <div className=' sm:max-w-[420px] h-[85px] mt-10 sm:mt-6 relative m-auto'>
                            <label className='text-[16px] text-[#003666] mr-4'> رمز عبور</label>
                            <input 
                            type={type}
                            value={Password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className={`border ${errorBorder ?"border-[##C2C7CC]":"border-red-500"}
                            border-[##C2C7CC] outline-none  
                            mt-1 min-w-[100%] sm:w-[420px] h-[52px] px-4
                             rounded-[10px] placeholder:text-[12px] text-[16px] pr-8 placeholder:text-[#A2AFB8]`}
                            placeholder='رمزعبور را وارد نمایید' />
                            <img src={icon} onClick={handleToggle} className='  top-10 left-4 absolute'/>
                            <div>
                                <p className={` ${errorBorder ?"hidden":"block"} text-[#FB2047] w-[200px]  mt-1 mr-2 text-[12px]`}>نام کاربری یا رمز عبور اشتباه است</p>
                                <p className='text-[#00519A]  text-[12px] sm:text-[16px] sm:mr-[280px] mr-[200px]'>فراموشی رمز عبور</p>
                            </div>
                        </div>
                      
                        <div className='flex items-center w-full justify-center   sm:ml-0'>
                        <button 
                        onClick={handelSubmit}
                        className='sm:max-w-[200px] h-[55px] w-full bg-gradient-to-r from-[#087592] to-[#2393B0]
                          rounded-[10px] text-white sm:top-[520px] sm:mt-[100px] mt-20 sm:right-[230px]'>ورود</button>

                        </div>
                    </form>
                </div>
                <div className=' hidden sm:flex'>
                    <img src={img} alt="" className='h-[629px] w-[632px] top-[45px] left-[50px] relative'/>
                </div>

            </div>
        </div>
    );
};

export default Login;