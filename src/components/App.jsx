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

  const [videoListState, setVideoListState] = React.useState([]);
  const [currentVideo, setNewVideo] = React.useState(place);

  var timeout = null;
  const searchHandler = (query) => {
    setTimeout(() => {
      searchYouTube(query, (videos => {
        setVideoListState(videos);
      }));
    }, 5000);
  };


  var getYouTubeVideos = function (query) {
    searchYouTube(query, function (videos) {
      setVideoListState(videos);
      setNewVideo(videos[0]);
    });
  };

  useEffect(() => { getYouTubeVideos('react'); }, []);

  var handleVideo = function (video) {
    setNewVideo(video);
  };


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchAPI={searchHandler}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videoListState} handleVideo={handleVideo}/>
        </div>
      </div>
    </div>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
