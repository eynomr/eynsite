'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

import NavItem from './NavItem'
import NavSection from './NavSection'
import SidebarHeader from './SidebarHeader'
import Avatar from '../Avatar'
import { 
  HomeIcon, 
  BookIcon, 
  BookmarkIcon, 
  GithubIcon,
  LinkedinIcon,
  XIcon,
  ToolboxIcon,
  HashtagIcon,
  LivyIcon,
  LinkIcon
 } from '../Icon'

export default function Sidebar() {

  const pathname = usePathname();

  const sections = [
    {
      label:'',
      items: [
        {
          href: '/',
          title: 'Home',
          leftIcon: <HomeIcon />,
          active: pathname === '/',
        },
      ]
    },
    {
      label: 'Me',
      items: [
        {
          href: '/bookmarks',
          title: 'Bookmarks',
          leftIcon: <BookmarkIcon />,
          active: pathname === '/bookmarks',
        },
        {
          href: '/readings',
          title: 'Readings',
          leftIcon: <BookIcon />,
          active: pathname === '/readings',
        },
        {
          href: '/skills',
          title: 'skills',
          leftIcon: <ToolboxIcon />,
          active: pathname === '/skills',
        },
      ]
    },
    {
      label: 'Projects',
      items: [
        {
          href: 'https://www.livy.so',
          title: 'Livy',
          leftIcon: <LivyIcon />,
          rightIcon: <LinkIcon />,
          active: false,
        },
        {
          href: 'https://github.com/eynomr/harf',
          title: 'Harf',
          leftIcon: <HashtagIcon />,
          rightIcon: <LinkIcon />,
          active: false,
        },
        {
          href: '/warhol',
          title: 'Warhol',
          leftIcon: <HashtagIcon />,
          active: pathname === '/warhol',
        },
      ]
    },
    {
      label: 'Connect',
      items: [
        {
          href: 'https://github.com/eynomr',
          title: 'GitHub',
          leftIcon: <GithubIcon />,
          rightIcon: <LinkIcon />,
          active: false,
        },
        {
          href: 'https://www.linkedin.com/in/aomrani/',
          title: 'LinkedIn',
          leftIcon: <LinkedinIcon />,
          rightIcon: <LinkIcon />,
          active: false,
        },
        {
          href: 'https://twitter.com/eynomrani',
          title: 'Twitter',
          leftIcon: <XIcon />,
          rightIcon: <LinkIcon />,
          active: false,
        },
      ]
    }
    
  ]


  return (
    <div className='min-h-screen h-full w-[90px] lg:w-[256px] bg-neutral-96 pt-200 px-200'>
      <div className='flex flex-col gap-600'>
        <SidebarHeader title='Ali Omrani' avatar={<Avatar />}/>
        {sections.map((section, index) => (
          <NavSection key={index} title={section.label}>
            {section.items.map((item, index) => (
              <NavItem key={index} href={item.href} title={item.title} leftIcon={item.leftIcon} rightIcon={item.rightIcon} active={item.active}/>  
            ))}
          </NavSection>
        ))}
      </div>
    </div>
  )
}
