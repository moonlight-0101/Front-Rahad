// import React, { useState } from "react";

// const ClockBox = ({ mainTime, setTime }) => {
//     // const [inputValue, SetInputValue] = useState();
//     const [timeFormat, setTimeFormat] = useState("pm");
//     // const [value, setValue] = useState();

//     const handelInputChange = (event) => {
//         const value = event.target.value;
//         SetInputValue(value);
//         if (parseInt(value) >= 12) {
//             setTimeFormat("am");
//         } else {
//             setTimeFormat("pm");
//         }
//     };
//     const handleMinuteChange = (event) => {
//         const value = event.target.value;
//         setValue(value);
//     };
//     return (
//         <div className="w-[320px] sm:w-[420px] rounded-[9px] p-[10px] flex flex-row-reverse items-center gap-5 justify-center  border border-[rgb(162,175,184)]">
//             <div>
//                 <input
//                     onChange={(e) => setTime((prev) => ({ ...prev, hour: e.target.value }))}
//                     placeholder="12"
//                     className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
//           text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
//                     value={mainTime?.hour}
//                 />
//                 <div className=" text-left ml-2 text-[#49454F] text-[12px]">ساعت</div>
//             </div>
//             <div>
//                 <span className="text-[40px] -mt-5 ">:</span>
//             </div>
//             <div>
//                 <input
//                     onChange={(e) => setTime((prev) => ({ ...prev, min: e.target.value }))}
//                     placeholder="00"
//                     className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
//          flex items-center justify-center text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
//                     value={mainTime?.min}
//                 />
//                 <div className=" text-left ml-2 text-[#49454F] text-[12px]">دقیقه</div>
//             </div>
//             <div className="w-[52px] -mt-2 rounded-sm h-[56px] border border-black/10 flex items-center justify-center text-[22px]">
//                 {timeFormat}
//             </div>
//         </div>
//     );
// };

// export default ClockBox;
// import React, { useState } from "react";

// const ClockBox = ({ mainTime, setTime }) => {
//  const [timeFormat, setTimeFormat] = useState("pm");
// const handelInputChange = ({ value, timeType }) => {
//  setTime((prev) => ({ ...prev, [timeType]: value }));
// if (parseInt(value) >= 12 && timeType === "hour") {
// setTimeFormat("am");
// } else {
//  setTimeFormat("pm");
//  }
//  };

//  return (
// <div className="w-[320px] sm:w-[420px] rounded-[9px] p-[10px] flex flex-row-reverse items-center gap-5 justify-center  border border-[rgb(162,175,184)]">
// <div>
// <input
// onChange={(e) => handelInputChange({ value: e.target.value, timeType: "hour" })}
//  placeholder="12"
//  className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
//  text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
//  value={mainTime?.hour}
//  />
//  <div className=" text-left ml-2 text-[#49454F] text-[12px]">ساعت</div>
// </div>
//  <div>
// <span className="text-[40px] -mt-5 ">:</span>
//  </div>
//  <div>
//  <input
//  onChange={(e) => handelInputChange({ value: e.target.value, timeType: "min" })}
// placeholder="00"
//  className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
//  flex items-center justify-center text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
// value={mainTime?.min}
//  />
//  <div className=" text-left ml-2 text-[#49454F] text-[12px]">دقیقه</div>
// </div>
// <div className="w-[52px] -mt-2 rounded-sm h-[56px] border border-black/10 flex items-center justify-center text-[22px]">
// {timeFormat}
// </div>
//  </div>
//  );
// };

// export default ClockBox;
import React, { useEffect, useState } from "react";

const ClockBox = ({ mainTime, setTime }) => {
    const handelTimeAction = ({ event, mode }) => {
        const mainEventTime = event.target.value;
        // Minute
        if ((mode === "min" && /^[0-5]?[0-9]$/.test(mainEventTime)) || mainEventTime === "") {
            setTime((prev) => ({ ...prev, min: mainEventTime })); // Update the state only if the input is valid or empty
        }
        // Hour
        if ((mode === "hour" && /^(0?\d|1\d|2[0-3])$/.test(mainEventTime)) || mainEventTime === "") {
            setTime((prev) => ({ ...prev, hour: mainEventTime }));
        }
    };
// const ClockBox = ({ mainTime, setTime }) => {
//  const [timeFormat, setTimeFormat] = useState("pm");
// const handelInputChange = ({ value, timeType }) => {
//  setTime((prev) => ({ ...prev, [timeType]: value }));
// if (parseInt(value) >= 12 && timeType === "hour") {
// setTimeFormat("am");
// } else {
//  setTimeFormat("pm");
//  }
//  };
    return (
        <div className="w-[320px] sm:w-[420px] rounded-[9px] p-[10px] flex flex-row-reverse items-center gap-5 justify-center  border border-[rgb(162,175,184)]">
            <div>
                <input
                    onChange={(e) => handelTimeAction({ event: e, mode: "hour" })}
                    value={mainTime?.hour}
                    placeholder="12"
                    className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
          text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
                />
                <div className=" text-left ml-2 text-[#49454F] text-[12px]">ساعت</div>
            </div>
            <div>
                <span className="text-[40px] -mt-5 ">:</span>
            </div>
            <div>
                <input
                    type="text"
                    onChange={(e) => handelTimeAction({ event: e, mode: "min" })}
                    value={mainTime?.min}
                    placeholder="00"
                    className="w-[92px] rounded-sm h-[57px] border border-black/10 mb-1 mt-4 
         flex items-center justify-center text-[34px] pr-6 outline-none focus:text-[#003666] hover:bg-[#F3F4F8]"
                />
                <div className=" text-left ml-2 text-[#49454F] text-[12px]">دقیقه</div>
            </div>
            <div className="w-[52px] -mt-2 rounded-sm h-[56px] border border-black/10 flex items-center justify-center text-[22px]">
                {/* {timeFormat} */}
            </div>
        </div>
    );
};

export default ClockBox;