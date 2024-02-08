import React from 'react';

const SearchBox = () => {
    return (
        <div>
        <div className='hidden sm:block relative'>
           <input type='text' placeholder='جستجوی سریع' className='w-[319px]  outline-none -ml-7 h-[56px] px-4 border border-[#D5EAF0] rounded-[10px]'/>
           <span className=' absolute left-0 top-3'>
           <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0039 21C6.7572 21 2.50391 16.7467 2.50391 11.5C2.50391 6.25329 6.7572 2 12.0039 2C17.2506 2 21.5039 6.25329 21.5039 11.5C21.5039 16.7467 17.2506 21 12.0039 21Z" stroke="#087592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.5039 22L20.5039 20" stroke="#087592" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           </span>
        </div>
        </div>
    );
};

export default SearchBox;