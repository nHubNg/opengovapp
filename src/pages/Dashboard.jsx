import Navbar from "../components/Navbar";

import { React, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { createFeed, getFeeds } from "../redux/feed/feed-comp";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Spinner } from "react-bootstrap";

import feedReducer from "../redux/feed/feedSlice";

import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import glogo from "../assets/open-global.png";

const UserDashboard = () => {
  toast.configure();

  const navigate = useNavigate();

  const { clearState } = feedReducer.actions;

  const {
    isLoading,
    isError,
    isSuccessCreate,
    feeds,
  } = useSelector((state) => state.feed);
  const [showModal, setShowModal] = useState(false);

  const [mediaFile, setMediaFile] = useState("");

  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  
  const formatter = (date) =>{
  return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
  }

  const onSubmit = async (request) => {
    const data = new FormData();
    data.append("file", mediaFile);
    data.append("upload_preset", "nhubnigeria");
    data.append("cloud_name", "nhubnacademy");
    const response = await fetch(
      "  https://api.cloudinary.com/v1_1/nhubnacademy/image/upload",
      {
        method: "post",
        body: data,
      }
    );

    let result = await response.json();

    const spoons = {
      feed_title: request.feed_title,
      feed_description: request.feed_description,
      tag: request.tag,
      feed_media: result.secure_url,
    };
    
    await dispatch(createFeed(spoons)); 
    
    if (isSuccessCreate) {
      console.log("sjjshshshjshjs")
      toast.success("Feed was created successfully!");
      setShowModal(false);
      dispatch(getFeeds());
      dispatch(clearState());

    }

  };

  useEffect(() => {
  }, []);



  useEffect(() => {
    
    dispatch(getFeeds());

    if (isSuccessCreate) {
      console.log("sjjshshshjshjs")
      toast.success("Feed was created successfully!");
      setShowModal(false);
      dispatch(getFeeds());
      dispatch(clearState());

    }
    if (isError) {
      toast.error("There was an error, Try again later!");
      dispatch(clearState());
    }
  }, [isError, isSuccessCreate]);

  return (
    <div className="wrapper">
      <header>
        <nav className=" ">
          <div className="first-nav flex justify-between mx-48  py-4 bg-white">
            <div className="logo items-center flex ">
              <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" />
              <img class="block w-8 h-8 " src={logo} alt="Workflow" />

              <h1 className="font-extrabold text-secondary text-xl">
                pen
                <span className="text-primary text-center mt-auto">
                  Governmnet Partnership
                </span>
              </h1>
            </div>

            <div class="hidden sm:block sm:ml-6 pt-1 pl-3">
              <div class="flex space-x-4">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-48 pt-2">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                      <input
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-white bg-primary bg-clip-padding border border-solid border-primary rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  class="text-white rounded-lg  text-sm font-semibold  hover:text-secondary px-2 py-2 "
                >
                  <i class="fa-solid fa-bell w-10 fa-3x text-primary  text-sm w- text-center mx-auto py-2 px-3"></i>
                </a>

                <a
                  href="#"
                  class=" text-primary rounded-lg pt-4   text-md font-semibold  hover:text-secondary "
                  onClick={() => setShowModal(true)}
                >
                  <i class="fa-solid fa-plus pr-2 fa-3x text-primary  text-sm w- text-center mx-auto "></i>
                  Create Feed
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="content pt-20 mx-40">
          {isLoading ? (
            <div className="spiner w-1/4 mx-auto py-40">
              <svg
                role="status"
                class="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
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
            </div>
          ) : (
            
            <div>
          
          {
            
          false ? (<h1 className="text-center pt-20 text-gray-500">No feeds or internet, please refresh your network</h1>) :
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {
               
                feeds.map((feed) => (
                  <div className=" ">
                    {
                      <div className="img">
                        <img className="rounded-t-lg" src={feed.feed_media} alt="" />
                      </div>
                    }
                    <div className=" bg-white py-4 mb-10 shadow-2xl shadow- rounded-lg   p-4 flex flex-col justify-between leading-normal">
                      <div className="mb-4">
                        <p className="text-xs text-gray-600 flex items-center">
                          <svg
                            className="fill-current text-gray-500 w-3 h-3 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                          </svg>
                          {feed.tag}
                        </p>
                        <div className="text-primary capitalize font-bold text-lg mb-2">
                          {feed.feed_title}
                        </div>
                        <p className="text-gray-700 text-sm w-2/4">
                          {feed.feed_description}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="w-10 h-10 rounded-full mr-4"
                          src={logo}
                        />
                        <div className="text-sm">
                          <p className="text-gray-900 pb-2 leading-none">
                          </p>
                          <p className="text-gray-600  ">{feed.createdAt}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
}</div> 
          )}
        </div>
      </header>

      {/* feed creation modal section starts */}

      <>
        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
              <div className="relative p-3 w-full max-w-2xl h-full md:h-auto">
                <div className="border-0 rounded-lg drop-shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                    <h6 className="text-xl font=semibold">Create new feed</h6>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                        <i
                          class="fa-solid fa-circle-xmark"
                          style={{ color: "#034B5A" }}
                        ></i>
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* feed title and Thematic areas */}
                      <div className="flex">
                        <div className="flex-auto w-80">
                          <label
                            for="small-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Feed Title
                          </label>
                          <input
                            type="text"
                            id="small-input"
                            class="block p-2 w-fit text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Title"
                            name="feed_title"
                            {...register("feed_title")}
                          />
                        </div>

                        <div className="flex-auto w-80">
                          <label
                            for="small-input"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Feed Theme
                          </label>
                          <select
                            class="form-select appearance-none block w-full p-2 font-light text-sm text-gray-900 bg-gray-50 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="feed thematic area"
                            {...register("tag")}
                            name="tag"
                          >
                            <option selected disabled>
                              Select feed thematic area
                            </option>
                            <option value="Gender equality">
                              Gender equality
                            </option>
                            <option value="Fiscal transparency">
                              Fiscal transparency
                            </option>
                            <option value="Citizens engagement">
                              Citizens engagement
                            </option>
                            <option value="Extractive transparency">
                              Extractive transparency
                            </option>
                            <option value="Peace and Security">
                              Peace and Security
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* feed Description */}
                      <div className="mt-6">
                        <label
                          for="message"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Feed Description
                        </label>
                        <textarea
                          id="feed_description"
                          rows="4"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Description..."
                          name="feed_description"
                          {...register("feed_description")}
                        ></textarea>
                      </div>

                      {/* feed medias */}
                      <div className="flex items-end justify-between my-7">
                        <div>
                          <label
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            for="user_avatar"
                          >
                            Feed Media
                          </label>
                          <input
                            class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            aria-describedby="feed_media_help"
                            id="feed_media"
                            type="file"
                            onChange={(event) =>
                              setMediaFile(event.target.files[0])
                            }
                            name="feed_media"
                          />
                        </div>

                        <div>
                          <a
                            href="#"
                            class=" text-primary rounded-lg pt-4 text-md font-semibold"
                          >
                            <i class="fa-solid fa-plus pr-2 text-primary  text-sm w- text-center "></i>
                            add file
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="text-white bg-primary active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                          type="submit"
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
                            "Create"
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>

      {/* feed creation modal section ends */}
    </div>
  );
};

export default UserDashboard;
