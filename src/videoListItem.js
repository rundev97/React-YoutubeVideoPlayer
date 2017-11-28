import React from 'react';

const VideoListItem = (props) => {

    const video = props.videoItem;
    const onSelectedVideo = props.onSelectedVideo;

    return(
        <li onClick = { () => onSelectedVideo(video)}>
          <div className='videoListItem'>
            <h4>{video.snippet.title}</h4>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <p>{video.snippet.description.substring(0,80) + '...'}</p>
          </div>
        </li>
    );

};


export default VideoListItem;
