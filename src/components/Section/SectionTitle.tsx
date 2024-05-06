import React from 'react'

interface Props {
  title: string
}

export default function SectionTitle({title} : Props) {
  return (
    <h4 className='text-neutral-50 text-xs col-span-2 font-bold pt-100 text-right'>
      {title}
    </h4>
  )
}
