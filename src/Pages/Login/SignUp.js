import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        signInError = <small><p className='text-red-700'>{error?.message || googleError}</p></small>
    }
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password);
    };
    if (googleUser) {
        console.log(googleUser);
    }
    return (
        <div className="justify-center h-screen items-center flex">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Enter Your Name</span>

                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name",
                                        {

                                            required: {
                                                value: true,
                                                message: "Name is required",
                                            }

                                        }
                                    )}

                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">
                                        {errors.name.message}</span>}


                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Email Address</span>

                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email",
                                        {

                                            required: {
                                                value: true,
                                                message: "Email is required",
                                            },
                                            pattern: {
                                                //Email Address Regex
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Please Enter a valid Email Address",
                                            }

                                        }
                                    )}

                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">
                                        {errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-700">{errors.email.pattern}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Enter Your Password</span>

                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered w-full max-w-xs"
                                    name='password'
                                    {...register("password",
                                        {

                                            required: {
                                                value: true,
                                                message: "Password is required",
                                            },
                                            pattern: {
                                                //Password Regex
                                                //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                                                // value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                                message: " Password must be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                                            }

                                        },
                                    )}

                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-700">
                                        {errors.password.message}</span>}
                                    {/* {errors.password?.type === 'pattern' && <p role="alert"> <span className="label-text-alt text-red-700">
                                        {errors.password.message}</span></p>} */}
                                </label>
                            </div>
                            <div>
                                {signInError}
                                <input className='btn w-full max-w-xs' type="submit" value="Sign Up" /></div>
                        </form>
                        <p><small>Already Have an Account? <Link className='text-primary' to="/login">Login</Link></small></p>
                    </div>
                    <div className='divider'>OR</div>
                    <div onClick={() => signInWithGoogle()} className='btn btn-outline'>Continue With Google</div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;