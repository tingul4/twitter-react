import React from 'react'
// import { useNavigate } from "react-router-dom";
import PostTweetComponent from './post-tweet-component'
import AllTweetsComponent from './all-tweets-component';

const HomeComponent = () => {
  // const navigate = useNavigate()
  return (
    <div
      style={{ position: "absolute", left: "332px", width: "641px" }}
      className="border"
    >
      <PostTweetComponent />
      <AllTweetsComponent />
    </div>
  );
}

export default HomeComponent
