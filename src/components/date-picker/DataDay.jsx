import React, { useState } from "react";
import moment from "moment-jalaali";
import "moment/locale/fa";

moment.locale("fa");
moment.loadPersian({ dialect: "persian-modern" });

const DataDay = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextDay = () => {
    const nextDay = currentDate.clone().add(1, "day");
    setCurrentDate(nextDay);
  };

  const goToPreviousDay = () => {
    const previousDay = currentDate.clone().subtract(1, "day");
    setCurrentDate(previousDay);
  };
 

  return (
    <div className=" mt-2 w-full sm:hidden gap-14 flex items-center  ">
      <button
        onClick={goToNextDay}
        className="border border-[#DCEEF3] w-[32px] h-[32px] flex items-center justify-center"
      >
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.150391 13.1231L5.60189 7.50039L0.150391 1.87764L1.82869 0.150391L8.97039 7.50039L1.82869 14.8504L0.150391 13.1231Z"
            fill="#5A5959"
          />
        </svg>
      </button>
      <p className="mt-1">{currentDate.format("jD jMMMM jYYYY")}</p>
      <button
        onClick={goToPreviousDay}
        className="border border-[#DCEEF3] w-[32px] h-[32px] flex items-center justify-center"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.209 15.1231L8.75749 9.50039L14.209 3.87764L12.5307 2.15039L5.38898 9.50039L12.5307 16.8504L14.209 15.1231Z"
            fill="#5A5959"
          />
        </svg>
      </button>
    </div>
  );
};

export default DataDay;





