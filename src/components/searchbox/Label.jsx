import React from 'react';

const Label = () => {
    return (
        <div className='flex items-center justify-center sm:justify-start sm:my-[60px] mr-4 sm:mr-12 gap-2 mt-2'> 
        <h3 className='text-[#087592]  text-[22px] font-bold'>تنظیمات</h3>
        <div>
        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z" fill="#A6ACC4"/>
        </svg>
        </div>
        <h3 className='text-[#087599] text-[14px] font-thin'>تعریف اقامتگاه</h3>
     </div>
    );
};

export default Label;