import React from 'react'
import BrainLogo from '../icons/BrainLogo'
import SidebarItems from './sidebarItems'
import TwitterLogo from '../icons/TwitterLogo'
import Youtube from '../icons/Youtube'
import FileLogo from '../icons/FileLogo'
import LinkIcon from '../icons/LinkIcon'
import TagsIcon from '../icons/TagsIcon'

const Sidebar = () => {
  return (
    <div className='left-0 w-[15%] h-screen bg-custom-light-200 shadow p-6'>
        <div className='flex items-center gap-2 mb-8'>
            <span><BrainLogo /></span>
            <h1 className='text-2xl font-semibold'>Secondbrain</h1>
        </div>
        <div className='mx-6'>
            <SidebarItems logo={<TwitterLogo/>} text='Tweets' />
            <SidebarItems logo={<Youtube/>} text='Videos' />
            <SidebarItems logo={<FileLogo/>} text='Documents' />
            <SidebarItems logo={<LinkIcon/>} text='Links' />
            <SidebarItems logo={<TagsIcon/>} text='Tags' />
        </div>
    </div>
  )
}

export default Sidebar