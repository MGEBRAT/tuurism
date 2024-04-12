"use client";
import useFooters from '@/Hooks/useFooters'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  const footer = useFooters();

  return (
    <>
      <footer className='flex justify-between  bg-headerBackground  h-[120px] backdrop-blur mt-[260px]'>
        <div className='container flex  justify-between items-center'>
                <div>
                  <Link href="" className='flex justify-center items-center'>
                      <Image src='/assets/img/Footer/logo.svg' alt='лого' width={40} height={40} className='' />
                  </Link>
              </div>
              <div className="flex gap-7">
                  <Link href='/' className='text-2xl font-medium' >{footer.attributes?.email}</Link>
                  <Link href='/' className='text-2xl font-medium' > {footer.attributes?.number}  </Link>
              </div>
              <div className="flex justify-center items-center gap-5">
                  <Link href='{footer.attributes?.link1} ' className='' ><Image className='' width={40} height={40} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (footer.attributes?.icon?.data.attributes?.url ?? '')} alt='icon link'/></Link>
                  <Link href='{footer.attributes?.link2} ' className='' ><Image width={40} height={40} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (footer.attributes?.icon2?.data.attributes?.url ?? '')} alt='icon link'/></Link>
                  <Link href='{footer.attributes?.link3} ' className='' ><Image width={40} height={40} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (footer.attributes?.icon3?.data.attributes?.url ?? '')}  alt='icon link'/></Link>
              </div>

          </div>
      </footer>
      
    </>
  )
}

export default Footer
