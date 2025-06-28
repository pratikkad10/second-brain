import React, { type ReactElement } from 'react'

interface propInterface {
    logo: ReactElement,
    text: string
}
const SidebarItems = (props: propInterface) => {
    return (
        <div className='flex items-center gap-2 cursor-pointer rounded hover:bg-gray-200 py-2 px-4 transition-all delay-150'>
            <div >{props.logo}</div>
            <div className='text-gray-500'>{props.text}</div>
        </div>

    )
}

export default SidebarItems