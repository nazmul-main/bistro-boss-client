import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList,  FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    // const { isAdmin } = useAdmin();
    const isAdmin = true
    console.log(isAdmin);



    return (
        <div className="flex max-w-screen-xl mx-auto px-4 gap">
            {/* dashboard side bar */}
            <div className="w-2/12 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to={"/dashboard/adminHome "}>
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/addItems"}>
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink to={"/dashboard/manageItem"}>
                                    <FaBook></FaBook>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/allUser"}>
                                    <FaUsers></FaUsers>
                                    All User</NavLink>
                            </li>
                           
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to={"/dashboard/ueserHome "}>
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/cart"}>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart</NavLink>
                                </li>

                                <li>
                                    <NavLink to={"/dashboard/reservation"}>
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/review"}>
                                        <FaAd></FaAd>
                                        Add review</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/dashboard/myBookings"}>
                                        <FaList></FaList>
                                        my booking</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/menu"}>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="w-10/12 bg-gray-50">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;