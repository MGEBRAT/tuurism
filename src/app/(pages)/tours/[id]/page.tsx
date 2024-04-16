"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import useSingleTours from '@/Hooks/useSingleTours';
import ButtonTour from '@/components/ButtonTour/ButtonTour';
import Link from 'next/link';


export default function page({ params }) {

    const detailTours = useSingleTours(params.id);

  return (
    <section className='w-full py-16 '>
      <div className="container   flex gap-[45px] mt-[180px]">
        {/* Начало превью */}
        <div>
            {detailTours?.attributes?.img?.data.attributes?.url ? 
            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailTours?.attributes?.img?.data.attributes?.url ?? '')} alt=''  width={467} height={659} className='w-[467px] h-[659px] min-w-[467px] rounded-[10px] object-cover' />
            :
              <div className='w-[467px] h-[659px] rounded-[10px] bg-zinc-800 animate-pulse'></div>
            }
        </div>
        <div className=" text-black ">
            <div> 
              <div className='flex  items-center text-left gap-6'>
                <h2 className="text-5xl font-bold">{detailTours?.attributes?.Name}</h2>
                  <div className="flex items-center justify-center text-center gap-2">
                      <Image alt='e' src="/assets/img/Tours/stars.svg" width={40} height={40}/>
                      <p className="text-4xl font-semibold">{detailTours?.attributes?.stars}</p>
                  </div>
                </div>
                <ul className="flex  w-[600px] items-center gap-[40px] mt-10 mb-10 text-3xl">
                  <li className="flex justify-center items-center gap-[23px] font-semibold">
                    <Image
                      src="/assets/img/Main/calendar.svg"
                      width={40}
                      height={40}
                      alt="картинка"
                      className="w-[40px] h-[40px] fill-[#38D800] "
                    ></Image>
                    <p className="font-semibold text-[30px]"> {detailTours?.attributes?.date}</p>
                  </li>
                  <li className="flex justify-center items-center  gap-[23px]">
                    <Image
                      src="/assets/img/Main/vector.svg"
                      width={40}
                      height={40}
                      alt="картинка"
                      className="w-[40px] h-[40px] "
                    ></Image>
                    <p className="font-semibold text-[30px]">{detailTours?.attributes?.daysText}</p>
                  </li>
                  <li className="flex justify-center items-center  gap-[23px]">
                    <Image
                      src="/assets/img/Main/vector-1.svg"
                      width={40}
                      height={40}
                      alt="картинка"
                      className="w-[40px] h-[40px] "
                    ></Image>
                    <p className="font-semibold text-[30px] leading-8">{detailTours?.attributes?.moneyText}$</p>
                  </li>
              </ul>
              <p className="font-medium text-[32px]">{detailTours?.attributes?.BIGdescr}</p>
              <div className='mt-[40px]'>
                <Link  href="" className='w-[240px] h-[60px] py-[17.5px] px-[65px] rounded-full text-2xl font-medium  border-black border' >The book</Link>
              </div>
            </div>
           
            {/* .inverted-bar::before, .inverted-bar::after {
  
  content: "Текст здесь";
  position: absolute;
  top: 0;
  left: 0;
}
.inverted-bar::before {

  mix-blend-mode: screen; 
}
.inverted-bar::after {
  
  mix-blend-mode: difference; 
} 
        </div>

{        */}
       
        {detailTours?.attributes?.name ? 
          <h2 className="text-left text-white text-5xl uppercase mt-10">{detailTours?.attributes?.name}</h2>
          :
          <div className='w-full mt-10 flex flex-col gap-4'>
            <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
            <div className='w-1/3 h-12 rounded-lg bg-zinc-800 animate-pulse'></div>
          </div>
        }
      
        {detailTours?.attributes?.longText ? 
          <p className="text-zinc-700 text-base md:text-xl text-left mt-7">{detailTours?.attributes?.longText}</p>
          :
          [1,2,3,4,5,6,7].map((item, index) => {
            return (
              <div key={index} className="w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
            )
          })
        }
        Конец описания */}
      </div>
    </section>
  )
}