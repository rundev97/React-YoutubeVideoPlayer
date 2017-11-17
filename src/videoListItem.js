import React, {Component} from 'react';

class VideoListItem extends Component{

  render(){

    const video = this.props.video;
    console.log('======= videoItem =======');
    console.log(video);

    return(
        <li>
          <h4>{video.snippet.title}</h4>;
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />;
          <p>{video.snippet.description}</p>;
        </li>
    );
  }
}


export default VideoListItem;
