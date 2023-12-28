import React, { useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import ColorBox from "../components/colorbox/ColorBox";
import SearchBox from "../components/searchbox/SearchBox";
import { hotel } from "../data";
import Menu from "../components/menu/Menu";
import Label from "../components/Label";
import Place from "../components/location/Place";


const Location = () => {
    const [deleteLocation,setDeleteLocation] = useState(false)
  return (
    <div className='min-w-[360px] p-[1rem] sm:p-0 h-full  justify-center sm:justify-start flex-col sm:flex-row m-auto  sm:max-w-[1280px] flex '>
      <div className="sm:-mr-8 ">
      <Menu/>
      </div>

      {/* topbar */}
      <div className="sm:w-[940px]  h-full ">
          <div>
        <div className="flex items-center justify-center sm:block">
          <ColorBox />

          </div>
          {/* label */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex justify-center sm:mr-5 gap-3 mb-10 sm:mb-0 items-center">
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

        <div className="sm:mr-8 px-[6px] ">
          <div className={` ${deleteLocation ?"flex-col sm:flex-row":"" } mb-10 flex justify-between  sm:mb-20} `}>
            <div>
            <h1 className="text-[#003666] mr-2 sm:mr-0  text-[25px] -mt-10"> مکانهای مهم اطراف هتل  </h1>
            </div>
            <div className={`flex ${deleteLocation && "mt-12 sm:mt-0"} items-center justify-center sm:justify-end sm:items-end gap-4`}>
                <button className={` flex border border-[#FB2047]  px-3 sm:px-4 py-2 -mt-10 rounded-md gap-2`} onClick={()=>setDeleteLocation(!deleteLocation)}>
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#FB2047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#FB2047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.8484 9.14014L18.1984 19.2101C18.0884 20.7801 17.9984 22.0001 15.2084 22.0001H8.78844C5.99844 22.0001 5.90844 20.7801 5.79844 19.2101L5.14844 9.14014" stroke="#FB2047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.3281 16.5H13.6581" stroke="#FB2047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 12.5H14.5" stroke="#FB2047" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <p className= {`${deleteLocation ?"block px-3 sm:px-0":"hidden"} sm:block text-[#FB2047] text-[17px]`}>{deleteLocation ?"حذف موارد انتخابی":"حذف مکان"} </p>
                </button>
                {/* <div  className={`${deleteLocation && " bg-red-500 block"}`}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8612 12.9999C23.8612 7.117 19.0479 2.30371 13.165 2.30371C7.28204 2.30371 2.46875 7.117 2.46875 12.9999C2.46875 18.8828 7.28204 23.6961 13.165 23.6961C19.0479 23.6961 23.8612 18.8828 23.8612 12.9999Z" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.88672 13H17.4437" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.1641 17.2786V8.72168" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div> */}
                <button className={`flex border border-[#003666] px-2 sm:px-6 py-2 gap-2 -mt-10 rounded-md`}>
                    <span className={deleteLocation && " hidden"}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8612 12.9999C23.8612 7.117 19.0479 2.30371 13.165 2.30371C7.28204 2.30371 2.46875 7.117 2.46875 12.9999C2.46875 18.8828 7.28204 23.6961 13.165 23.6961C19.0479 23.6961 23.8612 18.8828 23.8612 12.9999Z" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.88672 13H17.4437" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.1641 17.2786V8.72168" stroke="#003666" stroke-width="1.60443" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                    </span>
                    <p className={` sm:block ${deleteLocation ?"block px-6 sm:px-0":"hidden"} text-[#003666] text-[17px]`}>{deleteLocation ? "لغو":"افزودن مکان جدید"}</p>                </button>
            </div>
          </div>
          <div className="flex sm:mr-10 overflow-x-scroll no-scrollbar">
          <div className=" flex  flex-col  px-[1rem] ">
          <div className="flex items-center justify-center gap-10 mt-4 ">
            <div className='flex items-center justify-around'>
            <div className='flex items-center justify-center gap-4'>
            <label  className='w-[104px] h-[52px] text-[#C2C7CC] text-[16px] flex items-center'>فرودگاه مهرآباد </label>
            </div>
            <span className='text-[#C2C7CC]'>:</span>
            </div>
              
        <div className="w-[115px] border border-[#C2C7CC] h-[52px] -mr-6 flex items-center justify-center rounded-[10px] ">
            <div className="flex items-center justify-center gap-4">
                <div className="" >
                <input type="tel" className="w-[60px] text-sm outline-none " placeholder="700"/> 
                </div>
                <span className="text-[#C2C7CC] text-[17px] ml-3">
                    متر
                </span>
            </div>
        </div>
        <div className="w-[115px] border border-[#C2C7CC] h-[52px] flex items-center justify-center rounded-[10px] ">
            <div className="flex items-center justify-center gap-4">
                <div  >
                <input type="tel" className="w-[60px]  outline-none text-xs"/>
                <span className="text-[#C2C7CC] -mt-5  flex items-center justify-center "> 20 <span>دقیقه</span></span>
                </div>
                <span>
                <svg width="23" height="29" viewBox="0 0 23 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3451 2.88851C12.3451 3.65682 11.7233 4.27702 10.9596 4.27702C10.1958 4.27702 9.57404 3.65682 9.57404 2.88851C9.57404 2.1202 10.1958 1.5 10.9596 1.5C11.7233 1.5 12.3451 2.1202 12.3451 2.88851ZM13.8451 2.88851C13.8451 4.48379 12.5532 5.77702 10.9596 5.77702C9.36593 5.77702 8.07404 4.48379 8.07404 2.88851C8.07404 1.29323 9.36593 0 10.9596 0C12.5532 0 13.8451 1.29323 13.8451 2.88851ZM8.38119 7.83481C8.8446 7.73481 9.19907 7.73684 9.51452 7.81022C9.83397 7.88453 10.1649 8.04396 10.5649 8.33247C10.7462 8.4632 10.9909 8.72508 11.265 9.0827C11.5291 9.42714 11.7839 9.81175 11.9905 10.1423C12.3454 10.71 12.7841 11.2338 13.3096 11.6749C13.3695 11.7252 13.4296 11.7761 13.4887 11.8266L13.5829 11.9073L13.5829 11.9073C14.0045 12.2689 14.5545 12.7406 15.0909 13.0608C15.6008 13.3652 16.2135 13.5008 16.6661 13.601L16.6661 13.601C16.7501 13.6195 16.8285 13.6369 16.8997 13.6539C17.1258 13.7078 17.4238 13.8082 17.7874 13.9943C17.9391 14.0719 17.976 14.1475 17.9881 14.1823C18.0037 14.2274 18.009 14.3009 17.9716 14.3984C17.8883 14.616 17.6755 14.7644 17.4637 14.756C15.5977 14.6818 13.9202 13.5747 12.1088 12.3792L12.0198 12.3205L11.8809 12.2288C11.2139 11.7887 10.3137 12.167 10.1614 12.9515L9.67321 15.465C9.55894 16.0534 9.77283 16.6574 10.2319 17.0428L10.3384 17.1322C11.6284 18.2152 12.4154 19.7817 12.5142 21.4631L12.5148 21.4731L12.5157 21.4832L12.5157 21.4832L12.5157 21.4832L12.5157 21.4837L12.5159 21.486L12.5167 21.4955L12.5199 21.5337C12.5227 21.5674 12.5267 21.6175 12.5318 21.6818C12.5418 21.8104 12.5558 21.9957 12.5714 22.2217C12.6026 22.6741 12.6399 23.2868 12.6647 23.9307C12.6896 24.5766 12.7015 25.2435 12.6834 25.8075C12.664 26.4122 12.6115 26.7805 12.5622 26.9098C12.5026 27.0661 12.3124 27.2196 11.983 27.2195C11.6551 27.2194 11.4253 27.0629 11.3423 26.8746C11.3208 26.8257 11.2771 26.6637 11.2386 26.3452C11.2027 26.0493 11.178 25.6811 11.1626 25.2678C11.1318 24.4426 11.1398 23.4818 11.1594 22.6473C11.194 21.177 10.5837 19.7456 9.44323 18.7844L8.01116 17.5775L7.08244 16.7948L6.7986 17.9757L7.52783 18.151L6.79858 17.9758L6.79851 17.9761L6.79824 17.9772L6.79714 17.9818L6.79281 17.9998L6.77586 18.0703L6.7113 18.3385C6.65556 18.57 6.57566 18.9015 6.47904 19.3018C6.28579 20.1025 6.02569 21.1778 5.75822 22.277C5.23788 24.4154 4.70228 26.5909 4.56577 27.0649C4.54887 27.0801 4.50926 27.1113 4.42993 27.15C4.27497 27.2255 4.06308 27.2784 3.85299 27.2789C3.64105 27.2793 3.49223 27.2275 3.40646 27.1645C3.34201 27.1171 3.25804 27.0263 3.23407 26.7902C3.22374 26.6885 3.24525 26.3691 3.33587 25.7878C3.42103 25.2417 3.55331 24.5436 3.71924 23.7427C4.05078 22.1424 4.51019 20.1626 4.97661 18.2296C5.4427 16.2981 5.91439 14.4192 6.26966 13.0228C6.44727 12.3247 6.59571 11.7475 6.69972 11.3449C6.75172 11.1436 6.79261 10.986 6.82049 10.8788L6.85229 10.7566L6.86042 10.7254L6.86247 10.7176L6.86297 10.7157L6.8631 10.7152C6.86312 10.7151 6.86313 10.7151 6.13751 10.5254L6.86313 10.7151L7.22249 9.34012L5.8846 9.81933L3.27774 10.7531L2.69197 10.9629L2.78974 11.5756L2.78976 11.5757L2.78978 11.5758L2.78986 11.5763L2.78997 11.577L2.79042 11.5801L2.79423 11.6078C2.79774 11.6344 2.80302 11.6772 2.80907 11.7357C2.82117 11.8527 2.83633 12.0322 2.84653 12.2694C2.86691 12.7439 2.86741 13.4491 2.78388 14.3465C2.75807 14.6238 2.65665 14.7394 2.57956 14.7959C2.4855 14.8648 2.33383 14.9112 2.13983 14.8944C1.94483 14.8775 1.76533 14.8005 1.64774 14.6998C1.53897 14.6067 1.49999 14.5127 1.5 14.4161L1.50004 11.7052C1.50003 11.3657 1.5869 11.0318 1.75242 10.7354C1.80212 10.6464 1.87436 10.572 1.9619 10.5198L2.17718 10.3913L2.24475 10.3509C2.70867 10.0738 3.11381 9.83175 3.54564 9.6544C4.2276 9.37432 5.25861 8.95595 6.21875 8.58634C7.20664 8.20605 8.04364 7.90764 8.38119 7.83481ZM1.19302 9.23183C0.879502 9.41899 0.620753 9.68535 0.442746 10.0041C0.152412 10.5241 1.55716e-05 11.1097 4.41818e-05 11.7052L1.47727e-08 14.4159C-0.000148699 15.6579 1.12253 16.3119 2.01033 16.3888C2.48978 16.4303 3.02244 16.3309 3.46607 16.0059C3.92668 15.6684 4.21632 15.142 4.27742 14.4855C4.36772 13.5154 4.36821 12.7421 4.34514 12.2051C4.3415 12.1203 4.33727 12.0414 4.33271 11.9685L5.0571 11.7091C4.98511 11.9897 4.90412 12.3065 4.81597 12.653C4.45979 14.0529 3.98649 15.9382 3.51846 17.8778C3.05076 19.816 2.5869 21.8143 2.25043 23.4384C2.08236 24.2496 1.94445 24.9752 1.85378 25.5568C1.76858 26.1032 1.70862 26.6154 1.74174 26.9417C1.80466 27.5615 2.08214 28.0528 2.51836 28.3733C2.93328 28.6781 3.42438 28.7798 3.85629 28.7789C4.29005 28.7779 4.72594 28.6745 5.0874 28.4982C5.41736 28.3373 5.83537 28.0394 5.98519 27.554C6.11237 27.142 6.6854 24.811 7.21569 22.6317C7.48345 21.5313 7.74379 20.4549 7.93717 19.6538L7.97266 19.5067L8.47656 19.9314C9.25371 20.5864 9.68417 21.5753 9.65979 22.6121C9.63989 23.4583 9.6312 24.4539 9.66363 25.3237C9.67982 25.7579 9.70662 26.1718 9.74942 26.5254C9.78948 26.8564 9.85151 27.2114 9.96979 27.4797C10.3523 28.3473 11.2243 28.7193 11.9826 28.7195C12.7395 28.7197 13.62 28.3452 13.9637 27.4445C14.1159 27.0454 14.1642 26.4297 14.1827 25.8556C14.2024 25.2409 14.1891 24.5343 14.1636 23.8729C14.138 23.2093 14.0997 22.5807 14.0679 22.1186C14.0519 21.8873 14.0376 21.6972 14.0272 21.5645C14.022 21.4982 14.0178 21.4462 14.0148 21.4106L14.0114 21.3698L14.011 21.3651C13.8855 19.2756 12.9063 17.3295 11.3028 15.9834L11.1964 15.894C11.1547 15.8591 11.1353 15.8043 11.1457 15.7509L11.5261 13.7922C13.1969 14.897 15.1574 16.1655 17.4041 16.2548C18.3505 16.2924 19.0936 15.6626 19.3724 14.935C19.5161 14.5599 19.554 14.119 19.405 13.69C19.2524 13.2507 18.9273 12.8926 18.4707 12.659C18.0051 12.4207 17.5949 12.2776 17.2477 12.1948C17.1315 12.1671 17.0225 12.1423 16.9198 12.1189C16.4712 12.0168 16.1434 11.9421 15.8598 11.7728C15.4386 11.5214 14.9808 11.1294 14.5318 10.745L14.4638 10.6868C14.4007 10.6328 14.3369 10.5788 14.274 10.5261C13.8814 10.1965 13.5431 9.79622 13.2625 9.34731C13.0423 8.99488 12.7594 8.56659 12.4556 8.17017C12.1618 7.78692 11.8085 7.37998 11.4424 7.11588C10.9378 6.75196 10.4255 6.48208 9.85437 6.34922C9.27921 6.21543 8.69564 6.23243 8.0648 6.36855C7.58778 6.47148 6.62754 6.82167 5.67987 7.18648C4.70447 7.56196 3.66163 7.98518 2.97577 8.26686C2.4365 8.48835 1.9414 8.78448 1.50064 9.04811L1.50062 9.04813L1.4083 9.10331L1.19302 9.23183Z" fill="#C2C7CC"/>
                </svg>
                </span>
            </div>
        </div>
        <div className="w-[115px] border border-[#C2C7CC] h-[52px] flex items-center justify-center rounded-[10px] ">
            <div className="flex items-center justify-center gap-4">
                <div className="-mt-4" >
                <input type="tel" className="w-[60px] outline-none text-xs "/>
                <span className="text-[#C2C7CC] -mt-2  flex items-center justify-center "> 10 <span>دقیقه</span></span>
                </div>
                <span>
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9101 1H9.12131C6.00392 1 5.31534 2.55403 4.91472 4.45898L3.5 11.2391H23.5314L22.1167 4.45898C21.716 2.55403 21.0275 1 17.9101 1Z" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M26.0252 22.2929C26.1629 23.7592 24.986 25.025 23.4837 25.025H21.13C19.7779 25.025 19.5901 24.4485 19.3522 23.7342L19.1018 22.9822C18.7513 21.9546 18.5259 21.2653 16.7231 21.2653H10.313C8.51021 21.2653 8.2473 22.0423 7.93431 22.9822L7.68392 23.7342C7.44605 24.4485 7.25825 25.025 5.90614 25.025H3.55245C2.05009 25.025 0.873251 23.7592 1.01097 22.2929L1.71207 14.6606C1.88734 12.7808 2.25041 11.2393 5.53055 11.2393H21.5056C24.7857 11.2393 25.1488 12.7808 25.3241 14.6606L26.0252 22.2929Z" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.50196 7.47949H2.25" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.7832 7.47949H23.5312" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.5156 1.21289V3.71939" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6406 3.71973H15.3965" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.00391 16.252H9.75979" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.2734 16.252H21.0293" stroke="#C2C7CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span>
            </div>
        </div>
  
     
    
   </div>
            <Place/>
            {/* <Place/>
            <Place/>
            <Place/>
            <Place/> */}
          </div>
        </div>

          </div>
        <div className="sm:mt-[250px] mt-[80px]">
        <div className="flex items-center justify-center gap-10 mb-10 sm:justify-end sm:-ml-[20px] sm:-mt-14">
        <button className="w-[138px] h-[48px] text-[#FB2047] border border-[#FB2047] rounded-[10px] text-[16px]">
          صفحه قبل
        </button>
        <button className="w-[138px] h-[48px] text-white bg-[#23B05B] rounded-[10px] text-[16px]" >
          صفحه بعد
        </button>
      </div>
    
        </div>
      </div>
    </div>
  );
};

export default Location;
