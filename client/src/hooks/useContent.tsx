import { useEffect, useState } from "react"
import userAPI from "../api/userApi";
import { useAuth } from "../context/AuthContext";

const useContent = () => {
  const [contents, setContents] = useState([]);
    const {setIsLoading} = useAuth();

    const fetchData= async ()=>{
        setIsLoading(true);
        await userAPI.fetchContent()
        .then((response) => {
            setContents(response.content || []);
            setIsLoading(false);
            })
        .catch((error) => {
        console.error("Failed to fetch content:", error);
        setContents([]);
    }) 
    }

    useEffect(()=>{
        fetchData();
        const interval=setInterval(()=>{
            fetchData();            
        }, 10 * 10000)

        return ()=>{
            clearInterval(interval);
        }

    },[])

  return {contents};
}

export default useContent