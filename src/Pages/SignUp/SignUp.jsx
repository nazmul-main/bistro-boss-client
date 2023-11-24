import { Link, useNavigate, } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const backgroundImageUrl = "https://i.ibb.co/YPBbj7c/Rectangle-75.png";
    const { createUser, updateUaserPofile } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUaserPofile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo ={
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post('api/v1/users', userInfo)
                        .then(res => {
                            if(res.data.insertedId){
                                console.log('user added to the database successfully');
                                reset();
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "SignUp  successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        })
                       
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
    }





    return (
        <>
            <Helmet>
                <title>Bristo | SignUp</title>
            </Helmet>
            <div className="min-h-screen flex  items-center justify-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className="flex md:flex-row-reverse items-center shadow-2xl md:w-10/12 mx-auto gap-12 shadow-[#969696]" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div>
                        <img className="" src="https://i.ibb.co/wwvf7HZ/authentication2-1.png" alt="" />
                    </div>
                    <div className="w-8/12 py-8">
                        <h2 className="text-4xl text-center font-semibold">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    className="py-3 px-3 w-full"
                                    placeholder="Type Your Name" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    className="py-3 px-3 w-full"
                                    placeholder="Type Here" />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Photo URL</label>
                                <input
                                    type="text"
                                    {...register("phptoURL", { required: true })}
                                    className="py-3 px-3 w-full"
                                    placeholder="Photo URL" />
                                {errors.phptoURL && <span className="text-red-600">phptoURL is required</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                    {...register("password")} name="password"
                                    className="py-3 px-3 w-full"
                                    placeholder="••••••••" />
                                {errors.password && <span className="text-red-600">password is required</span>}
                            </div>

                            <input className='bg-[#D1A054] w-full py-3 text-white font-semibold' type="submit" value="SignUp" />
                        </form>
                        
                        <p className='text-center'><small> Already have acount <Link className='text-blue-600' to='/signin'>SignIn </Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                    
                </section>
            </div>
        </>
    );
};

export default SignUp;