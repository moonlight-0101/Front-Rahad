import React, { useState } from 'react';
import icon from "../../image/icon.svg"
import search from "../../image/search-normal.svg";
import logo from "../../image/logo.svg";
import SideBar from '../sidebar/SideBar';
 
const Menu = () => {
    const [MenuOpen, setMenuOpen] = useState(false)
    const handlerButtonClick = () => {
      setMenuOpen(!MenuOpen);
    };
    return (
      <div>
      <div className="sm:hidden w-[360px] h-[70px]  m-auto flex items-center  justify-around">
        <div className="w-[48px] h-[48px]">
          <img src={icon} className="w-[18px] h-[12px] mt-4" onClick={handlerButtonClick} />
        </div>
        <div>
          <h3 className=" text-[#157B96] font-[800px] text-center text-[22px] ">RAHAD</h3>
        </div>
        <div className="w-[48px] h-[48px]">
          <img src={search} className="w-[28px] h-[18px]  mt-4" />
        </div>
      </div>
    <div
      className={
        MenuOpen ? " z-20 w-[300px]  sm:mr-10 border-l   border-[#F1F6FC] " : "hidden relative sm:block"
      }
    >
      
    
      <div className="hidden sm:flex mt-8 w-[250px] h-[53px]">
        <div className="w-full mr-10">
          <h1 className="text-[35px] w-[158px] h-[50px] mt-1 text-[#12809E]">RAHAD</h1>
          <h2 className="text-[#12809E] text-[14px]">Hotel Managment System</h2>
        </div>
        <div className=" w-[72px] h-[63px] -mr-[130px] -mt-2">
          <img src={logo} className=' object-cover'/>
        </div>
      </div>
      {/* <Sidebar/> */}
      <div className="mr-3">
        <SideBar />
      </div>
  </div>
  </div>
    );
};

export default Menu;