import React from 'react'

interface SectionTitleProps {
  title: string
}

function SectionTitle({title} : SectionTitleProps) {
  return (
    <h4 className='text-neutral-50 text-xs col-span-2 font-bold pt-100 text-right'>
      {title}
    </h4>
  )
}


interface SectionContainerProps {
  children: React.ReactNode
}

function SectionContent({children}: SectionContainerProps) {
  return (
    <div className='col-span-10'>
      {children}
    </div>
  )
}

interface Props {
  children: React.ReactNode
}

function SectionContainer({children}: Props) {
  return (
    <div className='grid items-start grid-cols-12 gap-400 w-full'>
      {children}
    </div>
  )
}

export { SectionTitle, SectionContent, SectionContainer }
