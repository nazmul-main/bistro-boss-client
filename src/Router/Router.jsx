import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Components/OurShop/OurShop";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "../Private/PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'ourShop/:category',
                element: <OurShop></OurShop>
            },
            {
                path: 'secret',
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            },

        ]
    },

    /* Sign in */
    {
        path: 'signin',
        element: <SignIn></SignIn>
    },
    /* Signup */
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },

    /* DashBoard */
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashBoard></DashBoard>
        </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },


            // Admin routes
            {
                path: 'allUser',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])