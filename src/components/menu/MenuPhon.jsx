import React from 'react';
import SideBar from '../sidebar/SideBar';
import close from "../../image/close.svg"
import DataDay from "../date-picker/DataDay";
import search from "../../image/search-normal.svg";

const MenuPhon = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-10'>
                <img src={close} alt="" />
                <div className="w-[48px] h-[48px]">
                <img src={search} className="w-[28px] h-[22px]  mt-4" />
                 </div>
            <h2 className="text-[#157B96] ml-6  font-[800] mt-2  text-[50px]">RAHAD</h2>

            </div>

            <div>
            <div className="flex item-center justify-center">
             <SideBar />
           </div>
           <div className={`m-auto sm:hidden  mb-4  h-[60px] pr-16 w-full bg-white"}`}>
           <DataDay/>
      </div>
            </div>
        // </div>
    );
};

export default MenuPhon;