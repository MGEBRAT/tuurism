import Link from 'next/link'
import React from 'react'

const Button = ({ containerStyle, text, href } : { containerStyle: string, text: string, href: string }) => {
  return (
    <Link href="" className={`${containerStyle} group  overflow-hidden bg-white text-black font-medium inline-flex items-center justify-center rounded-full`}>
    <span className=''>{text}</span>
  </Link>
  )
}

export default Button