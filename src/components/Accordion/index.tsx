import React from 'react'

interface AccordionHeaderProps {
  label: string
}

function AccordionHeader({
  label
} : AccordionHeaderProps) {
  return (
    <div className='w-full h-800 items-center gap-200 py-100 px-200 rounded-lg'>
      <h4>{label}</h4>
    </div>
  )
}

interface AccordionProps {
  label: string,
  children: React.ReactNode
}

function Accordion({
  label,
  children
} : AccordionProps) {
  return (
    <div>
      <AccordionHeader label={label}/>
      <div className='flex flex-col items-start gap-200'>
        {children}
      </div>
    </div>
  )
}


export default Accordion
