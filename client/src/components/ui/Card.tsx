

import React from 'react'
import ShareIcon from '../icons/ShareIcon'

interface propInterface{
    title:string,
    link:string,
    type:string,
    tags?:string
}

const Card = ({ title, link, type, tags }:propInterface) => {
    return (
        <div className='max-w-76 min-h-48 min-w-72 bg-custom-light-200 shadow rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <span><ShareIcon size='md' /></span>
                    <span>{title}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span><ShareIcon size='md' /></span>
                    <span><ShareIcon size='md' /></span>
                </div>
            </div>


            <div className="pt-4">
                {type === "youtube" && (
                    <iframe className='w-full' src="https://www.youtube.com/embed/0BDt08x-De8?si=vsa0mnZT4h6eSifg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                )}

                {type === "twitter" && (
                    <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com")} target="_blank" rel="noopener noreferrer">
                            View on Twitter
                        </a>
                    </blockquote>
                )}

            </div>
        </div>
    )
}

export default Card