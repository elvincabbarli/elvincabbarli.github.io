import React from "react";
import Tweet from "./Tweet";

function TweetList({ name, tweets, settweets }) {
  return (
    <div className="tweetList">
      {tweets.map((tweet) => (
        <Tweet
          settweets={settweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
        />
      ))}
      {/* <button onClick={()=> setName("John")}>Click</button> */}
    </div>
  );
}

export default TweetList;
