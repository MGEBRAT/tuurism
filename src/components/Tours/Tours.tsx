"use client";
import React from 'react'
import Image from "next/image";
import ButtonTour from '../ButtonTour/ButtonTour';
import Link from 'next/link';
import useTours from '@/Hooks/useTours';

const Tours = () => {

    const tours = useTours();

  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto   w-full h-full bg-cover rounded-[5px] p-0'>
        <div className="w-full">
            <h2 className="text-black text-8xl font-bold">Tours</h2>
            <div className="flex text-black mt-5 justify-between w-full" >
                <h3 className="text-5xl font-semibold">Charge yourself with new emotions!</h3>
                <div>
                    <Link href='/'  className="text-5xl font-bold flex "><span className='transition-all duration-300 hover:pr-9'>More tours</span><span className=''> →</span></Link>
                </div>
            </div>
        </div>
        <div className=''>
            <ul className="text-black grid grid-cols-3 mt-12">
            {tours.map((item, index) => {
                            return (
                <li key={index} className=" w-[467px] h-[659px] flex flex-col justify-between mt-5 ">
                    <div className="flex justify-between py-[20px] px-[25px]">
                        <div className="flex justify-flex items-center text-center bg-headerBackground rounded-full py-[5px] px-[11px] w-[87px] h-[40px] gap-2">
                            <Image src='/assets/img/Tours/star.svg' height={21} width={21} alt=''/>
                            <p className="text-[27px] text-white">{`${item.attributes?.stars}`}</p>
                        </div>
                        <div className="flex justify-flex items-center text-center bg-headerBackground rounded-full py-[5px] px-[11px] w-[148px] h-[40px] gap-2">
                            <Image src='/assets/img/Tours/Vector.svg' height={21} width={21} alt=''/>
                            <p className="text-[27px] text-white">{`${item.attributes?.daysText}`}</p>
                        </div>
                        
                    </div>
                    <div className="w-full py-[20px] px-[25px] text-white">
                        <h4 className="text-5xl uppercase font-semibold ">{`${item.attributes?.Name}`}</h4>
                        <p className="text-[27px]">{`${item.attributes?.smallDescr}`}</p>
                        <ButtonTour href='' containerStyle='flex justify-between w-full h-[50px] py-[10px] px-[15px] text-[22px] mt-4  ' text='Learn more' icon='→'/>
                    </div>
                    <Image className='bg-no-repeat  bg-cover absolute z-[-10] ' height={659} width={467}   src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.img?.data.attributes?.url ?? '')} alt='тур'/>
                </li>
                     )
                    })}
            </ul>
        </div>
    </div>
  </section>
  )
}

export default Tours
