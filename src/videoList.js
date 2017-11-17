import React, {Component} from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component{

  render(){

    const videos = this.props.videos.map((video, index) =>
      <VideoListItem video={video} key={video.etag} />

    );

    return(
      <ul>
        {videos}
      </ul>

    );
  }
}


export default VideoList;
