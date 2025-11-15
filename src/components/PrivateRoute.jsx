import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, NavLink, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location.pathname);
    
    const {loading,user} = useContext(authContext)
    if(loading) {
        return <p>Loading....</p>
    }
    if(!user) return <Navigate state={{from : location.pathname}} to='/login'></Navigate>
    return children;
};


export default PrivateRoute;