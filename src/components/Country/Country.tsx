import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Country = () => {
  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto h-full bg-cover rounded-[5px] '>
    <div className="w-full">
            <h2 className="text-black text-8xl font-bold mt-[100px]">Country</h2>
            <div className="flex text-black mt-5 justify-between w-full" >
                <h3 className="text-5xl font-semibold">Top 5 countries by tours</h3>
                <div>
                    <Link href='/'  className="text-5xl font-bold flex "><span className='transition-all duration-300 hover:pr-9'>More tours</span><span className=''> →</span></Link>
                </div>
            </div>
        </div>
        <div className="">
            <ul className="mt-9 grid grid-cols-2 gap-5">
                <li className=" col-start-1 col-end-3 bg-[url(/assets/img/Country/qwe1.png)] bg-no-repeat bg-contain  w-[1420px] h-[300px] flex items-end">
                    <div className="py-[25px] px-[20px] w-full">
                        <h3 className="text-5xl font-medium ">Russia</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-[27px] font-medium">7 tours</p>
                            <Link href="\" className="text-[27px] font-semibold flex"><span className='transition-all duration-300  hover:pr-9 '>Show tours</span><span className=' text-4xl' >→</span></Link>
                        </div>
                    </div>
                </li>
                <li className="  bg-[url(/assets/img/Country/Rectangle2.png)]  w-[700px] h-[300px] bg-no-repeat bg-contain   flex items-end">
                    <div className="py-[25px] px-[20px] w-full">
                        <h3 className="text-5xl font-medium ">Russia</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-[27px] font-medium">7 tours</p>
                            <Link href="\" className="text-[27px] font-semibold flex text-center"><span className='transition-all duration-300  hover:pr-9 '>Show tours</span><span className=' text-4xl'>→</span></Link>
                        </div>
                    </div>
                </li>
                <li className="col-start-2 col-end-3 bg-[url(/assets/img/Country/Rectangle3.png)] w-[700px]  h-[300px] bg-no-repeat bg-contain   flex items-end">
                    <div className="py-[25px] px-[20px] w-full">
                        <h3 className="text-5xl font-medium ">Russia</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-[27px] font-medium">7 tours</p>
                            <Link href="\" className="text-[27px] font-semibold flex "><span className='transition-all duration-300  hover:pr-9   '>Show tours</span><span className=' text-4xl' >→</span></Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </section>
  )
}

export default Country
