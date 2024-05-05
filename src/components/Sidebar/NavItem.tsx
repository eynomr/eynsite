import React from 'react'
import Link from 'next/link'

interface Props {
  href: string
  title: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  badge?: React.ReactNode
  active?: boolean
}

export default function NavItem({
  href,
  title,
  leftIcon=null,
  badge=null,
  rightIcon=null,
  active=false,
} : Props) {
  const isActiveClass = active ? 'bg-neutral-85' : ''

  return (
    <Link href={href}>
      <div className={`flex rounded-lg items-center justify-center h-800 self-stretch gap-300 px-300 w-full ${isActiveClass} hover:bg-neutral-85`}>
        {leftIcon && <>{leftIcon}</>}
        <h4 className='flex-1 text-neutral-10 text-sm'>{title}</h4>
        <div>
          {rightIcon && <>{rightIcon}</>}
          {badge && <>{badge}</>}
        </div>
      </div>
    </Link>
  )
}
