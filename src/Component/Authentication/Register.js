import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });

  };



  if (user) {
    navigate('/myHome')
  }

  if (loading || updating) {
    return <Loading></Loading>
  }

  let signInError;

  if (error || updateError) {
    signInError = <p className='text-red-500'>{error.message}</p>

  }
  return (
    <div>
      <div className='flex justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>

                </label>
                <input type="name" placeholder="Name" className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: 'name is required'
                    }
                  })}

                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.massage}</span>}


                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>

                </label>
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      massage: 'email is required'
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      massage: 'Provide a valid email'
                    }
                  })}

                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.massage}</span>}


                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>

                </label>
                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'six chareacter '
                    }
                  })}

                />
                <label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}


                </label>
              </div>

              {signInError}


              <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
            </form>

            <p><small>Already have an account <Link
              className='text-primary' to="/logIn">Log in Account</Link></small></p>







          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;