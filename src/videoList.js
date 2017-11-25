import React, {Component} from 'react';
import VideoListItem from './videoListItem';

class VideoList extends Component{

  render(){

    const videos = this.props.videos.map((video, index) =>
      <VideoListItem video={video} key={video.etag} />

    );

    return(
      <div className='col-md-4'>
        <ul>
          {videos}
        </ul>
      </div>

    );
  }
}


export default VideoList;
