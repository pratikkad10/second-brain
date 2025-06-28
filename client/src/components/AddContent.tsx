import { useRef, useState, type Dispatch, type SetStateAction } from 'react'
import Input from './ui/Input'
import { Button } from './ui/Button'
import Xmark from './icons/Xmark'
import userAPI from '../api/userApi'
//@ts-ignore
enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const AddContent = ({ open, onClose }: { open: boolean, onClose: Dispatch<SetStateAction<boolean>> }) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    const submitHandler = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            return;
        }

        const response=await userAPI.postContent({ title, link, type });
        console.log(response);
        onClose(false);
    }

    return (
        <div>
            {open && (
                <div
                    className="h-screen w-screen fixed left-0 top-0 bg-slate-800/70 backdrop-blur-sm z-50 flex justify-center flex-col">

                    <div className='bg-white p-6 w-92 mx-auto shadow-md rounded-md'>
                        <div
                            onClick={() => onClose(false)}
                            className='flex justify-end mb-4 cursor-pointer'>
                            <span>
                                <Xmark size='md' />
                            </span>
                        </div>
                        <div className='  flex flex-col gap-2 '>
                            <Input reference={titleRef} name='title' placeholder='title' type='text' size='md' />
                            <Input reference={linkRef} name='link' placeholder='link' type='link' size='md' />
                            <div className='flex items-center justify-center gap-2 p-2'>
                                <Button text="youtube" variant={type === "youtube" ? "primary" : "secondary"} size='md' onClick={() => {
                                    setType(ContentType.Youtube)
                                }} />
                                <Button text="twitter" variant={type === "twitter" ? "primary" : "secondary"} size='md' onClick={() => {
                                    setType(ContentType.Twitter)
                                }} />
                            </div>
                            <div className='flex justify-center mt-2'>
                                <Button onClick={submitHandler} text="submit" variant='primary' size='md' />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
