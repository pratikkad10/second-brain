import ShareIcon from '../icons/ShareIcon'
import TrashIcon from '../icons/TrashIcon'
import Youtube from '../icons/Youtube'
import TwitterLogo from '../icons/TwitterLogo'

interface propInterface{
    title:string,
    link:string,
    type:string,
    tags?:string,
    hideIcon?:boolean
}

const Card = ({ title, link, type, hideIcon }:propInterface) => {
    return (
        <div className='max-w-76 min-h-48 min-w-72 bg-custom-light-200 shadow-md border-b-2 border-slate-300 rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1 '>
                    <div className='mt-1'>{
                        type === "youtube" ? <Youtube/>: <TwitterLogo/>
                    }</div>
                    <div >{title}</div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{hideIcon? "" : <ShareIcon size='md' />}</span>
                    <span>{hideIcon? "" : <TrashIcon size='md' />}</span>
                </div>
            </div>


            <div className="pt-4">
                {type === "youtube" && (
                    <iframe className='w-full' src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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