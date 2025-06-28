import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import userAPI from '../api/userApi';
import Card from '../components/ui/Card';

const Shared = () => {
   const {shareId} = useParams();
   
   const [contents, setContents]= useState([]);
   const [user, setUser]=useState(null);

   const fetchData = async ()=>{
    if (!shareId) {
      console.error('shareId is undefined');
      return;
    }
    const response = await userAPI.fetchSharedContent({ shareId: shareId });
    setContents(response.content);
    console.log(response);
    setUser(response.user);
   }

   useEffect(()=>{
        fetchData();
   }, [])
   
  return (
    <div className='min-h-screen w-screen flex justify-center flex-col'>
        <div className='flex items-center justify-center p-4 text-xl font-semibold text-gray-500'>
            Secondbrain shared by {user}
        </div>
        <div className='flex flex-wrap gap-4  mx-auto'>
            {contents.map((content, idx)=>{ return <Card key={idx} title={content.title} link={content.link} type={content.type} hideIcon={true} />})}
        </div>
    </div>
  )
}

export default Shared