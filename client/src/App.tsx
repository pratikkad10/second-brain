
import { useState } from 'react'
import './App.css'
import { AddContent } from './components/AddContent'
import Cards from './components/Cards'
import PlusIcon from './components/icons/PlusIcon'
import ShareIcon from './components/icons/ShareIcon'
import { Button } from './components/ui/Button'
import Sidebar from './components/ui/Sidebar'

function App() {

  const [open, setOpen] =useState(false);

  return (

    <div>
      <AddContent open={open} onClose={setOpen}  />

      <div className='flex'>
        <Sidebar />
        <div className='p-6 w-[85%]'>
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
                onClick={() => console.log("share btn waas clicked!")}
              />

            </div>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  )
}

export default App
