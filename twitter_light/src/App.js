import React , {useState , useEffect} from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";


function App() {
    // State
    const  [textInput , settextInput] = useState('');
    const [tweets , settweets] = useState([]);
    const [name , setName] = useState("Dev Elvin"); 

    useEffect(() => {
      console.log('We render the components');
    }, [textInput])
  // const [name , setName]  = useState('Dev Elvin')

  // const sayHelloHandler = () => {
  //   setName('Dev Ed')
  // }

  return (
    <div className="App">
      <h1>Twitter Light</h1>
      <CreateTweet settweets={settweets} settextInput={settextInput} textInput={textInput} tweets={tweets} />
      <TweetList settweets={settweets}  name={name} tweets={tweets}  />
      {/* <h1>Hello {name}</h1>
      <button onClick={sayHelloHandler}>Click Me</button> */}
    </div>
  );
}

export default App;
