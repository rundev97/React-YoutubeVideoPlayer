import React from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {

  const videoItems = props.videos.map((video, index) =>
    <VideoListItem videoItem={video} key={video.etag} />

  );

  return(
    <div className='col-md-4'>
      <ul>
        {videoItems}
      </ul>
    </div>

  );

}


export default VideoList;
