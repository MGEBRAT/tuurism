"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import useCountries from '@/Hooks/useCountries';

const Country = () => {

    const country = useCountries();


  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto h-full bg-cover rounded-[5px] '>
    <div className="w-full">
            <h2 className="text-black text-8xl font-bold mt-[100px]">Country</h2>
            <div className="flex text-black mt-5 justify-between w-full" >
                <h3 className="text-5xl font-semibold">Top 3 countries by tours</h3>
                <div>
                    <Link href='/'  className="text-5xl font-bold flex "><span className='transition-all duration-300 hover:pr-9'>More tours</span><span className=''> →</span></Link>
                </div>
            </div>
        </div>
        <div className="">
        
            <ul  className="mt-9 grid grid-cols-2 gap-5">
            {country.map((item, index) => {
                            return (
                    <li key={index} className="relative first  bg-no-repeat bg-cover  w-full h-[300px] flex items-end">
                        <div className="py-[25px] px-[20px] w-full">
                            <h3 className="text-5xl font-medium ">{`${item.attributes?.name}`}</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-[27px] font-medium">{`${item.attributes?.numberTours}`} tours</p>
                                <Link href="\" className="text-[27px] font-semibold flex"><span className='transition-all duration-300  hover:pr-9 '>Show tours</span><span className=' text-4xl' >→</span></Link>
                            </div>
                        </div>
                        <Image width={1420} height={300} className='absolute z-[-10]' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.img?.data.attributes?.url ?? '')} alt='фото'/>
                    </li>
                       )
                    })}
                    
                
            </ul>
          
        </div>
    </div>
  </section>
  )
}

export default Country
