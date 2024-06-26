import Link from 'next/link';
import React from 'react';

const menuLinks = [
    {label: 'Main', url: '/'},
    {label: 'About us', url: '/about'},
    {label: 'Tours', url: '/tours'},
    {label: 'Country', url: '/country'},
    {label: 'To reserve', url: '/reserve'}
];

const NavbarMobile = ({ containerStyle } : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex flex-col gap-4">
        {menuLinks.map((item, index) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url}  className='text-white uppercase hover:text-accent transition-all'>{item.label}</Link>
              </li>
            </>
          );
        })}
      </menu>
    </nav>
  )
}

export default NavbarMobile
