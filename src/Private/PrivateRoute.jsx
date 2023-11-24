import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className=" flex items-center justify-center min-h-screen">
            <h2 className="md:text-4xl py-24 text-orange-700 ">Loading...</h2></div>
    }
    if (user) {
        return (children)
    } else {
        return <Navigate to='/signin' state={{from: location}}></Navigate>
    }
};

export default PrivateRoute;