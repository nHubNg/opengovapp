import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Comment from "../components/comment";
import logo from "../assets/logo.png";

import { getLikeCount } from "../redux/feed/feed-comp";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "react-tabs/style/react-tabs.css";

import jwt_decode from "jwt-decode";


import { Link, useNavigate } from "react-router-dom";
import glogo from "../assets/open-global.png";

import { useForm } from "react-hook-form";

const SocialSection = ({
  feed,
  feedId,
  handleCommentToggle,
  setisActiveComment,
  activeComment,
}) => {
  const dispatch = useDispatch();

  const { isLoadingGC, likeCount, commentsdata, unLikeCount } = useSelector(
    (state) => state.feed
  );
  
  const token = localStorage.token;
  const decoded =
    token === "undefined" || token === undefined ? "" : jwt_decode(token);

    console.log( decoded );

  return (
    <div className="social pt-6 text-sm flex items-center justify-between">
     <div className="flex">
     <div className="">
        {likeCount == null ? (
          <Link
            onClick={() =>
              setisActiveComment({
                id: feed._id,
                type: "liking",
              })
            }
            to=""
            className="text-md flex"
          >
            {" "}
            <i className=" text-gray-400 hover:text-blue-600  fa fa-thumbs-up "></i>{" "}
            <p className="pl-1 text-sm ">{feed.likeCount}</p>{" "}
          </Link>
        ) : (
          <Link
            onClick={() =>
              setisActiveComment({
                id: feed._id,
                type: "liking",
              })
            }
            to=""
            className="text-md flex"
          >
            <i className=" text-gray-400 hover:text-blue-600 fa fa-thumbs-up "></i>{" "}
            <p className="pl-1 text-sm ">
              {likeCount._id == feed._id ? likeCount.likeCount : feed.likeCount}
            </p>
          </Link>
        )}
      </div>
      
      <div className="pl-4 items-center">
        {unLikeCount == null ? (
          <Link
            onClick={() =>
              setisActiveComment({
                id: feed._id,
                type: "unliking",
              })
            }
            to=""
            className="text-md flex"
          >
            {" "}
            <i className=" text-gray-400 hover:text-blue-600  fa fa-thumbs-down "></i>{" "}
            <p className="pl-1 text-sm ">{feed.unLikeCount}</p>{" "}
          </Link>
        ) : (
          <Link
            onClick={() =>
              setisActiveComment({
                id: feed._id,
                type: "unliking",
              })
            }
            to=""
            className="text-md flex"
          >
            <i className=" text-gray-400 hover:text-blue-600 fa fa-thumbs-down "></i>{" "}
            <p className="pl-1 text-sm ">
              {unLikeCount._id == feed._id ? unLikeCount.unLikeCount : feed.unLikeCount}
            </p>
          </Link>
        )}
      </div>
     </div>

      <div className="flex text-md">
        <Link
          to=""
          className="text-primary pr-2 "
          onClick={() =>  handleCommentToggle(feed._id)}
        >
          <i class="fa fa-message text-priamry text-gray-400"></i>
        </Link>
        {commentsdata == null ||
        commentsdata == "undefined" ||
        commentsdata == undefined ? (
          <p>{feed.comments.length}</p>
        ) : (
          <div>
            {feed.comments.length < commentsdata.comments.length ? (
              <p>
                {commentsdata.feedId == feed._id || commentsdata._id == feed._id
                  ? commentsdata.comments.length
                  : feed.comments.length}
              </p>
            ) : (
              feed.comments.length
            )}
          </div>
        )}
      </div>

      <div className="text-md flex">
      
                            <i class="fa fa-share text-gray-400"></i> <div className="pl-2">0</div>
                    
      </div>
    </div>
  );
};

export default SocialSection;
