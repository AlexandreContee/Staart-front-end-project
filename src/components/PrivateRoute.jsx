import { Navigate } from "react-router-dom"
import { useAuth } from "../context"

export const PrivateRoute = ({ children }) => {
  const {currentUser} = useAuth()

  if (!currentUser) {
    return <Navigate to={'/login'} replace />
  }

  return children
}
