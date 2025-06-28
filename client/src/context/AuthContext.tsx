import { createContext, useContext, useState, ReactNode } from 'react';
import userAPI from '../api/userApi';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

    const logout = async()=>{
        const response=await userAPI.logoutUser();
        console.log('logout', response);
        
        if(response.success === true){
            localStorage.removeItem('token');
            console.log("token removed");
            
        }
    }
  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, setIsLoading, setIsLoggedIn, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};