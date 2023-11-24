import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const SignIn = () => {
    const backgroundImageUrl = "https://i.ibb.co/YPBbj7c/Rectangle-75.png";
    const [isDisabled, setIsDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()


    const from =  location.state?.from?.pathname || '/'
    console.log(from);



    /* Load captcha */
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "signin  successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace:true});
            })
    };

    /* handleValidateCaptcha */
    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        setIsDisabled(!validateCaptcha(userCaptchaValue));
    };

    return (
        <>
            <Helmet>
                <title>Bristo | SignIn</title>
            </Helmet>
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className="flex items-center shadow-2xl md:w-10/12 mx-auto gap-12 shadow-[#969696]" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div>
                        <img className="" src="https://i.ibb.co/wwvf7HZ/authentication2-1.png" alt="" />
                    </div>
                    <div className="w-full py-8">
                        <h2 className="text-4xl text-center font-semibold">Sign In</h2>
                        <form onSubmit={handleSignIn} className="w-8/12 mx-auto space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email" name="email" className="py-3 px-3 w-full" placeholder="Type Here" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                                <input type="password" name="password" className="py-3 px-3 w-full" placeholder="••••••••" required />
                            </div>
                            <div>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="py-3 px-3 w-full" placeholder="Type captcha" required />
                                <label className="text-blue-600 block mt-4 text-sm font-medium">
                                    <LoadCanvasTemplate />
                                </label>
                            </div>
                            <input disabled={isDisabled} className={`bg-[#D1A054] w-full py-3 text-white font-semibold  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointerK   '}`} type="submit" value="Sign In" />
                        </form>
                        <p className='text-center'><small> New Here? <Link className='text-blue-600' to='/signup'>Cereate an Account </Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                   
                </section>
            </div>
        </>
    );
};

export default SignIn;
