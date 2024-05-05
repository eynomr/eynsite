import React from 'react'
import Image from 'next/image'

function SectionContainer({children} : {children: React.ReactNode}) {
  return (
    <div className='grid items-start grid-cols-12 gap-400 w-full'>
      {children}
    </div>
  )
}

function SectionTitle({title} : {title: string}) {
  return (
      <h4 className='text-neutral-50 text-xs col-span-2 font-bold pt-100 text-right'>
        {title}
      </h4>
  )
}

function SectionContent({children} : {children: React.ReactNode}) {
  return (
    <div className='col-span-10'>
      {children}
    </div>
  )
}

interface RowProps {
  href: string
  title: string
  subtitle?: string
  date?: string
}

function Row({
  href,
  title,
  subtitle,
  date
} : RowProps) {
  return (
    <a
      target='_blank'
      href={href}
      rel="noopener noreferrer"
      className='flex items-center space-x-400 group'
    >
      <strong className='font-medium font-mono flex-none group-hover:text-blue-10 group-hover:underline'>
        {title}
      </strong>
      <span className='w-full border-t border-neutral-85 border-dashed shrink'/>
      {subtitle && <span className='font-mono font-light text-sm text-nowrap'>{subtitle}</span>}
      {date && <span className='font-mono text-neutral-50 text-xs text-nowrap'>{date}</span>}
    </a>
  )
}

const workHistory = [
  {
    title: 'Brighton Collectibes',
    subtitle: 'Data Engineer',
    date: '2023-now',
    href: 'https://www.brighton.com'
  },
  {
    title: 'Living Spaces',
    subtitle: 'Business Analyst',
    date: '2022-2023',
    href: 'https://www.livingspaces.com'
  }
]

const connectLinks = [
  {
    title: 'LinkedIn',
    subtitle: 'Connect',
    href: 'https://www.linkedin.com/in/aomrani/'
  },
  {
    title: 'GitHub',
    subtitle: 'Follow',
    href: 'https://github.com/eynomr'
  },
  {
    title: 'Twitter',
    subtitle: 'Follow',
    href: 'https://twitter.com/eynomrani'
  } 
]

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center gap-1600 w-[780px] mx-auto'>
      <SectionContainer>
        <SectionTitle title='Me'/>
        <SectionContent>
          <div className="prose text-primary font-mono">
            <p>
              Hey, I&apos;m Ali. I&apos;m Data/Software Engineer. I&apos;m currently working on building {' '}
              <a className="text-blue-10 no-underline" target='_blank' href='https://www.livy.so' rel="noopener noreferrer">Livy</a>, an intelligent learning management system for university students to help them organize and prioritize thei course work and get ideas on how to work on their assignments.
            </p>
            <p>I&apos;m also working on Harf and Warhol.</p>
            <p>Warhol is an app for anyone with any background (technical or non-technical) to have a digital representation (like this website).</p>
            <p>Harf is a new programming language based on natural language. It will interprate every line of natural language to python code and executes the python code. This project is mainly for fun :D</p>
          </div>
        </SectionContent>
      </SectionContainer>
      
      <SectionContainer>
        <SectionTitle title='Work'/>
        <SectionContent>
          <div className='flex flex-col gap-300'>
            {workHistory.map((work) => (
              <Row key={work.title} {...work}/>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='Location'/>
        <SectionContent>
          <Image
            priority
            src='/static/img/la.jpg'
            width={800}
            height={400}
            className='rounded-lg'
            quality={100}
            alt='Los Angeles'
          />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title='Connect'/>
        <SectionContent>
          <div className='flex flex-col gap-300'>
            {connectLinks.map((link) => (
              <Row key={link.title} {...link}/>
            ))}
          </div>
        </SectionContent>
      </SectionContainer>
    </div>
  )
}