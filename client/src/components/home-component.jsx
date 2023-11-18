import React from 'react'
// import { useNavigate } from "react-router-dom";
import PostTweetComponent from './post-tweet-component'
import AllTweetsComponent from './all-tweets-component';

const HomeComponent = () => {
  // const navigate = useNavigate()
  return (
    <>
      <PostTweetComponent />
      <AllTweetsComponent />
    </>
  );
}

export default HomeComponent
