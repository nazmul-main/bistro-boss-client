/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogin = () => {

    const navigate = useNavigate()
    const {googleLogin} = useAuth()
    const axiosPublic = useAxiosPublic()


    const handleSocialLogin = () => {

        googleLogin()
            .then(res => {
                console.log(res.user);
                const userInfo ={
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/api/v1/users', userInfo)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "SignUp  successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/')
                })
               

            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "something wrong happened",
                    showConfirmButton: false,
                    timer: 1500
                });

            });
    }



    return (
        <>
            <div className="w-8/12 mx-auto">
                <div className='divider '>Countinew With</div>
                <div>
                <button onClick={handleSocialLogin} type="button" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-200">Sign in with Google</button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;