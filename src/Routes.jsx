import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import { PrivateRoute } from "./components/PrivateRoute"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={
        <div>
          <h1>Ops! Rota não encontrada!</h1>
        </div>
      } />
    </Routes>
  )
}

export default AppRoutes
