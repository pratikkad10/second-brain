import React from 'react'
import Card from './ui/Card'
const Cards = () => {
  return (
    <div  className='flex  gap-4'>
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://x.com/jod_insane/status/1937568249509535885/photo/1"} title={"tweet bt solana"} type={"twitter"}  />
    
    </div>
  )
}

export default Cards