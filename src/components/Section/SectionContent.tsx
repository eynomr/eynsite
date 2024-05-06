import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function SectionContent({children}: Props) {
  return (
    <div className='col-span-10'>
      {children}
    </div>
  )
}
