import React from "react";
import Image from "next/image";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const MainSlider = () => {
  return (
    <Swiper>
        <SwiperSlide>
      <div className=" container flex justify-between mx-auto bg-main  w-full h-[550px] p-0  mt-[250px]">
        <div className="h-full flex flex-col justify-center items-left gap-4">
          <h1 className="font-bold text-8xl w-[1070px]">
            Adventure tour of the islands of Bali
          </h1>
          <div className="">
            <ul className="flex  items-center gap-[40px] mt-5 text-3xl">
              <li className="flex justify-center items-center gap-[23px] font-semibold">
                <Image
                  src="/assets/img/Main/calendar.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">12 april</p>
              </li>
              <li className="flex justify-center items-center  gap-[23px]">
                <Image
                  src="/assets/img/Main/vector.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">12 days</p>
              </li>
              <li className="flex justify-center items-center  gap-[23px]">
                <Image
                  src="/assets/img/Main/vector-1.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">5999$</p>
              </li>
            </ul>
          </div>
          <p className=" w-[950px] font-normal text-[27px] mt-5">
            Spend time on the islands in Haiti on a 12-day tour. You can choose
            which island you are going to stay on, each island will have its own
            beauties waiting for you. Visit and conquer the islands!
          </p>
          <ButtonIcon
            href="/"
            containerStyle="transition-all duration-300 hover:gap-5 text-[30px] w-[230px]  h-[65px] rounded-full font-medium text-[30px] mt-5 flex justify-center items-center gap-2  "
            text="Go over"
            icon=" →"
          />
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-4 ">
          <span className="rounded-full border-2 border-white w-[17px] h-[17px] absolute mb-[78px] cursor-pointer "></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer "></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
        </div> */}
      </div>
      
      </SwiperSlide>
      <SwiperSlide>
      <div className=" container flex justify-between mx-auto bg-main  w-full h-[550px] p-0  mt-[250px]">
        <div className="h-full flex flex-col justify-center items-left gap-4">
          <h1 className="font-bold text-8xl w-[1070px]">
            Adventure tour of the islands of Bali
          </h1>
          <div className="">
            <ul className="flex  items-center gap-[40px] mt-5 text-3xl">
              <li className="flex justify-center items-center gap-[23px] font-semibold">
                <Image
                  src="/assets/img/Main/calendar.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">12 april</p>
              </li>
              <li className="flex justify-center items-center  gap-[23px]">
                <Image
                  src="/assets/img/Main/vector.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">12 days</p>
              </li>
              <li className="flex justify-center items-center  gap-[23px]">
                <Image
                  src="/assets/img/Main/vector-1.svg"
                  width={40}
                  height={40}
                  alt="картинка"
                  className="w-[40px] h-[40px] "
                ></Image>
                <p className="font-semibold text-[30px]">5999$</p>
              </li>
            </ul>
          </div>
          <p className=" w-[950px] font-normal text-[27px] mt-5">
            Spend time on the islands in Haiti on a 12-day tour. You can choose
            which island you are going to stay on, each island will have its own
            beauties waiting for you. Visit and conquer the islands!
          </p>
          <ButtonIcon
            href="/"
            containerStyle="transition-all duration-300 hover:gap-5 text-[30px] w-[230px]  h-[65px] rounded-full font-medium text-[30px] mt-5 flex justify-center items-center gap-2  "
            text="Go over"
            icon=" →"
          />
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-4 ">
          <span className="rounded-full border-2 border-white w-[17px] h-[17px] absolute mb-[78px] cursor-pointer "></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer "></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
          <span className="rounded-full bg-white w-[10px] h-[10px] cursor-pointer"></span>
        </div> */}
      </div>
      
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
