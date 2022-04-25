import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { likePost } from "../redux/feed/feed-comp";



const UnLikeSection = ({ feedId, activeComment }) => {
  const dispatch = useDispatch();

  const {
    isLoadingGC,
    commentsdata,
  } = useSelector((state) => state.feed);

  const isReplying =
    activeComment &&
    activeComment.type === "unliking" &&
    activeComment.id == feedId;
    
  useEffect(() => {
   if(isReplying){
    dispatch(
      likePost({
        id: feedId,
      })
    );
    console.log(isReplying)
   }
  }, [isReplying]);


};

export default UnLikeSection;
