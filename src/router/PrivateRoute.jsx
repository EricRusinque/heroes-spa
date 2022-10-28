import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context"

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('LastPath', lastPath);

    

    return (logged)
    ? children
    : <Navigate to="heroes-spa/login"/>
}