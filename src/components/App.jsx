const { useState } = React;

import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

var App = () => {

  const [videoListState, setVideoListState] = useState(exampleVideoData);
  const [currentVideo, setNewVideo] = useState(exampleVideoData[0]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* we can add a useState here for current video */}
          <VideoPlayer video={currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} setNewVideo={setNewVideo}/>
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        </div>
      </div>
    </div>
  );
};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
