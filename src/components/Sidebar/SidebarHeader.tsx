import React from 'react'

interface Props {
  title: string
  avatar?: React.ReactNode
  leadingIcon?: React.ReactNode
}

function SidebarHeader({
  title,
  avatar=null,
  leadingIcon=null,
} : Props) {
  return (
    <div className='flex items-center gap-200 w-full p-50'>
      {avatar && <>{avatar}</>}
      <h2 className='text-sm font-bold'>
        {title}
      </h2>
      {leadingIcon && <>{leadingIcon}</>}
    </div>
  )
}

export default SidebarHeader