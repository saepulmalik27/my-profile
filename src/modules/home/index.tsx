import Image from 'next/image'
import React from 'react'
import styles from './home.module.css'
import cx from 'classnames'

const HomeView = () => {
  return (
    <div className='flex-grow flex flex-col justify-center items-center gap-1'>
        <Image className='w-52 sm:w-[400px]' src='/Saepul-Malik.png' width={400} height={400} alt='Saepul Malik'/>
        <h1 className='text-2xl sm:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600' >Saepul Malik</h1>
        <p className={cx('text-[12px] sm:text-base  font-bold text-center', styles.animate_writting)}>Born 1995 at Tasikmalaya <span className='text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-white'>Indonesia</span> </p>
    </div>
  )
}

export default HomeView