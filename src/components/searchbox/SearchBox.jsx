import React from 'react';

const SearchBox = () => {
    return (
        <div>
        <div className='hidden sm:block'>
           <input type='text' placeholder='جستجوی سریع' className='w-[319px] outline-none -ml-7 h-[56px] px-4 border border-[#D5EAF0] rounded-[10px]'/>
        </div>
        </div>
    );
};

export default SearchBox;