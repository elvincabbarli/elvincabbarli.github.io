import React , {useState , useEffect} from "react";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import youtube from "./components/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("car music");
  }, []);

  const onTermSubmit = async (term) => {
    // api ile melumat almaq asinkron bir islem oldugu ucun asyn await den istifade edirik
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    selectedVideo(response.data.items[0]);
  };


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={(video) =>  setSelectedVideo(video)} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
