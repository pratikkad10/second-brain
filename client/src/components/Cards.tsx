import Card from './ui/Card'
const Cards = () => {
  return (
    <div  className='flex gap-8 flex-wrap justify-center'>
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        <Card link={"https://www.youtube.com/watch?v=0BDt08x-De8"} title={"youtube video by harkirat"} type={"youtube"}  />
        {/* <Card link={"https://x.com/vercel/status/1937677396850913633/photo/1"} title={"Vercel"} type={"twitter"}  /> */}
    </div>
  )
}

export default Cards