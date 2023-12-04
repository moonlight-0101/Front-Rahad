import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import ColorBox from '../components/colorbox/ColorBox';
import SearchBox from '../components/searchbox/SearchBox';



const Setting = () => {
    return (
        <div className='max-w-[1280px] max-h-[815px] flex m-auto'>
             <div className='w-[300px]-mr-10'>
                <h1>Logo</h1>
                <SideBar/>
            </div>
            {/* topbar */}
            <div className='w-[940px]  h-full '>
                <div className=''>
                  <ColorBox/>
                  <SearchBox/>
                </div>

                <div className='mr-24'>
                    <h1 className='text-[#003666] trxt-[25px]'>ویژگی و امکانات هتل</h1>
                    <div className=' flex gap-24 '>
                        {/* right */}
                     <div>
                    <div class="flex items-center justify-between w-[150px] mt-10">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value=""  className='text-red-700'/>
                    </div>
                    {/* <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div> */}
                     </div>
                     {/* left */}
                     {/* <div>
                    <div class="flex items-center justify-between w-[150px] mt-10">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                    <div class="flex items-center justify-between w-[150px] mt-5">
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">استخر </label>
                    <input  type="checkbox" value="" class="w-4 h-4 text-[#2393B0] bg-white border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"/>
                    </div>
                     </div> */}
                    </div>
                </div>
              
            </div>
           
            
        </div>
    );
};

export default Setting;