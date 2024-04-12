"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import useSingleTours from '@/Hooks/useSingleTours';
import ButtonTour from '@/components/ButtonTour/ButtonTour';


export default function page({ params }) {

    const detailTours = useSingleTours(params.id);

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        {/* Начало превью */}
        <div>
            {detailTours?.attributes?.img?.data.attributes?.url ? 
            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailTours?.attributes?.img?.data.attributes?.url ?? '')} alt='' width={467} height={659} className='rounded-[10px] object-cover' />
            :
              <div className='w-[467px] h-[659px] rounded-[10px] bg-zinc-800 animate-pulse'></div>
            }
        </div>
        <div className="">
            <div> 
                <h2 className="">{detailTours?.attributes?.Name}</h2>
                <div className="">
                    <Image alt='e' src="" width={40} height={40}/>
                    <p className="">{detailTours?.attributes?.star}</p>
                </div>
                <ul className="flex  items-center gap-[40px] mt-5 text-3xl">
                <li className="flex justify-center items-center gap-[23px] font-semibold">
                  <Image
                    src="/assets/img/Main/calendar.svg"
                    width={40}
                    height={40}
                    alt="картинка"
                    className="w-[40px] h-[40px] "
                  ></Image>
                  <p className="font-semibold text-[30px]"> {detailTours?.attributes?.dateText}</p>
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
                  <p className="font-semibold text-[30px]">{detailTours?.attributes?.moneyText}$</p>
                </li>
              </ul>
              <p className="">{detailTours?.attributes?.bigDescr}</p>
              <ButtonTour href='' icon='the' text='book' containerStyle='' />
            </div>
           

        </div>

        <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-xl">
            
            
        </div>
        {/* Конец превью */}
        {/* Начало названия */}
        {detailTours?.attributes?.name ? 
          <h2 className="text-left text-white text-5xl uppercase mt-10">{detailTours?.attributes?.name}</h2>
          :
          <div className='w-full mt-10 flex flex-col gap-4'>
            <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
            <div className='w-1/3 h-12 rounded-lg bg-zinc-800 animate-pulse'></div>
          </div>
        }
        {/* Конец названия */}
        {/* Начало описания */}
        {detailTours?.attributes?.longText ? 
          <p className="text-zinc-700 text-base md:text-xl text-left mt-7">{detailTours?.attributes?.longText}</p>
          :
          [1,2,3,4,5,6,7].map((item, index) => {
            return (
              <div key={index} className="w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
            )
          })
        }
        {/* Конец описания */}
      </div>
    </section>
  )
}