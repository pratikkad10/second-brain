import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isLoggedIn, logout,  } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="h-screen w-screen flex justify-center flex-col bg-custom-light-100">
      <div className="text-center rounded-md bg-custom-light-200 w-82 mx-auto py-6 shadow-md border-slate-400">
        <h1 className="text-gray-500 text-xl ">Welcome to Secondbrain...</h1>

        <div className="flex flex-col gap-2 items-center">
          {
            isLoggedIn ? <div className="flex p-4 gap-4 items-center justify-center">
              <Button variant="secondary" text="Dahsboard" size="md" onClick={() => navigate('/dashboard')} />
              <Button variant="danger" text="Logout" size="md" onClick={()=>logout()} />
              </div> :
              (<div className="flex p-4 gap-4 items-center justify-center">
                <Button variant="secondary" text="signin" size="md" onClick={() => navigate('/login')} />
                <Button variant="secondary" text="signup" size="md" onClick={() => navigate('/signup')} />
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Home