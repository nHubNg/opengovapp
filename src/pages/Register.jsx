
import {React, useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../redux/auth/auth-comp";

import { Spinner } from "react-bootstrap";

import { toast } from "react-toastify";

import authReducer from "../redux/auth/authSlice";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const navigate = useNavigate();
	const { clearState } = authReducer.actions;

	const { isLoading, isErrorR, isRegistered, errorMessage, successMessage } = useSelector(
		(state) => state.user
	);

	const validationSchema = Yup.object().shape({
		email: Yup.string().required("Email is required").email("Email is invalid"),
		password: Yup.string().required("Password is required"),
	});
	const dispatch = useDispatch();
	const { register, formState: { errors }, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
		try {
			await dispatch(registerUser(data));
      

		} catch (e) {}
	};


  useEffect(() => {
    if (isRegistered) {
      toast.success(successMessage);
    }
    if (isErrorR) {
      if(errorMessage.msg){
        toast.error(errorMessage.msg);
      
      }
      
      if(errorMessage.errors.email !== undefined){
        toast.error(errorMessage.errors.email);

      }
      if(errorMessage.errors.password !== undefined){
        toast.error(errorMessage.errors.password  );
      }
      if(errorMessage.errors.phone !== undefined){
        toast.error(errorMessage.errors.phone);
      }

      if(errorMessage.errors.password2 !== undefined){
        toast.error(errorMessage.errors.password2);
        
      }

      if(errorMessage.errors.gender !== undefined){
        toast.error(errorMessage.errors.gender);
      }
      
    }
  }, [isRegistered, , errorMessage, ]);
  
  

	return (
		<div className='form'>
			<form action='' className='w-full' onSubmit={handleSubmit(onSubmit)}>
				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase'
							for='inline-full-name '
						>
							First Name
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none rounded-md text-white  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							type='text'
							name='first_name'
							{...register("first_name", {required: true})}
              
						/>
                        {errors.first_name && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase'
							for='inline-full-name '
						>
							Last Name
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none rounded-md text-white  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							type='text'
							name='last_name'
							{...register("last_name", {required: true})}
						/>
                        {errors.last_name && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase'
							for='inline-full-name '
						>
							Email
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none rounded-md text-white  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							type='text'
							name='email'
							{...register("email", {required: true})}
						/>
                        {errors.email && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div className='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4'
							for='inline-full-name '
						>
							Gender
						</label>
					</div>

					<div class='w-full pt-4'>
						{/* <select
							class='form-select bg-primary appearance-none text-white block w-full text-white p-2 py-3 font-light text-sm   bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded-md  transition ease-in-out m-0 focus:text-white focus:bg-primary focus:border-gray-500 focus:outline-none'
							aria-label='feed thematic area'
							{...register("gender", { required: true })}
							name='tag'
						>
							<option selected disabled className='text-white'>
								Gender
							</option>
							<option className='text-white' value='male'>Male</option>

							<option className='text-white' value='female'>Female</option>
						</select> */}

<select
                            	class='form-select bg-primary appearance-none text-white block w-full text-white p-2 py-3 font-light text-sm   bg-clip-padding bg-no-repeat border border-solid border-gray-500 rounded-md  transition ease-in-out m-0 focus:text-white focus:bg-primary focus:border-gray-500 focus:outline-none'
                            aria-label="feed thematic area"
                            {...register("gender", {required: true})}

                            name="gender"
                          >
                            <option selected disabled className="text-gray-900" >
                             Select Gender
                            </option>
                           
                            <option value="female">
                             Female
                            </option>
                            <option value="male">
                              Male
                            </option>
                           
                          </select>
            {errors.gender && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4'
							for='inline-full-name '
						>
							Phone
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none rounded-md text-white  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							name='phone'
							{...register("phone", {required: true})}
							type='text'
						/>
                        {errors.phone && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4'
							for='inline-full-name '
						>
							Password
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none text-white rounded-md  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							type='password'
							name='password'
							{...register("password", {required: true})}
						/>
                        {errors.password && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div class='md:items-start mb-4'>
					<div class=''>
						<label
							class='block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4'
							for='inline-full-name '
						>
							Confirm Password
						</label>
					</div>
					<div class='w-full pt-4'>
						<input
							class='bg-primary appearance-none text-white rounded-md  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'
							id='inline-full-name'
							type='password'
							name='password2'
							{...register("password2", {required: true})}
						/>
                        {errors.password2 && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

					</div>
				</div>

				<div className='submit-btn mt-8'>
					<button class='bg-secondary hover:secondary text-white font-bold py-2 px-4 uppercase rounded-md w-full'>
						{isLoading ? (
							<svg
								role='status'
								class='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary'
								viewBox='0 0 100 101'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
									fill='currentColor'
								/>
								<path
									d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
									fill='currentFill'
								/>
							</svg>
						) : (
							"Register"
						)}
					</button>
				</div>
			</form>
			<div className='divide-section flex mt-12'></div>
			<div className='social-icons flex w-2/4 text-center mx-auto justify-between'>
				<div className='facebook border rounded-full border-secondary w-10 h-10'>
					<a href=' ' className='text-secondary  text-center mx-auto'>
						<i class='fa-brands fa-facebook-f text-center mx-auto py-2 px-3'></i>
					</a>
				</div>
				<div className='google border rounded-full border-secondary w-10 h-10'>
					<a href=''>
						<i class='fa-brands fa-google text-secondary text-sm w- text-center mx-auto py-2 px-3'></i>
					</a>
				</div>
			</div>
			<div className='footer mt-8'>
				<h1 className='text-white text-center tracking-wide '>
					Already have an account? <a className='text-secondary'>Sign In</a>
				</h1>
			</div>
		</div>
	);
};

export default RegisterPage;
