import React from "react";
import Image from "next/image";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import useMains from "@/Hooks/useMains";
import Link from "next/link";

const MainSlider = () => {

  const mains = useMains();

  return (
    <Swiper>
       {mains.map((item, index) => {
        return (
          <SwiperSlide key={index}>
        <div className=" container flex justify-between mx-auto bg-main  w-full h-[550px] p-0  mt-[250px]">
          <div className="h-full flex flex-col justify-center items-left gap-4">
            <h1 className="font-bold text-8xl w-[1070px]">
              {`${item.attributes?.mainText}`}
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
                  <p className="font-semibold text-[30px]"> {`${item.attributes?.dateText}`}</p>
                </li>
                <li className="flex justify-center items-center  gap-[23px]">
                  <Image
                    src="/assets/img/Main/vector.svg"
                    width={40}
                    height={40}
                    alt="картинка"
                    className="w-[40px] h-[40px] "
                  ></Image>
                  <p className="font-semibold text-[30px]">{`${item.attributes?.daysText}`}</p>
                </li>
                <li className="flex justify-center items-center  gap-[23px]">
                  <Image
                    src="/assets/img/Main/vector-1.svg"
                    width={40}
                    height={40}
                    alt="картинка"
                    className="w-[40px] h-[40px] "
                  ></Image>
                  <p className="font-semibold text-[30px]">{`${item.attributes?.moneyText}`}$</p>
                </li>
              </ul>
            </div>
            <p className=" w-[950px] font-normal text-[27px] mt-5">
            {`${item.attributes?.description.length > 189 ? item.attributes?.description.slice(0, 189) + '...' : item.attributes?.description }`}
            </p>
            <Link href="" className="overflow-hidden bg-white text-black transition-all duration-300 hover:gap-5  w-[230px]  h-[65px] rounded-full font-medium text-[30px] mt-5 flex justify-center items-center gap-2  "><span>Go over</span><span className=' text-4xl' >→</span></Link>
            
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
      )
       })}
    </Swiper>
  );
};

export default MainSlider;
