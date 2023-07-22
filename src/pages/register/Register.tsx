import { useState } from 'react';
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import useAuth from '../../hooks/useAuth'
const imageToken = import.meta.env.VITE_IMAGE_TOKEN

const Register = () => {
        const { register, handleSubmit, formState: { errors } } = useForm();
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const auth = useAuth();
        const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`

        const onSubmit = (data: any) => {
                setError('');
                const password = data.password;
                const confirm = data.confirmPass;
                const name = data.name;
                const email = data.email;
                const formData = new FormData();
                formData.append('image', data.photo[0]);

                if (password !== confirm) {
                        return setError('password not matched');
                }

                auth?.createUser(data.email, data.password)
                        .then(() => {
                                fetch(imageHostingUrl, {
                                        method: 'POST',
                                        body: formData
                                })
                                        .then(res => res.json())
                                        .then(imgResponse => {
                                                if (imgResponse.success) {
                                                        const imgURL = imgResponse.data.display_url;
                                                        auth?.updateUserProfile(data.name, imgURL)
                                                                .then(() => { })
                                                                .catch(() => { })
                                                }
                                        })
                        })
                        .catch(() => {
                                setError('something wrong, try again')
                        })
        };

        const [show, setShow] = useState(false);
        return (
                <div className="hero min-h-screen">
                        <div className="hero-content flex-col md:w-2/4">
                                <div className="text-center">
                                        <h1 className="text-5xl font-bold">Register now!</h1>
                                </div>
                                <p className='text-red-600 text-center text-xl'>{error}</p>
                                <div className="card flex-shrink-0 w-full relative shadow-2xl bg-base-100">
                                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                                <div className="flex items-center">
                                                        <>Name</>
                                                        <> {errors.name?.type === 'required' && <p className="register-alert">required</p>}</>
                                                </div>
                                                <input
                                                        type="text"
                                                        {...register("name", {
                                                                required: true
                                                        })}
                                                        placeholder="email"
                                                        className="input input-bordered"
                                                        aria-invalid={errors.name ? "true" : "false"}
                                                />

                                                <div className="flex items-center">
                                                        <>Email</>
                                                        <>{errors.email?.type === 'required' && <p className="register-alert">required</p>}</>
                                                </div>
                                                <input
                                                        type="email"
                                                        {...register("email", {
                                                                required: true
                                                        })}
                                                        placeholder="email"
                                                        className="input input-bordered"
                                                        aria-invalid={errors.email ? "true" : "false"}
                                                />

                                                <div className="flex items-center">
                                                        <>Password</>
                                                        <>
                                                                {errors.password?.type === 'required' && <p className="register-alert">required</p>}
                                                                {errors.password?.type === 'minLength' && <p className="register-alert">at least 6 digit</p>}
                                                                {errors.password?.type === 'pattern' && <p className="register-alert">need a special & capital character</p>}
                                                        </>
                                                </div>
                                                <input
                                                        type={show ? 'text' : 'password'}
                                                        {...register("password", {
                                                                pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                                                required: true,
                                                                minLength: 6
                                                        })}
                                                        placeholder="password"
                                                        className="input input-bordered"
                                                        aria-invalid={errors.password ? "true" : "false"}
                                                />


                                                <div>
                                                        <>Confirm Password</>
                                                </div>
                                                <input
                                                        type={show ? 'text' : 'password'}
                                                        {...register("confirmPass")}
                                                        placeholder="confirm password"
                                                        className="input input-bordered"
                                                />

                                                <div className="flex items-center">
                                                        <>Photo URL</>
                                                        <>{errors.photo?.type === 'required' && <p className="register-alert">required</p>}</>
                                                </div>
                                                <input
                                                        type="file"
                                                        {...register("photo", {
                                                                required: true
                                                        })}
                                                        placeholder="photo URL"
                                                        className="file-input file-input-bordered file-input-accent w-full"
                                                        aria-invalid={errors.photo ? "true" : "false"}
                                                />


                                                <div className='form-control mt-4'>
                                                        <button className="btn btn-primary">
                                                                <input type="submit" value="Register" />
                                                        </button>
                                                </div>
                                        </form>
                                        <div className='px-8'><SocialLogin></SocialLogin></div>
                                        <button onClick={() => setShow(!show)} className='absolute right-10 top-[253px]'>
                                                {
                                                        show ? <BsEyeFill size={20}></BsEyeFill> :
                                                                <BsEyeSlashFill size={20}></BsEyeSlashFill>
                                                }
                                        </button>
                                        <p className='text-center'>Have a account ? <button className='btn btn-link'><Link to='/login'>login</Link></button> </p>
                                </div>
                        </div>
                </div>
        );
};

export default Register;