import React, { useEffect, useState } from 'react';
import icon from "../../image/icon.svg"
import search from "../../image/search-normal.svg";
import logo from "../../image/logo.svg";
import SideBar from '../sidebar/SideBar';
import close from "../../image/close.svg"
// import { Calendar } from 'react-multi-date-picker';
import DataDay from "../date-picker/DataDay";
 
const Menu = () => {
    const [MenuOpen, setMenuOpen] = useState(false)
    useEffect(() => {
      if (MenuOpen) {
        document.body.style.touchAction = 'none';
      } else {
        document.body.style.touchAction = 'auto';
      }
    }, [MenuOpen]);
    const handlerButtonClick = () => {
      setMenuOpen(!MenuOpen);
    };
    return (
      <>
      <div className={`flex items-center sm:block justify-center  mt-4 `}>
      <div className="sm:hidden min-w-[360px] h-[70px]  m-auto flex items-center justify-center gap-4 ">
        <div className="w-[48px] h-[48px]">
          <img src={MenuOpen ? close:icon } className="w-[28px]  mr-4 h-[22px] mt-4" onClick={handlerButtonClick} />
        </div>
        <div className={`${MenuOpen && "hidden"}`}>
        <img src={logo} className='w-[192px] z-20  h-[55px]'/>
        </div>
        <div className="w-[48px] h-[48px]">
          <img src={search} className="w-[28px] h-[22px]  mt-4" />
        </div>
        <h2 className={`${MenuOpen ? "text-[#157B96] ml-6  font-[800] mt-2  text-[50px]" :"hidden"}`}>RAHAD</h2>
    
      </div>
    <div
      className={`
        ${MenuOpen ? " z-20  " : "hidden relative sm:block"}  -mt-[18px] border-l  border-[#F1F6FC]
      `}
    >
      
    
      <div className="hidden sm:flex mt-8 z-50 mb-10 w-[250px] h-[53px]">
        
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
      <div className="flex items-center justify-center bg-green-200  sm:hidden">
        <DataDay/>
      </div>
  </>
    );
};

export default Menu;