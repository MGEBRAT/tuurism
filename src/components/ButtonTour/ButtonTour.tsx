import Link from 'next/link'
import React from 'react'

const ButtonTour= ({ containerStyle, text, icon, href } : { containerStyle: string, text: string, icon: string, href: string }) => {
    return (
      <Link href="" className={`${containerStyle}  group  overflow-hidden bg-white text-black font-medium inline-flex items-center text-center justify-center rounded-full`}>
        <span className=''>{text}</span>
        <span className='text-[35px] h-[55px] '>{icon}</span>
    </Link>
    )
}

export default ButtonTour