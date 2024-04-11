"use client";
import useAbouts from '@/Hooks/useAbouts';
import Image from 'next/image'
import React from 'react'


const About = () => {

  const about = useAbouts();

  return (
    <section className='w-full p-2 ' id='about'>
    <div className=' container mx-auto  w-full h-full bg-cover p-0 rounded-[5px] mt-[200px] '>
      <div className="grid grid-cols-2">
        <div className="w-[600px]">
          <div className="">
            <h2 className="text-black text-8xl font-bold">About Us</h2>
            <p className="text-black text-[27px] font-normal mt-4">{about.attributes?.descr}</p>
          </div>
          <div className="grid grid-cols-2 text-black mt-12">
            <div className="mb-[70px]">
              <h3 className="text-5xl font-semibold">{about.attributes?.bafs1}</h3>
              <p className="max-w-[200px] text-[27px] leading-none font-normal">{about.attributes?.bafs11}</p>
            </div>
            <div className="mb-[70px]">
              <h3 className="text-5xl font-semibold">{about.attributes?.bafs2}</h3>
              <p className="max-w-[200px] text-[27px] leading-none font-normal">{about.attributes?.bafs22}</p>
            </div>
            <div className="mb-[70px]">
              <h3 className="text-5xl font-semibold">{about.attributes?.bafs3}</h3>
              <p className="max-w-[200px] text-[27px] leading-none font-normal">{about.attributes?.bafs33}</p>
            </div>
            <div className="mb-[70px]">
              <h3 className="text-5xl font-semibold">{about.attributes?.bafs4}</h3>
              <p className="max-w-[200px] text-[27px] leading-none font-normal">{about.attributes?.bafs44}</p>
            </div>
          </div>
        </div>
        <div className="relative right-[100px] ">
          <div  className=' '>
             <div className='flex relative'>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (about.attributes?.img1?.data.attributes?.url ?? '')} width={260} height={440} className='w-[260px] h-[440px] relative ' alt='фото о нас' />
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (about.attributes?.img5?.data.attributes?.url ?? '')} width={288} height={270} className='w-[388px] h-[270px] relative right-[120px] z-10' alt='фото о нас' />
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (about.attributes?.img3?.data.attributes?.url ?? '')} width={577} height={383} className='w-[577px] h-[383px] relative right-[395px]' alt='фото о нас' />
            </div>
            <div className='flex relative'>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (about.attributes?.img2?.data.attributes?.url ?? '') } width={579} height={375} className='w-[579px] h-[375px] relative bottom-[100px] z-[-20]' alt='фото о нас' />
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (about.attributes?.img4?.data.attributes?.url ?? '') } width={465} height={436} className='w-[465px] h-[436px] relative bottom-[160px] right-[210px] z-[-10]' alt='фото о нас' />
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
