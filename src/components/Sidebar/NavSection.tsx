import React from 'react'

interface NavTitleProps {
  title: string
}

function NavTitle({title} : NavTitleProps) {
  return (
    <div className='flex items-center h-800 px-200 w-full'>
      <h4 className='text-neutral-50 text-xs'>
        {title}
      </h4>
    </div>
  )
}


interface NavSectionProps {
  title?: string,
  children: React.ReactNode
}

export default function NavSection({title, children} : NavSectionProps) {
  return (
    <div>
      {title && <NavTitle title={title}/>}
      <div className='flex flex-col'>
        {children}
      </div>
    </div>
  )
}
