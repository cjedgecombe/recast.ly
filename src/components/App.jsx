const { useState, useEffect } = React;

import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

var place = {
  id: {
    videoId: ''
  },
  snippet: {
    title: '',
    description: ''
  }
};


var App = () => {

  const [videoListState, setVideoListState] = useState([]);
  const [currentVideo, setNewVideo] = useState(place);

  var getYouTubeVideos = function (query) {
    searchYouTube(query, function (videos) {
      // console.log(videos);
      setVideoListState(videos);
      setNewVideo(videos[0]);
      //setNewVideo(videos.forEach(element => element));
    });
  };

  useEffect(() => { getYouTubeVideos('aaahhh'); }, [videoListState]);

  //note: setNewVideo to VideoListEntry? define new handler function that
  //runs setNewVideo func for us
  //note: search API, get the event and add

  var handleVideo = function (video) {
    setNewVideo(video);
  };


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/* <div><h5><em>search</em> view goes here</h5></div> */}
          <Search searchAPI={getYouTubeVideos}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* we can add a useState here for current video */}
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videoListState} handleVideo={handleVideo}/>
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        </div>
      </div>
    </div>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
