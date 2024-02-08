import React, { useEffect, useState, useRef } from "react";
import ColorBox from "../components/colorbox/ColorBox";
import SearchBox from "../components/searchbox/SearchBox";
import { hotel } from "../data";
import Menu from "../components/menu/Menu";
import Label from "../components/Label";
import Button from "../components/button/Button";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import Cookies from "universal-cookie";

const AddImage = () => {
    const navigateTo = useNavigate();
    const [OpenModal, setOpenModal] = useState(false);
    const [images, setImages] = useState([]);
    const [deleteImages, setDeleteImages] = useState([]);

    const isDelete = (mainSrc) =>
        deleteImages
            ? deleteImages.some((delateSrc) => delateSrc === mainSrc)
            : false;
    const isExsist = (mainSrc) =>
        images ? images.some((src) => src === mainSrc) : false;
    console.log(images);
    const [loading, setLoading] = useState(true);
    const cookies = new Cookies();
    const login_token = cookies.get("token");
    const [state, setState] = useState(false);
    const [receivedImages, setReceivedImages] = useState([]);
    receivedImages.forEach((image) => {
        if (image !== null) {
            setImages((prevImages) => [image, ...prevImages]);
        }
    });
    useEffect(() => {
        axios.get(
            "https://backendrahad.pythonanywhere.com/ResidenceImagesView/",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: login_token,
                },
            }
        );
        // .then((response) => {
        //     let receivedImages = Object.values(response.data); // Convert the object to an array
        //     setReceivedImages(receivedImages);
        //     setLoading(false);
        // });
    }, [login_token]);
    const handleImageUpload = (e) => {
        if (images.length > 12) {
            alert(
                "حداکثر تعداد مجاز تصاویر را رسیده‌اید. امکان اضافه کردن تصویر جدید وجود ندارد."
            );
        } else {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () =>
                    setImages((prev) => [...prev, reader.result]);
                reader.readAsDataURL(file);
            }
        }
    };
    const swiperRef = useRef();
    return (
        <div className="m-auto">
            <div className=" min-w-[360px] m-auto p-[10px] sm:p-0 flex-col items-center h-full sm:justify-start justify-center sm:flex-row px-8 sm:px-0   sm:m-0  sm:w-full sm:flex  relative  ">
                <div className=" sm:-mt-10">
                    <Menu />
                </div>
                {/* topbar */}
                <div className="sm:w-[940px] h-full  ">
                    <div>
                        <div className="flex items-center justify-center sm:block">
                            <ColorBox />
                        </div>
                        {/* label */}
                        <div className="flex items-center justify-center sm:justify-between mb-10">
                            <div className="flex justify-center  gap-3 items-center">
                                <Label />
                                <div className="hidden sm:flex items-center justify-center gap-2">
                                    <div>
                                        <svg
                                            width="7"
                                            height="11"
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z"
                                                fill="#A6ACC4"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className={`${
                                            OpenModal ? "show" : "hidden"
                                        } absolute top-0 left-0 bg-black/50 w-full h-full z-20`}
                                    ></div>
                                    <h3 className="text-[#087599] text-[14px] font-thin">
                                        افزودن امکانات
                                    </h3>
                                </div>
                                <div className="hidden sm:flex items-center justify-center gap-2">
                                    <div>
                                        <svg
                                            width="7"
                                            height="11"
                                            viewBox="0 0 7 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.67291 0.327391C6.34748 0.00195375 5.81984 0.00195375 5.4944 0.327391L0.91107 4.91072C0.585633 5.23616 0.585633 5.7638 0.91107 6.08923L5.4944 10.6726C5.81984 10.998 6.34748 10.998 6.67291 10.6726C6.99835 10.3471 6.99835 9.81949 6.67291 9.49406L2.67884 5.49998L6.67291 1.5059C6.99835 1.18046 6.99835 0.652828 6.67291 0.327391Z"
                                                fill="#A6ACC4"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-[#087599] text-[14px] font-thin">
                                        افزودن تصاویر
                                    </h3>
                                </div>
                            </div>
                            <SearchBox />
                        </div>
                    </div>
                    <h1 className="sm:mr-10 mr-4 sm:-mt-20 text-[#003666] text-center sm:text-right text-[22px] w-[300px]">
                        تصاویر هتل خود را وارد نمایید
                    </h1>
                    <div
                        className={` flex justify-center items-center flex-col`}
                    >
                        <div className=" mt-12 sm:mt-4 h-[300px] w-[100%]  sm:p-0 sm:w-[918px] sm:h-[430px] sm:border sm:shadow-xl   sm:mr-10 flex items-center justify-center">
                            <div className="w-[642px] h-[230px]    border border-[#C2C7CC] ">
                                <div className="flex   justify-between flex-col sm:flex-row ">
                                    <p className="-mt-16 sm:-mt-20 sm:-mr-20 w-full flex items-center justify-center">
                                        <span className="text-[#003666]  text-[14px] sm:text-[16px]">
                                            گالری تصاویر
                                        </span>
                                        <span className="sm:text-[12px] text-[10px] text-[#A2AFB8]">
                                            ( عکس ها باید با فرمت jpg و تعداد
                                            حداکثر 15 عدد باشند )
                                        </span>
                                    </p>
                                    <div className="w-full sm:w-[30%] -mt-14  mb-3 sm:mb-0 shadow-md">
                                        <label
                                            htmlFor="image"
                                            className="flex  mr-10 sm:mr-0 items-center gap-2 justify-center "
                                        >
                                            <p className="text-[14px] text-[#003666]">
                                                افزودن عکس جدید
                                            </p>
                                            <span>
                                                <svg
                                                    width="24"
                                                    height="25"
                                                    viewBox="0 0 24 25"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M8 12.5137H16"
                                                        stroke="#157B96"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M12 16.5137V8.51367"
                                                        stroke="#157B96"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </label>
                                        <input
                                            type="file"
                                            className="hidden"
                                            id="image"
                                            onChange={handleImageUpload}
                                            disabled={
                                                images.length > 16
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </div>
                                </div>

                                {/* slider */}

                                <div className=" ">
                                    <Swiper
                                        className={`flex   w-[90%] sm:w-[89vw]   ${
                                            state
                                                ? "h-[700px]  !w-[1400px]  absolute top-[70px] left-0   object-contain "
                                                : ""
                                        } sm:w-[693px] h-[230px]   justify-center  items-center   `}
                                        modules={[Navigation]}
                                        onBeforeInit={(swiper) => {
                                            swiperRef.current = swiper;
                                        }}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                    >
                                        {images.map((item) => (
                                            <SwiperSlide
                                                key={item}
                                                className=" flex items-center justify-center"
                                                onClick={() => setState(!state)}
                                            >
                                                <img
                                                    src={item}
                                                    className="h-full "
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <div className="flex justify-between">
                                        <button
                                            className=" active:bg-[#157b96] active:text-white sm:-mr-20 mr-2 -mt-36 w-[64px] h-[64px] border border-[#c2c7cc] text-[#157b96] flex items-center justify-center "
                                            onClick={() =>
                                                swiperRef.current?.slideNext()
                                            }
                                        >
                                            <svg
                                                width="18"
                                                height="29"
                                                viewBox="0 0 18 29"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.468 27.1001C0.714449 26.3245 0.713776 25.0905 1.46648 24.3141L9.74833 15.7721C10.5004 14.9964 10.5004 13.7635 9.74833 12.9878L1.46648 4.44577C0.713775 3.66942 0.714449 2.43538 1.468 1.65985L2.06203 1.04849C2.84747 0.240151 4.14538 0.240151 4.93082 1.04849L16.5302 12.9862C17.2844 13.7624 17.2844 14.9976 16.5302 15.7737L4.93082 27.7114C4.14538 28.5198 2.84747 28.5198 2.06203 27.7114L1.468 27.1001Z"
                                                    fill="#157B96"
                                                />
                                            </svg>{" "}
                                        </button>

                                        <button
                                            className="  sm:-ml-20 active:bg-[#157b96] active:text-white -mt-36 w-[64px] h-[64px] border border-[#c2c7cc] text-[#157b96] ml-2 flex items-center justify-center "
                                            onClick={() =>
                                                swiperRef.current?.slidePrev()
                                            }
                                        >
                                            <svg
                                                width="36"
                                                height="37"
                                                viewBox="0 0 36 37"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M25.532 31.1001C26.2856 30.3245 26.2862 29.0905 25.5335 28.3141L17.2517 19.7721C16.4995 18.9964 16.4996 17.7635 17.2517 16.9878L25.5335 8.44577C26.2862 7.66942 26.2856 6.43538 25.532 5.65985L24.938 5.04849C24.1525 4.24015 22.8546 4.24015 22.0692 5.04849L10.4698 16.9862C9.71564 17.7624 9.71563 18.9976 10.4698 19.7737L22.0692 31.7114C22.8546 32.5198 24.1525 32.5198 24.938 31.7114L25.532 31.1001Z"
                                                    fill="#157B96"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex overflow-x-auto  gap-12 mr-6  m-auto max-w-full no-scrollbar mt-2 ">
                                    {images.map((src, index) => (
                                        <div className="relative group max-w-[56px] cursor-pointer">
                                            <img
                                                key={index}
                                                src={src}
                                                className={`min-w-[56px] ${
                                                    isDelete(src)
                                                        ? "opacity-60 cursor-pointer"
                                                        : ""
                                                } h-[56px] relative rounded-lg `}
                                            />
                                            {isDelete(src) && (
                                                <span className="absolute top-3 right-3 flex items-center justify-center">
                                                    <svg
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 32 32"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M25.7071 6.29289C26.0976 6.68342 26.0976 7.31658 25.7071 7.70711L7.70711 25.7071C7.31658 26.0976 6.68342 26.0976 6.29289 25.7071C5.90237 25.3166 5.90237 24.6834 6.29289 24.2929L24.2929 6.29289C24.6834 5.90237 25.3166 5.90237 25.7071 6.29289Z"
                                                            fill="#BF000D"
                                                        />
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
                                                            fill="#BF000D"
                                                        />
                                                    </svg>
                                                </span>
                                            )}

                                            <div
                                                onClick={() =>
                                                    setDeleteImages((prev) =>
                                                        prev.some(
                                                            (prevSrc) =>
                                                                prevSrc === src
                                                        )
                                                            ? prev.filter(
                                                                  (srcPev) =>
                                                                      srcPev !==
                                                                      src
                                                              )
                                                            : [...prev, src]
                                                    )
                                                }
                                                className={` ${
                                                    isDelete(src)
                                                        ? ""
                                                        : "group-hover:bg-white max-w-[56px] group-hover:border border-red-600"
                                                }  rounded-lg absolute top-0 left-0 w-full h-full opacity-100 transition-opacity duration-500 `}
                                            >
                                                <h2
                                                    className={` ${
                                                        isDelete(src)
                                                            ? "hidden"
                                                            : ""
                                                    } opacity-0 group-hover:opacity-100 text-red-600 text-[12px] mt-3 w-full text-center flex`}
                                                >
                                                    برای حذف کلیک کنید
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div
                                    className={` ${
                                        state
                                            ? "block w-[1380px] h-full bg-black/95 absolute top-0 left-0"
                                            : "hidden"
                                    } `}
                                ></div>

                                {/* slider */}
                                <div className="flex sm:flex-row sm:gap-8 gap-4 flex-col mt-6   -mr-[200px] sm:mr-0 left-0  static"></div>
                            </div>
                        </div>
                        <div
                            className={`${
                                OpenModal ? "block z-50" : "hidden"
                            } bg-white border border-gray-100 shadow-md w-[500px] absolute  bottom-48 z-10 h-[270px] flex items-center justify-center flex-col gap-12`}
                        >
                            <span>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
                                        stroke="
#FB2047"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                        stroke="
#FB2047"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M18.8504 9.13965L18.2004 19.2096C18.0904 20.7796 18.0004 21.9996 15.2104 21.9996H8.79039C6.00039 21.9996 5.91039 20.7796 5.80039 19.2096L5.15039 9.13965"
                                        stroke="
#FB2047"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10.3301 16.5H13.6601"
                                        stroke="
#FB2047"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M9.5 12.5H14.5"
                                        stroke="
#FB2047"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                            <p>آیا از حذف عکس خود مطمئن هستید؟</p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() =>
                                        setOpenModal((prev) => !prev)
                                    }
                                    className="px-20 py-3 text-[#076E8A] border-[#076E8A] border rounded-[10px] text-[16px]"
                                >
                                    کنسل
                                </button>
                                <button className="px-20 py-3 text-white bg-gradient-to-r from-[#2393B0] to-[#076E8A] rounded-[10px] text-[16px]">
                                    حذف
                                </button>
                            </div>
                        </div>
                        <div
                            className={`flex items-center w-full my-10 mt-20   ${
                                deleteImages.length
                                    ? " justify-between"
                                    : "justify-end"
                            }`}
                        >
                            {deleteImages.length ? (
                                <button
                                    onClick={() =>
                                        setOpenModal((prev) => !prev)
                                    }
                                    className="sm:px-8 px-4 py-3 sm:mr-10 bg-[#C50000] rounded-xl text-white flex flex-row-reverse gap-2"
                                >
                                    <span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18.8484 9.14014L18.1984 19.2101C18.0884 20.7801 17.9984 22.0001 15.2084 22.0001H8.78844C5.99844 22.0001 5.90844 20.7801 5.79844 19.2101L5.14844 9.14014"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10.3281 16.5H13.6581"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M9.5 12.5H14.5"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <p className="hidden sm:block">
                                        حذف موارد انتخابی
                                    </p>
                                </button>
                            ) : null}

                            <div className=" flex items-center gap-3">
                                <button
                                    onClick={() => navigateTo("/setting")}
                                    className="px-4 py-[10px] border border-[#076E8A] rounded-[10px] text-[16px]"
                                >
                                    <span>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                                                stroke="url(#paint0_linear_2905_1688)"
                                                stroke-width="1.7"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M3.5 12H20.33"
                                                stroke="url(#paint1_linear_2905_1688)"
                                                stroke-width="1.7"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_2905_1688"
                                                    x1="19.9581"
                                                    y1="16.2897"
                                                    x2="13.4907"
                                                    y2="13.8225"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#076E8A" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#2393B0"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint1_linear_2905_1688"
                                                    x1="18.8285"
                                                    y1="12.8534"
                                                    x2="18.7046"
                                                    y2="11.2633"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stop-color="#076E8A" />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#2393B0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                </button>
                                <button className="px-20 py-3 text-white bg-gradient-to-r from-[#2393B0] to-[#076E8A] rounded-[10px] text-[16px]">
                                    <div className="flex items-center justify-center gap-2 ">
                                        <p>ادامه</p>
                                        <span>
                                            <svg
                                                width="25"
                                                height="24"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M10.0703 5.92969L4.00031 11.9997L10.0703 18.0697"
                                                    stroke="#FCF7F9"
                                                    stroke-width="1.7"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M21 12H4.17"
                                                    stroke="#FCF7F9"
                                                    stroke-width="1.7"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddImage;
