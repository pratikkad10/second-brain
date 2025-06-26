import { type Dispatch, type SetStateAction } from 'react'
import Input from './ui/Input'
import { Button } from './ui/Button'
import Xmark from './icons/Xmark'

export const AddContent = ({ open, onClose }:{open:boolean, onClose:Dispatch<SetStateAction<boolean>>}) => {
    return (
        <div>
            {open && (
                <div 
                className="h-screen w-screen fixed left-0 top-0 bg-slate-800/70 backdrop-blur-sm z-50 flex justify-center flex-col">

                    <div className='bg-white p-6 w-92 mx-auto shadow-md rounded-md'>
                        <div 
                        onClick={()=> onClose(false)}
                        className='flex justify-end mb-4 cursor-pointer'>
                            <span>
                                <Xmark size='md' />
                            </span>
                        </div>
                        <form action="" className='  flex flex-col gap-2 '>
                            <Input name='title' placeholder='title' type='text' size='md' />
                            <Input name='type' placeholder='type' type='text' size='md' />
                            <Input name='link' placeholder='link' type='link' size='md' />
                            <div className='flex justify-center mt-2'>
                                <Button text="submit" variant='primary' size='md' />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
