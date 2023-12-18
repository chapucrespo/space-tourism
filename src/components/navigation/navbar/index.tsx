'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import logo from '../../../../public/assets/shared/logo.svg'
import iconHamburger from '../../../../public/assets/shared/icon-hamburger.svg'
import './styles.css'

interface YourComponentProps {
  toggle: () => void;
}

const Navbar: React.FC<YourComponentProps> = ({toggle}) => {
  return (
    <section>
        <Image src={logo} alt='page logo' className='logo'/>
        <ul>
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
    </section>
  )
}

export default Navbar