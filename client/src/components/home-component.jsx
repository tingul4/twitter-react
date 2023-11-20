import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PostTweetComponent from './post-tweet-component'
import AllTweetsComponent from './all-tweets-component';
import AuthService from '../services/auth-service';

const HomeComponent = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const testToken = async () => {
      const result = await AuthService.testToken();
      if (!result.success) {
        navigate('/login')
      }
    }
    testToken()
  })
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
