import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <div className='w-[45px] h-[45px] bg-neutral-100 rounded-full p-50'>
        <Image 
          priority
          src='/static/img/me.jpg'
          className='rounded-full'
          quality={100}
          height={45}
          width={45}
          alt='Ali'
        />
    </div>
  )
}
