import React from "react";
import SideBar from "../components/sidebar/SideBar";
import ColorBox from "../components/colorbox/ColorBox";
import SearchBox from "../components/searchbox/SearchBox";
import { hotel } from "../data";
import Menu from "../components/menu/Menu";
import Label from "../components/Label";
import Button from "../components/button/Button";

const Setting = () => {
  return (
    <div className='min-w-[360px] p-[1rem] sm:p-0 h-full  items-center justify-center sm:justify-start flex-col sm:flex-row m-auto  sm:max-w-[1280px] flex '>
      <div className="sm:-mr-4 sm:-mt-20">

      <Menu/>
      </div>

      {/* topbar */}
      <div className="sm:w-[940px]  h-full ">
        <div className="">
          <ColorBox />
          {/* label */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex justify-center sm:mr-5 gap-3 items-center">
              <Label />
              <div className="mt-2 flex items-center justify-center gap-2">
                <div>
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z"
                      fill="#A6ACC4"
                    />
                  </svg>
                </div>
                <h3 className="text-[#087599] text-[14px] font-thin">
                  افزودن امکانات{" "}
                </h3>
              </div>
            </div>
            <SearchBox />
          </div>
        </div>

        <div className=" sm:mr-24">
          <div>
            <h1 className="text-[#003666] text-[25px]">ویژگی و امکانات هتل</h1>
          </div>
          <div className=" flex  justify-around  items-center sm:justify-start  sm:gap-24 ">
            {/* right */}
            <div>
              {hotel.slice(0, 5).map((item) => (
                <div
                  key={item.name}
                  class="flex  items-center justify-between w-[100px] sm:w-[150px] mt-10"
                >
                  <label className="text-[12px]  sm:text-[16px] font-medium text-[#003666] ">
                    {item.name}
                  </label>
                  <input type="checkbox" value="" />
                </div>
              ))}
            </div>
            {/* left */}
            <div>
              {hotel.slice(5, 10).map((item) => (
                <div
                  key={item.name}
                  class="flex items-center justify-between w-[100px] sm:w-[150px] mt-10"
                >
                  <label className="text-[12px] sm:text-[16px]  font-medium text-[#003666] ">
                    {item.name}
                  </label>
                  <input type="checkbox" value="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:mt-[250px] mt-[80px]">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Setting;
