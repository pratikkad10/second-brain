import React, { type ReactElement } from 'react'

interface propInterface {
    logo: ReactElement,
    text: string
}
const SidebarItems = (props: propInterface) => {
    return (
        <div className='flex items-center gap-2  text-xl cursor-pointer rounded hover:bg-custom-purple-300 py-2 pr-4 pl-1 transition-all delay-150'>
            <div >{props.logo}</div>
            <div>{props.text}</div>
        </div>

    )
}

export default SidebarItems