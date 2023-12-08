import React from 'react';

const Button = () => {
    return (
        <div className="flex items-center justify-center gap-10 mb-10 sm:justify-end sm:-ml-[20px] sm:-mt-14">
        <button className="w-[138px] h-[48px] text-[#FB2047] border border-[#FB2047] rounded-[10px] text-[16px]">
          صفحه قبل
        </button>
        <button className="w-[138px] h-[48px] text-white bg-[#23B05B] rounded-[10px] text-[16px]">
          صفحه بعد
        </button>
      </div>
    );
};

export default Button;