import React, {Component} from 'react';

class VideoListItem extends Component{

  render(){

    const video = this.props.video;
    console.log('======= videoItem =======');
    console.log(video);

    return(
        <li>
          <div className='videoListItem'>
            <h4>{video.snippet.title}</h4>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.description.substring(0,80) + '...'}</p>
          </div>
        </li>
    );
  }
}


export default VideoListItem;
