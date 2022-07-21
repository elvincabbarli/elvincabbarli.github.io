import React from 'react';
import '../styles/Tweet.scss';

function Tweet({name,tweet,settweets ,tweets}) {
  const deleteTweet = () => {
    settweets(tweets.filter((state) => state.id !== tweet.id))
  }
  return (
    <div className='tweet'>
        <h2>{name}</h2>
        <h3>{tweet.message}</h3>
        <button onClick={deleteTweet}>Delete</button>
        <button>Like</button>
    </div>
  )
}

export default Tweet