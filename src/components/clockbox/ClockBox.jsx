import React, { useState } from "react";

const ClockBox = ({ mainTime }) => {
  const [inputValue, SetInputValue] = useState();
  const [timeFormat, setTimeFormat] = useState("pm");
  const [value, setValue] = useState();
  const timeArray = mainTime?.split(":");

  console.log("timeArray ", timeArray);

  const [time, setTime] = useState({
    hour: Array.isArray(timeArray) ? timeArray[0] : 0,
    minutes: Array.isArray(timeArray) ? timeArray[1] : 0,
  });

  console.log("time", time);

  const handelInputChange = (event) => {
    const value = event.target.value;
    SetInputValue(value);
    if (parseInt(value) >= 12) {
      setTimeFormat("am");
    } else {
      setTimeFormat("pm");
    }
  };
  const handleMinuteChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  return (
    <div className="w-[320px] sm:w-[420px] rounded-[9px] p-[10px] flex flex-row-reverse items-center gap-5 justify-center  border border-[rgb(162,175,184)]">
      <div>
        <input
          onChange={handelInputChange}
          placeholder="12"
          className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
          text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
          value={time.hour}
        />
        <div className=" text-left ml-2 text-[#49454F] text-[12px]">ساعت</div>
      </div>
      <div>
        <span className="text-[40px] -mt-5 ">:</span>
      </div>
      <div>
        <input
          onChange={handleMinuteChange}
          placeholder="00"
          className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
         flex items-center justify-center text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
          value={time.minutes}
        />
        <div className=" text-left ml-2 text-[#49454F] text-[12px]">دقیقه</div>
      </div>
      <div className="w-[52px] -mt-2 rounded-sm h-[56px] border border-black/10 flex items-center justify-center text-[22px]">
        {timeFormat}
      </div>
    </div>
  );
};

export default ClockBox;
