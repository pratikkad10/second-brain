import { useRef } from "react";
import userAPI from "../api/userApi";
import { Button } from "../components/ui/Button"
import Input from "../components/ui/Input"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signin = () => {

    const { setIsLoggedIn } = useAuth();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();
    const signinHandler=async ()=>{
        setIsLoggedIn(false);
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (!username || !password) {
            return;
        }
        try {
            const response = await userAPI.signin({ username, password });
            localStorage.setItem("token", response.token);
            setIsLoggedIn(true);
            if (usernameRef.current) {
                usernameRef.current.value = '';
            }
            if (passwordRef.current) {
                passwordRef.current.value = '';
            }

            navigate('/dashboard');
        } catch (error) {
            setIsLoggedIn(false);
            console.error("Signup failed:", error);
        }
    }
    return (
        <div className="h-screen w-screen flex justify-center flex-col">
            <div className="flex flex-col items-center justify-center rounded-md bg-custom-light-200 w-92 mx-auto p-4">
                <h1 className="text-gray-500 text-xl mb-4">Welcome back</h1>

                <div className="flex flex-col gap-2 items-center">
                    <Input reference={usernameRef} placeholder="username" name="username" type="text" size="md" />
                    <Input reference={passwordRef} placeholder="password" name="password" type="password" size="md" />

                    <Button text="Signin" variant="primary" size="md" onClick={signinHandler} />
                </div>
            </div>
        </div>
    )
}

export default Signin