import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='flex justify-between  bg-headerBackground  h-[120px] backdrop-blur mt-[260px]'>
        <div className='container flex  justify-between items-center'>
                <div>
                  <Link href="/"  className='flex justify-center items-center'>
                      <Image src='/assets/img/Footer/logo.svg' alt='лого' width={40} height={40} className='' />
                  </Link>
              </div>
              <div className="flex gap-7">
                  <Link href='/' className='text-2xl font-medium' > Tourism@gmail.com </Link>
                  <Link href='/' className='text-2xl font-medium' > 8 932 342 33 33 </Link>
              </div>
              <div className="flex justify-center items-center gap-5">
                  <Link href='/' className='' ><Image className='' width={40} height={40} src="/assets/img/Footer/vk.svg" alt='icon link'/></Link>
                  <Link href='/' className='' ><Image width={40} height={40} src="/assets/img/Footer/whatsap.svg" alt='icon link'/></Link>
                  <Link href='/' className='' ><Image width={40} height={40} src="/assets/img/Footer/telegram.svg" alt='icon link'/></Link>
              </div>

          </div>
      </footer>
      
    </>
  )
}

export default Footer
