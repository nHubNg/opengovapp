import {React, useEffect, useState} from 'react';

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/auth-comp";

import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Spinner } from "react-bootstrap";

import authReducer from "../redux/auth/authSlice";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  
  toast.configure()

  const navigate = useNavigate();
  
  const {clearState} = authReducer.actions;


  const { isLoading, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.user
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required"),
  });
  const dispatch = useDispatch();
  const { register, formState: { errors}, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    
    
    
     await dispatch(loginUser(data));
   
  };
  
  useEffect(() => {
    if (isSuccess) {
      navigate('/dashboard')
      toast.success("Login Successfully");

    }
    if (isError) {
      if(errorMessage.msg){
        toast.error(errorMessage.msg);
      }
      if(errorMessage.email){
        toast.error(errorMessage.email);
      }
      if(errorMessage.password){
        toast.error(errorMessage.password);

      }
    }
  }, [isSuccess, isError, errorMessage]);

  

  return (
    <div className="form">
    {console.log(errorMessage)}
      <form
        action=""
        className="w-full max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="md:items-start mb-8">
          <div class="">
            <label
              class="block text-white text-sm  font-light  mb-1 md:mb-0 pr-4 uppercase"
              for="inline-full-name "
            >
              Email
            </label>
          </div>
          <div class="w-full pt-4">
            <input
             							class='bg-primary text-white appearance-none rounded-md mb-2  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'

              id="inline-full-name"
              name="emai"
              {...register("email", {required: true})}
              type="text"
            />
            {errors.email && <span className="text-xs text-secondary pt-4 ">This field is required</span>}

          </div>
        </div>

        <div class="md:items-start mb-8">
          <div class="">
            <label
              class="block text-white  text-sm font-light uppercase  mb-1 md:mb-0 pr-4"
              for="inline-full-name "
            >
              Password
            </label>
          </div>
          <div class="w-full pt-4">
            <input
              							class='bg-primary appearance-none  text-white rounded-md mb-2  border border-gray-500  w-full py-3 px-4 text-primary leading-tight focus:outline-none focus:bg-primary focus:border-secondary'

              id="inline-full-name"
              type="password"
              name="password"
              {...register("password", {required: true})}
            />
           {errors.password && <span className="text-xs text-secondary  ">This field is required</span>}

          </div>
        </div>

        <div className="remember-section pt- flex justify-between">
          <div className="remember-me flex justify-between">
            <div className="bg-secondary h-4 w-4 rounded-sm mt-1">
              <input
                className="bg-secondary invisible rounded-md  pt-4"
                type="checkbox"
                checked
                name=""
                id=""
              />
            </div>
            <p className="text-white pl-4 text-sm ">Remember me</p>
          </div>
          <div className="forg-pswd">
            <p className="hover:underline hover:underline-offset-6">
              <a href="" className="text-secondary text-sm font-light">
                Forgot Password
              </a>
            </p>
          </div>
        </div>

        <div className="submit-btn mt-14">
          <button
            type="submit"
            class="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 uppercase rounded-md w-full"
          >
            {isLoading ? (
              <svg
                role="status"
                class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
      <div className="divide-section flex mt-12"></div>
      <div className="social-icons flex w-2/4 text-center mx-auto justify-between">
        <div className="facebook border rounded-full border-secondary w-10 h-10">
          <a href=" " className="text-secondary  text-center mx-auto">
            <i class="fa-brands fa-facebook-f text-center mx-auto py-2 px-3"></i>
          </a>
        </div>
        <div className="google border rounded-full border-secondary w-10 h-10">
          <a href="">
            <i class="fa-brands fa-google text-secondary text-sm w- text-center mx-auto py-2 px-3"></i>
          </a>
        </div>
      </div>
      <div className="footer mt-8">
        <h1 className="text-white text-center tracking-wide ">
          Don’t have an account? <a className="text-secondary">Register</a>
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
