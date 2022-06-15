import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function CreateTweet({tweets , settextInput , settweets , textInput}) {


  // Functions
  const userTweetHandler = (e)=> {
    settextInput(e.target.value)
    // console.log(e.target.value);
  }

  const tweetsHandler = (e) => {
    e.preventDefault();
    settweets([...tweets , {message: textInput , id: uuidv4()}])
    settextInput('')
  }


  return (
    <form  onSubmit={tweetsHandler}> 
        <textarea placeholder='Write Your Twitt Here' value={textInput} onChange={userTweetHandler} cols="50" rows="5"></textarea>
        <br />
        <button type="submit">Send UI</button>
        {/* <h1 onClick={()=> settextInput('')}>{userInput}</h1> */}
    </form>
  )
}

export default CreateTweet