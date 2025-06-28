import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Shared from "./pages/Shared"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/api/v1/user/:shareId" element={<Shared />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App