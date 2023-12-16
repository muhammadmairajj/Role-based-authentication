import { Navigate } from "react-router-dom"
import { authService } from "../services/authService"


// PrivateRoute === UserRoute
export const PrivateRoute = ({children}) => {
    
   return authService.isLoggedIn() ? children : <Navigate to="/login" />
}