
import { useState } from 'react'
import '../App.css'
import { AddContent } from '../components/AddContent'
import PlusIcon from '../components/icons/PlusIcon'
import ShareIcon from '../components/icons/ShareIcon'
import { Button } from '../components/ui/Button'
import Sidebar from '../components/ui/Sidebar'
import Card from '../components/ui/Card'
import useContent from '../hooks/useContent'
import userAPI from '../api/userApi'
import { useAuth } from '../context/AuthContext'
import Spinner from '../components/ui/Spinner'

function Dashboard() {
    const { isLoading, setIsLoading } = useAuth();
    const [open, setOpen] = useState(false);
    const { contents } = useContent();

    const sharebuttonHandler = async () => {
        const response = await userAPI.shareContent({ share: true });
        console.log(response.hash);
        const shareUrl = `${window.location.origin}/api/v1/user/${response.hash}`;

        // Copy to clipboard
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied!')

    }


    return (

        <div>
            <AddContent open={open} onClose={setOpen} />
            <div className='flex'>
                <Sidebar />
                <div className='p-6 w-[85%] '>
                    <div className='flex justify-between  mx-auto pb-4'>
                        <h1 className='text-2xl font-semibold'>All Notes</h1>
                        <div className='flex gap-4'>
                            <Button
                                text='Add content'
                                variant='primary'
                                size='md'
                                onClick={() => setOpen(true)}
                                startIcon={<PlusIcon size='md' />}
                            />
                            <Button
                                text='share'
                                variant='secondary'
                                size='md'
                                startIcon={<ShareIcon size='md' />}
                                onClick={sharebuttonHandler}
                            />
                        </div>
                    </div>
                    {
                        isLoading ? <div className='h-screen  flex justify-center items-center flex-col'>
                            <Spinner />
                        </div> : <div className='flex flex-wrap gap-4'>
                            {
                                contents.map((content, idx) => { return <Card key={idx} title={content.title} link={content.link} type={content.type} /> })
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard
