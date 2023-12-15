'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import logo from '../../../public/assets/shared/logo.svg'
import iconHamburger from '../../../public/assets/shared/icon-hamburger.svg'

import styles from './index.module.css'
import useWindowDimensions from '@/helpers/getWindowSize'

export default function Navbar() {

  return (
    <section className={styles.container}>
        <Image src={logo} alt='page logo' className={styles.image}/>
        <Image src={iconHamburger} alt='hamburger menu' className={styles.hamburger}/>
    </section>
  )
}
