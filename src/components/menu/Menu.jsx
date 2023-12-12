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
      <div className='flex items-center sm:block justify-center  mt-8   '>
      <div className="sm:hidden min-w-[360px] h-[70px]  m-auto flex items-center justify-center gap-4 ">
        <div className="w-[48px] h-[48px]">
          <img src={icon} className="w-[18px] mr-4 h-[12px] mt-4" onClick={handlerButtonClick} />
        </div>
        <div>
        <img src={logo} className='w-[192px] h-[55px]'/>
        </div>
        <div className="w-[48px] h-[48px]">
          <img src={search} className="w-[28px] h-[18px]  mt-4" />
        </div>
      </div>
    <div
      className={`
        ${MenuOpen ? " z-20  " : "hidden relative sm:block"}  -mt-[18px] border-l  border-[#F1F6FC]
      `}
    >
      
    
      <div className="hidden sm:flex mt-10 w-[250px] h-[53px]">
        
        <div className=" sm:mr-10">
          <img src={logo} className='w-[252px] h-[75px]'/>
        </div>
      </div>
      {/* <Sidebar/> */}
      <div className="">
        <SideBar />
      </div>
  </div>
  </div>
    );
};

export default Menu;