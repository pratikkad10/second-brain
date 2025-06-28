import { useRef } from "react"
import { Button } from "../components/ui/Button"
import Input from "../components/ui/Input"
import userAPI from "../api/userApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();
    const signupHandler=async ()=>{
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (!username || !password) {
            return;
        }
        try {
            const response = await userAPI.signup({ username, password });
            console.log(response);
            
            if (usernameRef.current) {
                usernameRef.current.value = '';
            }
            if (passwordRef.current) {
                passwordRef.current.value = '';
            }

            navigate('/login');
        } catch (error) {
            console.error("Signup failed:", error);
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center flex-col">
            <div className="flex flex-col items-center justify-center rounded-md bg-custom-light-200 w-92 mx-auto p-4">
                <h1 className="text-gray-500 text-xl mb-4">Create Account</h1>

                <div className="flex flex-col gap-2 items-center">
                    <Input reference={usernameRef} placeholder="username" name="username" type="text" size="md" />
                    <Input reference={passwordRef} placeholder="password" name="password" type="password"size="md"/>
                    <Button text="Signup" variant="primary" size="md" onClick={signupHandler} />
                </div>
            </div>
        </div>
    )
}

export default Signup